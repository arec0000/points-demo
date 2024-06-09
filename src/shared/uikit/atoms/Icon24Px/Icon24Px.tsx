import cx from 'clsx';

import { icons, gradients } from './assets';

import type { Icon24PxColor, Icon24PxName } from './types';

import classes from './Icon24Px.module.scss';

interface IProps {
  name: Icon24PxName;
  color?: Icon24PxColor;
}

export function Icon24Px({ name, color = 'gray90' }: IProps) {
  const gradient = getGradient(color);
  return (
    <div className={cx(classes.icon, classes[color])}>
      {icons[name](gradient)}
    </div>
  );
}

function getGradient(color: string) {
  const gradient = {
    primaryGradient: gradients.primary,
  }[color];

  if (gradient) {
    return gradient();
  }

  return undefined;
}
