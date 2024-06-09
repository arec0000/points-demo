import cx from 'clsx';

import classes from './UnviewedIndicator.module.scss';

interface IProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
}

export function UnviewedIndicator({ active, children, className }: IProps) {
  return (
    <div className={classes.unviewedIndicatorField}>
      {active && <div className={cx(classes.unviewedIndicator, className)} />}
      {children}
    </div>
  );
}
