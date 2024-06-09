import { notFound } from "next/navigation";
import { ContentBlockAdapter } from "@/features/content";
import { renderContentBlock } from "@/features/content/contentBlock";
import { countryReader } from "@/entities/country/model";
import { wayReader } from "@/entities/way/model";
import { COUNTRY_DIR } from "@/entities/country/constants";
import { getSlugs } from "@/shared/api/content/lib/getSlugs";
import { DefaultLayout } from "@/features/Layout";
import Image from "next/image";
import { Tabs } from "@/shared/uikit/atoms/Tabs";
import { WayCard } from "@/entities/way/ui/WayCard";
import { InfoLine } from "@/shared/uikit/atoms/InfoLine";
import util from "@/shared/styles/util.module.scss";
import cx from "clsx";
import classes from "./index.module.scss";

export const revalidate = 2;

export async function generateStaticParams() {
  const slugs = await getSlugs(COUNTRY_DIR);
  return slugs.map((slug) => ({ slug }));
}

export default async function Country({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await countryReader.get(slug);

  if (!data) {
    notFound();
  }

  const ways = data.ways && (await wayReader.getList(data.ways));

  const contentBlockAdapter = new ContentBlockAdapter();

  const blocksData = await contentBlockAdapter.map(data.blocks);

  return (
    <DefaultLayout title={data.title}>
      {data.thumbnail && (
        <div className={classes.thumbnail}>
          <Image
            src={data.thumbnail.src}
            alt={data.thumbnail.alt}
            fill
            sizes="80vw"
          />
        </div>
      )}

      <Tabs
        options={[
          { label: "Виды ВНЖ", value: "ways" },
          { label: "О стране", value: "about" },
        ]}
        initial="ways"
        tabs={{
          ways:
            ways?.length &&
            ways.map((way) => (
              <WayCard
                key={way.slug}
                parentSlug={slug}
                slug={way.slug}
                title={way.title}
                description={way.description}
                info={way.info}
              />
            )),
          about: (
            <>
              {blocksData?.map(
                (blockData) =>
                  blockData &&
                  renderContentBlock(blockData.type, blockData.data),
              )}

              {data.info?.length && (
                <ul className={cx(util.flex, util.flexCol, util.gap_sm)}>
                  {data.info.map((item, i) => (
                    <li key={i}>
                      <InfoLine label={item.label} value={item.value} />
                    </li>
                  ))}
                </ul>
              )}
            </>
          ),
        }}
      />
    </DefaultLayout>
  );
}
