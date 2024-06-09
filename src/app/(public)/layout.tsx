import { TopNavBar } from "@/features/TopNavBar";
import { Layout } from "@/shared/uikit/atoms/Layout";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout withTopNavBar>
        <TopNavBar title="Перейти в приложение" route="/" />
        {children}
      </Layout>
    </>
  );
}
