import cx from 'clsx';

import { Icon24Px } from '../Icon24Px';
import { Text } from '../Text';

import type { Icon24PxWithLabelName, Icon24PxWithLabelColor } from './types';

import classes from './Icon24PxWithLabel.module.scss';

interface IProps {
  label: string;
  iconName: Icon24PxWithLabelName;
  color: Icon24PxWithLabelColor;
  className?: string;
}

export function Icon24PxWithLabel({
  iconName,
  label,
  color,
  className,
}: IProps) {
  const iconClassName = cx(classes.icon, {
    [className as string]: !!className,
  });
  return (
    <div className={iconClassName}>
      <Icon24Px name={iconName} color={color} />
      <Text color={color} variant="menu">
        {label}
      </Text>
    </div>
  );
}
