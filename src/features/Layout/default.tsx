"use client";

import { useIsDesktop } from "@/shared/lib/useIsDesktop";
import React from "react";
import { Menu } from "../Menu";
import { TopNavBar } from "../TopNavBar";
import { Layout } from "@/shared/uikit/atoms/Layout";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

export function DefaultLayout({
  title,
  children,
  isLoading,
}: {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
}) {
  const isDesktop = useIsDesktop();

  return (
    <>
      {isDesktop && <Menu />}

      <TopNavBar title={title} withMenu />

      <Layout
        withTopNavBar
        withMenu={isDesktop}
        gap="lg"
        withFixedButton={false}
      >
        {isLoading && <DoatsLoader />}

        {children}
      </Layout>
    </>
  );
}
