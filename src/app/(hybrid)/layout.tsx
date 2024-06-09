import { AuthGuard } from "@/features/auth/ui/AuthGuard";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard redirect={false}>{children}</AuthGuard>;
}
