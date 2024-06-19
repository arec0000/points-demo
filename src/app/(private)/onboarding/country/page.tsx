import { countryListReader, countryReader } from "@/entities/country/model";
import { DefaultLayout } from "@/features/Layout";
import { FullscreenNotice } from "@/features/FullscreenNotice";
import { ProgressBar } from "@/shared/uikit/atoms/ProgressBar";
import { Text } from "@/shared/uikit/atoms/Text";
import util from "@/shared/styles/util.module.scss";
import cx from "clsx";
import { CountryCard } from "@/entities/country/ui/CountryCard";

export const revalidate = 2;

export default async function Country() {
  const slugs = await countryListReader.get();

  if (!slugs) {
    return (
      <FullscreenNotice
        type="error"
        title="Ошибка, данные страницы не найдены"
      />
    );
  }

  const data = await countryReader.getList(slugs);

  return (
    <DefaultLayout title="Переезд">
      <ProgressBar size="lg" max={5} progress={2} className={util.mb_sm} />

      <Text variant="h2">Выберите страну</Text>

      <ul className={cx(util.flex, util.flexCol, util.gap_lg)}>
        {data.map(
          (country) =>
            country && (
              <li key={country?.slug}>
                <CountryCard
                  title={country?.title}
                  slug={country?.slug}
                  info={country.info}
                  thumbnail={country.thumbnail}
                />
              </li>
            ),
        )}
      </ul>
    </DefaultLayout>
  );
}
