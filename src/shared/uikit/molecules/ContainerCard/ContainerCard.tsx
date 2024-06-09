import cx from "clsx";

import { Text } from "../../atoms/Text/Text";

import classes from "./ContainerCard.module.scss";

type IProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  indented?: boolean;
};

export function ContainerCard({
  title,
  description,
  indented = true,
  children,
}: IProps) {
  const cardClassName = cx(classes.card, {
    [classes.indented]: indented,
  });

  return (
    <div className={cardClassName}>
      <Text as="h1" variant="h1" color="white">
        {title}
      </Text>
      {description ? (
        <Text variant="large" color="white">
          {description}
        </Text>
      ) : null}
      {children}
    </div>
  );
}
