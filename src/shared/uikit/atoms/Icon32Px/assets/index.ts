import { ArrowBackSvg } from "./ArrowBackSvg";
import { ArrowForwardSvg } from "./ArrowForwardSvg";
import { AviasalesSvg } from "./AviasalesSvg";
import { CalendarSvg } from "./CalendarSvg";
import { CameraSvg } from "./CameraSvg";
import { ChangeSvg } from "./ChangeSvg";
import { CrossSvg } from "./CrossSvg";
import { DropDownSvg } from "./DropDownSvg";
import { DropDownUpSvg } from "./DropDownUpSvg";
import { EyeOffSvg } from "./EyeOffSvg";
import { EyeOnSvg } from "./EyeOnSvg";
import { InfoSvg } from "./InfoSvg";
import { LoadSvg } from "./LoadSvg";
import { MinusSvg } from "./MinusSvg";
import { PlusSvg } from "./PlusSvg";
import { PrimaryGradientSvg } from "./PrimaryGradientSvg";
import { SearchSvg } from "./SearchSvg";
import { TickSvg } from "./TickSvg";
import { TimeSvg } from "./TimeSvg";
import { WriteSvg } from "./WriteSvg";
import { GoogleSvg } from "./GoogleSvg";

export const icons = {
  arrowBack: ArrowBackSvg,
  arrowForward: ArrowForwardSvg,
  aviasales: AviasalesSvg,
  calendar: CalendarSvg,
  camera: CameraSvg,
  change: ChangeSvg,
  cross: CrossSvg,
  dropDown: DropDownSvg,
  dropDownUp: DropDownUpSvg,
  eyeOff: EyeOffSvg,
  eyeOn: EyeOnSvg,
  info: InfoSvg,
  load: LoadSvg,
  minus: MinusSvg,
  plus: PlusSvg,
  search: SearchSvg,
  tick: TickSvg,
  time: TimeSvg,
  write: WriteSvg,
  google: GoogleSvg,
} as const;

export const gradients = {
  primary: PrimaryGradientSvg,
} as const;
