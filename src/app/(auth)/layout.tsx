import { Layout } from "@/shared/uikit/atoms/Layout";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout withTopNavBar>{children}</Layout>;
}
