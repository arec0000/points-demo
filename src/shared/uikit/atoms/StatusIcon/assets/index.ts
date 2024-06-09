import { CrossSvg } from './CrossSvg';
import { LoadSvg } from './LoadSvg';
import { NoticeSvg } from './NoticeSvg';
import { TickSvg } from './TickSvg';
import { TimeSvg } from './TimeSvg';

import type { Status } from '../types';

export function getIconByStatus(status: Status) {
  const statusIcons: Partial<Record<Status, () => React.ReactNode>> = {
    rejected: CrossSvg,
    inProcessWithSpecificDate: LoadSvg,
    notice: NoticeSvg,
    finished: TickSvg,
    inProcess: TimeSvg,
  };

  const icon = statusIcons[status];

  if (icon) {
    return icon();
  }

  return undefined;
}
