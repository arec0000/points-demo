"use client";

import { emailAuthSchema } from "./schemas";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormBlock } from "@/features/content/contentBlock/ui/formBlock";

export function EmailAuthForm() {
  return (
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
      onSubmit={(values) => {
        console.log(values);
      }}
    />
  );
}
