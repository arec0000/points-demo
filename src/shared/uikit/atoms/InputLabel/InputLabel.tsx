import { Text } from '../Text';

interface IProps {
  text: string;
  className?: string;
}

export function InputLabel({ text, className }: IProps) {
  return (
    <Text className={className} variant="small" color="gray30">
      {text}
    </Text>
  );
}
