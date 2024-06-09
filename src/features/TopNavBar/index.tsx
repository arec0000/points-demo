"use client";

import { useRouter } from "next/navigation";
import { Icon32Px } from "../../shared/uikit/atoms/Icon32Px";
import { Text } from "../../shared/uikit/atoms/Text";

import { TopNavBarLayout } from "./layout";
import { Size } from "@/shared/types";

import classes from "./index.module.scss";

export function TopNavBar({
  title,
  route,
  onBack,
  mb,
  withMenu,
}: {
  title: React.ReactNode;
  onBack?: () => void;
  route?: string;
  mb?: Size;
  withMenu?: boolean;
}) {
  const router = useRouter();

  function onClick() {
    if (onBack) {
      onBack();
      return;
    }

    if (route) {
      router.push(route);
      return;
    }

    router.back();
  }

  return (
    <TopNavBarLayout
      className={withMenu ? classes.withMenu : undefined}
      mb={mb}
    >
      <button onClick={onClick}>
        <Icon32Px name="arrowBack" color="gray90" />
      </button>
      <Text as="h1" variant="h3" color="black" className={classes.title}>
        {title}
      </Text>
    </TopNavBarLayout>
  );
}
