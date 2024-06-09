import { notFound } from "next/navigation";
import { countryReader } from "@/entities/country/model";
import { wayReader } from "@/entities/way/model";
import { getSlugs } from "@/shared/api/content/lib/getSlugs";
import { COUNTRY_DIR } from "@/entities/country/constants";
import { DefaultLayout } from "@/features/Layout";
import { Text } from "@/shared/uikit/atoms/Text";
import util from "@/shared/styles/util.module.scss";
import cx from "clsx";
import { InfoLine } from "@/shared/uikit/atoms/InfoLine";
import { Link } from "@/features/Link";

export const revalidate = 2;

export async function generateStaticParams() {
  const slugs = await getSlugs(COUNTRY_DIR);

  const countriesData = await countryReader.getList(slugs);

  const res: { slug: string; subslug: string }[] = [];

  countriesData.forEach((coutry) => {
    coutry.ways?.forEach((way) => {
      res.push({ slug: coutry.slug, subslug: way });
    });
  });

  return res;
}

export default async function Way({
  params: { slug, subslug },
}: {
  params: { slug: string; subslug: string };
}) {
  const countryData = await countryReader.get(slug);
  const data = await wayReader.get(subslug);

  if (!countryData || !data || !countryData.ways?.includes(subslug)) {
    notFound();
  }

  return (
    <DefaultLayout title={data.title}>
      {data.description && (
        <div className={cx(util.flex, util.flexCol, util.gap_sm)}>
          <Text variant="h2">Для кого</Text>
          <Text variant="large">{data.description}</Text>
        </div>
      )}

      {data.info?.length && (
        <ul className={cx(util.grid_2col, util.gap_md, util.mb_sm)}>
          {data.info.map((item, i) => (
            <li
              key={i}
              style={
                item.cols ? { gridColumn: `span ${item.cols}` } : undefined
              }
            >
              <InfoLine
                label={item.label}
                value={item.value}
                lines={item.lines}
                topImage={item.topImage}
                leftImage={item.leftImage}
              />
            </li>
          ))}
        </ul>
      )}

      <Link href={`/onboarding/${slug}`}>Выбрать</Link>
    </DefaultLayout>
  );
}
