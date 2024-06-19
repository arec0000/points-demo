"use client";

import { getProfileQuery } from "@/entities/profile/queries";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AuthProvider } from "../../context";
import { FullscreenNotice } from "@/features/FullscreenNotice";
import { Layout } from "@/shared/uikit/atoms/Layout";
import { AuthRedirect } from "../Redirect";

export function AuthGuard({
  children,
  redirect = true,
}: {
  children: React.ReactNode;
  redirect?: boolean;
}) {
  const { isPending, error } = useQuery(getProfileQuery());

  if (isPending) {
    return <DoatsLoader />;
  }

  if (error instanceof AxiosError) {
    if (redirect && error.response?.status == 401) {
      return (
        <Layout>
          <AuthRedirect />
        </Layout>
      );
    }

    if (error.response?.status != 401) {
      return (
        <Layout>
          <FullscreenNotice type="error" title={error.message} />
        </Layout>
      );
    }
  }

  return (
    <AuthProvider value={{ isAuthorized: !error }}>{children}</AuthProvider>
  );
}
