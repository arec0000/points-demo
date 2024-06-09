import type {
  BaseSyntheticEvent,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";
import type {
  ControllerFieldState,
  ControllerRenderProps,
  DefaultValues,
  FieldValues,
  Path,
  Resolver,
} from "react-hook-form";

type ComponentType = string;
type ComponentCustomOptions = object;
type OptionsByType = Record<ComponentType, ComponentCustomOptions>;
type Component = ReactElement<any, string | JSXElementConstructor<any>>;
type HadleSubmit = (
  e?: BaseSyntheticEvent<object, any, any> | undefined,
) => Promise<void>;
export type ExtraProps = object;
export type FieldsValues = Record<string, any>;

export type ComponentsConfig<T extends OptionsByType = OptionsByType> = T;

export type FormField<C extends ComponentsConfig, V extends FieldsValues> = {
  [T in keyof C]: C[T] & {
    type: T;
    key?: string;
    subfields?: FormField<C, V>[];
    hideErrors?: boolean;
  };
}[keyof C] &
  { [N in Path<V>]: { name: N; defaultValue?: V[N] } }[Path<V>];

type RenderComponent<
  C extends ComponentsConfig,
  T extends keyof C,
  P extends ExtraProps,
> = <V extends FieldValues>(args: {
  field: ControllerRenderProps<V>;
  fieldState: ControllerFieldState;
  options: C[T] & {
    type: T;
    name: string;
    key?: string;
    subfields?: FormField<C, FieldValues>[];
    hideErrors?: boolean;
  };
  props: P;
  isChild: boolean;
  children?: Component[];
}) => Component;

export type FormComponents<C extends ComponentsConfig, P extends ExtraProps> = {
  [T in keyof C]: RenderComponent<C, T, P>;
};

export type LayoutProps = {
  fields: ReactNode[];
  handleSubmit?: HadleSubmit;
};

export type FormLayout<P extends ExtraProps> = (
  props: P & LayoutProps,
) => ReactNode;

export type FormFactoryOptions<
  C extends ComponentsConfig,
  P extends ExtraProps,
> = {
  components: FormComponents<C, P>;
  layout: FormLayout<P>;
};

export type FormProps<
  V extends FieldsValues,
  C extends ComponentsConfig,
  P extends ExtraProps,
> = P & {
  fields: FormField<C, V>[];
  resolver: Resolver<V>;
  defaultValues?: DefaultValues<V>;
  onSubmit?: (values: V) => void;
};
