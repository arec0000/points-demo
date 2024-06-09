import { Layout } from "@/shared/uikit/atoms/Layout";
import { Menu } from "../Menu";
import { TopNavBar } from "../TopNavBar";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

export function PrimaryLayout({
  title,
  children,
  isLoading,
}: {
  title: string;
  children: React.ReactNode;
  isLoading?: boolean;
}) {
  return (
    <>
      <Menu />

      <TopNavBar title={title} withMenu />

      <Layout withTopNavBar withMenu gap="lg">
        {isLoading && <DoatsLoader />}

        {children}
      </Layout>
    </>
  );
}
