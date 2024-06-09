import type {
  ComponentsConfig,
  FormProps,
  FormComponents,
  FormLayout,
  FieldsValues,
  FormField,
} from "@/shared/lib/formFactory/types";
import type { Size } from "@/shared/types";
import type { TextVariant } from "@/shared/uikit/atoms/Text";

export type FormBlockConfig = ComponentsConfig<{
  input: {
    inputType?: "text" | "email" | "password";
    placeholder?: string;
    disabled?: boolean;
  };
  phone: {
    label?: string;
    disabled?: boolean;
  };
  textarea: {
    placeholder?: string;
    disabled?: boolean;
  };
  checkbox: {
    label: string;
    disabled?: boolean;
  };
  radio: {
    value: string;
    label: string;
    disabled?: boolean;
  };
  number: {
    label: string;
    max?: number;
    min?: number;
    disabled?: boolean;
  };
  select: {
    options: { value: string; label: string }[];
    placeholder?: string;
    disabled?: boolean;
  };
  date: {
    placeholder?: string;
    disabled?: boolean;
  };
  errorMessage: {};
}>;

export type FormBlockExtraProps = {
  title?: string;
  titleVariant?: TextVariant;
  fieldsGap?: Size;
  gap?: Size;
  buttonText: string;
  buttonVariant?: "primary" | "secondary";
  buttonIsFixed?: boolean;
};

export type FormBlockProps<V extends FieldsValues> = FormProps<
  V,
  FormBlockConfig,
  FormBlockExtraProps
>;

export type FormBlockFields = FormField<FormBlockConfig, FieldsValues>[];

export type Components = FormComponents<FormBlockConfig, FormBlockExtraProps>;
export type Layout = FormLayout<FormBlockExtraProps>;
