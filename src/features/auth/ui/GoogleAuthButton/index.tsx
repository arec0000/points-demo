"use client";

import { Button } from "@/shared/uikit/atoms/Button";

import classes from "./index.module.scss";
import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { getGoogleApiToken } from "../../actions/getGoogleApiToken";
import { useMutation } from "@tanstack/react-query";
import { getGoogleSignInMutation } from "../../mutations";
import { useRouter } from "next/navigation";

export function GoogleAuthButton() {
  const router = useRouter();
  const { mutate } = useMutation(getGoogleSignInMutation(router.push));

  async function handleClick() {
    const { access_token } = await getGoogleApiToken();
    mutate(access_token);
  }

  return (
    <div>
      <Button
        text={
          <span className={classes.googleButtonContent}>
            <Icon32Px name="google" color="auto" />
            Google
          </span>
        }
        onClick={handleClick}
        className={classes.googleButton}
      />
    </div>
  );
}
