import React, { useState } from "react";

import { Switch } from "../../atoms/Switch/Switch";

import classes from "./SegmentedControls.module.scss";

interface IProps {
  option1Text: string;
  option2Text: string;
  onChange: (selectedOption: string) => void;
}

export function SegmentedControls({
  option1Text,
  option2Text,
  onChange,
}: IProps) {
  const [selectedOption, setSelectedOption] = useState<string>(option1Text);

  const handleSwitchClick = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className={classes.segment}>
      <Switch
        text={option1Text}
        selected={selectedOption === option1Text}
        onClick={() => handleSwitchClick(option1Text)}
      />
      <input
        className={classes.segment__input}
        type="checkbox"
        value={option1Text}
        checked={selectedOption === option1Text}
        onChange={() => handleSwitchClick(option1Text)}
      />
      <Switch
        text={option2Text}
        selected={selectedOption === option2Text}
        onClick={() => handleSwitchClick(option2Text)}
      />
      <input
        className={classes.segment__input}
        type="checkbox"
        value={option2Text}
        checked={selectedOption === option2Text}
        onChange={() => handleSwitchClick(option2Text)}
      />
    </div>
  );
}
