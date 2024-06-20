"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notFound, useRouter } from "next/navigation";
import { FormBlock } from "@/features/content/contentBlock/ui/formBlock";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/shared/uikit/atoms/Button";
import {
  getLogoutMutation,
  getUpdateAvatarMutation,
  getUpdateProfileMutation,
} from "@/entities/profile/mutations";
import { getProfileQuery } from "@/entities/profile/queries";
import { useState } from "react";
import { AvatarInput } from "@/features/AvatarInput";
import { PrimaryLayout } from "@/features/Layout";
import { AxiosError } from "axios";

const schema = z.object({
  name: z
    .string()
    .nullable()
    .transform((v) => v ?? undefined)
    .pipe(z.string({ required_error: "Введите имя" })),
  email: z
    .string({ required_error: "Введите email" })
    .email("Введите корректный email"),
});

type Fields = z.infer<typeof schema>;

export function ProfileForm() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const { data, isPending: isDataPending, error } = useQuery(getProfileQuery());

  const { mutate: logout, isPending: isLogoutPending } = useMutation(
    getLogoutMutation(() => router.push("/")),
  );

  const { mutate: updateProfile, isPending: isUpdateProfilePending } =
    useMutation(getUpdateProfileMutation(queryClient));

  const { mutate: updateAvatar, isPending: isUpdateAvatarPending } =
    useMutation(
      getUpdateAvatarMutation(queryClient, () => setAvatarFile(null)),
    );

  if (error instanceof AxiosError && error.response?.status === 404) {
    notFound();
  }

  return (
    <PrimaryLayout
      title="Мой профиль"
      isLoading={
        isLogoutPending ||
        isUpdateProfilePending ||
        isUpdateAvatarPending ||
        isDataPending
      }
    >
      <AvatarInput src={data?.avatar} onChange={setAvatarFile} />

      {data && (
        <FormBlock
          buttonText="Изменить"
          resolver={zodResolver(schema)}
          defaultValues={data as Fields}
          title="Учетные данные"
          fields={[
            { type: "input", name: "name", placeholder: "Имя" },
            { type: "input", name: "email", placeholder: "e-mail" },
          ]}
          onSubmit={(values: Fields) => {
            updateProfile(values);
            if (avatarFile) {
              updateAvatar(avatarFile);
            }
          }}
        />
      )}

      <Button
        text="Выйти из аккаунта"
        variant="danger"
        onClick={() => logout()}
      />
    </PrimaryLayout>
  );
}
