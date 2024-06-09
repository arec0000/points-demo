"use client";

import { GoogleAuthButton } from "@/features/auth/ui/GoogleAuthButton";

import classes from "./index.module.scss";
import { EmailAuthForm } from "@/features/auth/ui/EmailAuthForm";
import { Divider } from "@/shared/uikit/atoms/Divider";
import { useStep } from "@/shared/lib/useStep";

export function SignIn() {
  const { step } = useStep();

  return (
    <div className={classes.auth}>
      <EmailAuthForm />

      {step === 0 && (
        <>
          <Divider />

          <GoogleAuthButton />
        </>
      )}
    </div>
  );
}
