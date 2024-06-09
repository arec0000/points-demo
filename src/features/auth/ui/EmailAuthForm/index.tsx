"use client";

import { emailAuthSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormBlock } from "@/features/content/contentBlock/ui/formBlock";
import { useMutation } from "@tanstack/react-query";
import { getDevSignInMutation } from "../../mutations";
import { useRouter } from "next/navigation";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

export function EmailAuthForm() {
  const router = useRouter();

  const { mutate, isPending } = useMutation(getDevSignInMutation(router.push));

  return (
    <>
      {isPending ?? <DoatsLoader />}
      <FormBlock
        title="Вход"
        resolver={zodResolver(emailAuthSchema)}
        fields={[
          {
            type: "input",
            name: "email",
            inputType: "email",
            placeholder: "email",
          },
        ]}
        buttonText="Войти через email"
        gap="xl"
        onSubmit={mutate}
      />
    </>
  );
}
