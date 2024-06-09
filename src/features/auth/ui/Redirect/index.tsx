import { FullscreenNotice } from "@/shared/uikit/atoms/FullscreenNotice";
import Link from "next/link";

import classes from "./index.module.scss";
import { Text } from "@/shared/uikit/atoms/Text";

export function AuthRedirect() {
  return (
    <>
      <FullscreenNotice
        type="greeting"
        description="Расскажем плюсы и минусы стран для переезда. Подготовим к переезду и поможем на первых этапах"
      />

      <Link href="/sign-in" className={classes.link}>
        <Text variant="button" color="white">
          Войти
        </Text>
      </Link>
    </>
  );
}
