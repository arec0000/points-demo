import { onboardingReader } from "@/entities/onboarding/model";
import { FullscreenNotice } from "@/shared/uikit/atoms/FullscreenNotice";
import { countryReader } from "@/entities/country/model";
import { getSlugs } from "@/shared/api/content/lib/getSlugs";
import { COUNTRY_DIR } from "@/entities/country/constants";
import { OnboardingForm } from "@/entities/onboarding/ui/OnboardingForm";

export const revalidate = 2;

export async function generateStaticParams() {
  const slugs = await getSlugs(COUNTRY_DIR);
  return slugs.map((slug) => ({ slug }));
}

export default async function Onboarding({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const onboardingData = await onboardingReader.get();

  const countryData = await countryReader.get(slug);

  if (!countryData || !onboardingData) {
    return (
      <FullscreenNotice
        type="error"
        title="Ошибка, данные страницы не найдены"
      />
    );
  }

  return (
    <OnboardingForm data={onboardingData} countryTitle={countryData.title} />
  );
}
