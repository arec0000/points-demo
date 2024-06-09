import { FieldBackground } from "@/shared/uikit/atoms/FieldBackground";
import { RadioButton } from "@/shared/uikit/atoms/RadioButton";
import { Text } from "@/shared/uikit/atoms/Text";
import { InputCheckbox } from "@/shared/uikit/atoms/InputCheckbox";
import { PlusMinus } from "@/shared/uikit/atoms/PlusMinus";
import { Input } from "@/shared/uikit/atoms/Input";
import { Textarea } from "@/shared/uikit/atoms/Textarea";
import { InputPhone } from "@/shared/uikit/molecules/InputPhone/InputPhone";
import { InputDropDown } from "@/shared/uikit/molecules/InputDropDown/InputDropDown";
import { InputDateEntry } from "@/shared/uikit/molecules/InputDateEntry";
import { Notification } from "@/shared/uikit/atoms/Notification";

import type { Components } from "./types";

export const components: Components = {
  input: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      field={
        <Input
          type={options.inputType}
          value={field.value}
          onChange={field.onChange}
          placeholder={options.placeholder}
          disabled={options.disabled}
          name={field.name}
        />
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  phone: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      field={
        <InputPhone
          value={field.value}
          onChange={field.onChange}
          disabled={options.disabled}
          label={options.label}
        />
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  textarea: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      field={
        <Textarea
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          disabled={options.disabled}
          placeholder={options.placeholder}
          multiline
          maxLines={4}
        />
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  checkbox: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      field={
        <>
          <Text variant="large">{options.label}</Text>
          <InputCheckbox
            name={field.name}
            checked={field.value}
            onChange={field.onChange}
            disabled={options.disabled}
            variant={isChild ? "secondary" : "primary"}
          />
        </>
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  radio: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      field={
        <>
          <RadioButton
            name={field.name}
            value={options.value}
            checked={field.value === options.value}
            onChange={field.onChange}
            disabled={options.disabled}
            variant={isChild ? "secondary" : "primary"}
          />
          <Text variant="large">{options.label}</Text>
        </>
      }
      details={field.value === options.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  number: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      field={
        <>
          <Text variant="large">{options.label}</Text>
          <PlusMinus
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            max={options.max}
            min={options.min}
            variant={isChild ? "secondary" : "primary"}
          />
        </>
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  select: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      withoutLabel
      field={
        <InputDropDown
          value={field.value}
          onChange={field.onChange}
          options={options.options}
          disabled={options.disabled}
          placeholder={options.placeholder}
        />
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  date: ({ field, fieldState, options, children, isChild }) => (
    <FieldBackground
      spaceBetween
      withoutLabel
      field={
        <InputDateEntry
          value={field.value}
          onChange={(date) => field.onChange(date?.toJSON())}
          placeholder={options.placeholder}
          disabled={options.disabled}
        />
      }
      details={field.value && children}
      variant={isChild ? "subfield" : "field"}
      errorMessage={options.hideErrors ? undefined : fieldState.error?.message}
    />
  ),
  errorMessage: ({ fieldState }) => (
    <>
      {fieldState.error?.message && (
        <Notification text={fieldState.error?.message} iconColor="red" />
      )}
    </>
  ),
};
