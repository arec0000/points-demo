import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/Text";

import classes from "./ResidencePermitCard.module.scss";

interface IProps {
  title: string;
  description: string;
  cost: number | string;
  amountOfDays: string;
  requirements: string;
  details: string;
  onClick?: () => void;
}

export function ResidencePermitCard({
  title,
  description,
  cost,
  amountOfDays,
  requirements,
  details,
  onClick,
}: IProps) {
  return (
    <div className={classes.card}>
      <div className={classes.card__main}>
        <Text variant="h3">{title}</Text>
        <Text variant="large">{description}</Text>
      </div>

      <div className={classes.card__parameters}>
        <div className={classes.card__wrapper}>
          <div className={classes.card__information}>
            <Text variant="h4">{`От ${cost} $`}</Text>
          </div>

          <div className={classes.card__information}>
            <Text variant="h4">{amountOfDays}</Text>
          </div>
        </div>

        <div className={classes.card__requirements}>
          <Text variant="h4">{requirements}</Text>
        </div>

        <Button text={details} variant="primary" onClick={onClick} />
      </div>
    </div>
  );
}
