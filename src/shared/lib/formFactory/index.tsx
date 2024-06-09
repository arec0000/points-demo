"use client";

import { Controller, useForm } from "react-hook-form";
import type {
  ComponentsConfig,
  FormFactoryOptions,
  FormField,
  FormProps,
  ExtraProps,
  FieldsValues,
} from "./types";

export function formFactory<
  C extends ComponentsConfig,
  P extends ExtraProps = {},
>(factoryOptions: FormFactoryOptions<C, P>) {
  return function Form<V extends FieldsValues>({
    fields,
    resolver,
    defaultValues,
    onSubmit,
    ...props
  }: FormProps<V, C, P>) {
    const { handleSubmit, control, formState } = useForm({
      defaultValues,
      resolver,
    });

    function renderField(
      field: FormField<C, V>,
      index: number,
      isChild = false,
    ) {
      const renderComponent = factoryOptions.components[field.type];

      return (
        <Controller
          key={field.key ?? index}
          control={control}
          name={field.name}
          defaultValue={field.defaultValue}
          render={(args) => {
            return renderComponent({
              field: args.field,
              fieldState: args.fieldState,
              options: field,
              props: props as P,
              children: field.subfields?.map((subfield, i) =>
                renderField(subfield, i, true),
              ),
              isChild: isChild,
            });
          }}
        />
      );
    }

    return factoryOptions.layout({
      ...(props as P),
      fields: fields.map((field, i) => renderField(field, i)),
      handleSubmit: onSubmit && handleSubmit(onSubmit),
    });
  };
}
