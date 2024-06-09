import NextLink from "next/link";

import classes from "./index.module.scss";
import { Text } from "@/shared/uikit/atoms/Text";

export function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <NextLink href={href} className={classes.link}>
      <Text variant="button" color="white">
        {children}
      </Text>
    </NextLink>
  );
}
