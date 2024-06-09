import { Menu } from "@/features/Menu";
import { FullscreenNotice } from "@/shared/uikit/atoms/FullscreenNotice";
import { Layout } from "@/shared/uikit/atoms/Layout";

export default function ServicesPage() {
  return (
    <Layout withMenu>
      <FullscreenNotice
        type="maintenance"
        title="Раздел находится в разработке"
        description="Раздел находится в разработке
        Мы откроем его в ближайшее время, а пока можете начать квест "
      />
      <Menu />
    </Layout>
  );
}
