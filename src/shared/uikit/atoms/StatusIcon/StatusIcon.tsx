import cx from 'clsx';

import { getIconByStatus } from './assets';

import type { Status } from './types';

import classes from './StatusIcon.module.scss';

interface IProps {
  status: Status;
}

export function StatusIcon({ status }: IProps) {
  const icon = getIconByStatus(status);
  return <div className={cx(classes.statusIcon, classes[status])}>{icon}</div>;
}
