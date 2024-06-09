import { ArrowBackSvg } from './ArrowBackSvg';
import { ArrowForwardSvg } from './ArrowForwardSvg';
import { ChecklistSvg } from './ChecklistSvg';
import { HomeSvg } from './HomeSvg';
import { InfoSvg } from './InfoSvg';
import { MediaSvg } from './MediaSvg';
import { PersonSvg } from './PersonSvg';
import { PrimaryGradientSvg } from './PrimaryGradientSvg';
import { ShopSvg } from './ShopSvg';
import { TimeSvg } from './TimeSvg';
import { WarningSvg } from './WarningSvg';

export const icons = {
  arrowBack: ArrowBackSvg,
  arrowForward: ArrowForwardSvg,
  checklist: ChecklistSvg,
  home: HomeSvg,
  info: InfoSvg,
  media: MediaSvg,
  person: PersonSvg,
  shop: ShopSvg,
  time: TimeSvg,
  warning: WarningSvg,
} as const;

export const gradients = {
  primary: PrimaryGradientSvg,
} as const;
