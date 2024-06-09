import type { ILinkData } from "./types";

export function getLinks(isOnboardingSaved?: boolean) {
  const links: ILinkData[] = [
    {
      label: "Главная",
      iconName: "home",
      href: "/",
      paths: ["/"],
    },
    {
      label: "Услуги",
      iconName: "shop",
      href: "/service",
      paths: ["/service"],
    },
    {
      label: "Квесты",
      iconName: "checklist",
      href: isOnboardingSaved ? "/quest/relocate" : "/onboarding/country",
      paths: ["/quest", "/onboarding"],
    },
    {
      label: "Медиа",
      iconName: "media",
      href: "/article-feed-internal",
      paths: ["/article-internal", "/article-feed-internal"],
    },
    {
      label: "Профиль",
      iconName: "person",
      href: "/profile",
      paths: ["/profile"],
    },
  ];

  return links;
}
