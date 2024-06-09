"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icon24PxWithLabel } from "@/shared/uikit/atoms/Icon24PxWithLabel";

import { MenuLayout } from "./layout";
import { getLinks } from "./constants";

import classes from "./index.module.scss";
import { ILinkData } from "./types";
import { getOnboardingQuery } from "@/entities/onboarding/queries";
import { useQuery } from "@tanstack/react-query";

export function Menu() {
  const pathname = usePathname();
  const textDecorationStyle = {
    textDecoration: "none",
  };

  const { data } = useQuery(getOnboardingQuery());

  const links = getLinks(Boolean(data));

  const activePath = getActive(pathname, links);

  return (
    <MenuLayout>
      {links.map((link) => (
        <Link key={link.label} href={link.href} style={textDecorationStyle}>
          <Icon24PxWithLabel
            className={classes.menu}
            iconName={link.iconName}
            label={link.label}
            color={
              link.paths.find((path) => path === activePath)
                ? "primaryGradient"
                : "gray20"
            }
          />
        </Link>
      ))}
    </MenuLayout>
  );
}

function getActive(currentPath: string, links: ILinkData[]) {
  const actives: string[] = [];

  links.forEach((link) => {
    link.paths.forEach((path) => {
      if (currentPath.startsWith(path)) {
        actives.push(path);
      }
    });
  });

  let mostSpecific = actives[0];

  for (let i = 1; i < actives.length; i += 1) {
    const item = actives[i];

    if (item.length > mostSpecific.length) {
      mostSpecific = item;
    }
  }

  return mostSpecific;
}
