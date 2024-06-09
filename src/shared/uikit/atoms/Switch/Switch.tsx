import cx from 'clsx';

import { Text } from '../Text';

import classes from './Switch.module.scss';

interface IProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}

export function Switch({ text, selected, onClick }: IProps) {
  const buttonClassName = cx(classes.switch, {
    [classes.switch__selected]: selected,
  });
  return (
    <button className={buttonClassName} onClick={onClick}>
      <Text color={selected ? 'white' : 'blue'} variant="h4">
        {text}
      </Text>
    </button>
  );
}
