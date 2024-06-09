import cx from "clsx";

import { Button } from "@/shared/uikit/atoms/Button";
import { Text } from "@/shared/uikit/atoms/Text";

import type { Layout } from "./types";

import classes from "./index.module.scss";
import util from "@/shared/styles/util.module.scss";

export const layout: Layout = ({
  fields,
  handleSubmit,
  title,
  titleVariant = "h2",
  gap = "lg",
  fieldsGap = "sm",
  buttonText,
  buttonVariant = "primary",
  buttonIsFixed,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={cx(
        util.flex,
        util.flexCol,
        util[`gap_${gap}`],
        buttonIsFixed && classes.withFixedButton,
      )}
    >
      {title && <Text variant={titleVariant}>{title}</Text>}

      <div className={cx(util.flex, util.flexCol, util[`gap_${fieldsGap}`])}>
        {fields}
      </div>

      <Button
        text={buttonText}
        type="submit"
        variant={buttonVariant}
        className={buttonIsFixed ? classes.button_fixed : undefined}
      />
    </form>
  );
};
