import type { FormBlockFields } from "./ui/formBlock/types";
import type { TextVariant } from "@/shared/uikit/atoms/Text";
import type { Size } from "@/shared/types";
import type { FieldsValues } from "@/shared/lib/formFactory/types";

type DataByType = {
  mdx: {
    content: string;
  };
  embed: {
    href: string;
    title: string;
    tags?: string[];
    thumbnail?: {
      src: string;
      alt: string;
    };
    mb?: Size;
  };
  embedsCarousel: {
    items: {
      title: string;
      href: string;
      thumbnail?: {
        src: string;
        alt: string;
      };
    }[];
    mb?: Size;
  };
  form: {
    fields: FormBlockFields;
    buttonText: string;
    schema: any;
    endpoint: string;
    title?: string;
    titleVariant?: TextVariant;
    fieldsGap?: Size;
    gap?: Size;
    buttonVariant?: "primary" | "secondary";
    buttonIsFixed?: boolean;
    defaultValues?: FieldsValues;
  };
  multistepForm: {
    steps: {
      fields: FormBlockFields;
      buttonText: string;
      schema: any;
      endpoint?: string;
      title?: string;
      titleVariant?: TextVariant;
      fieldsGap?: Size;
      gap?: Size;
      buttonVariant?: "primary" | "secondary";
      buttonIsFixed?: boolean;
      defaultValues?: FieldsValues;
    }[];
    endpoint: string;
    searchParamKey?: string;
    scroll?: boolean;
    showProgress?: boolean;
    persist?: boolean;
    persistKey?: string;
    startProgress?: number;
    gap?: Size;
  };
};

export type BlockType<T extends keyof DataByType = keyof DataByType> = T;

export type BlockData<T extends BlockType = BlockType> = DataByType[T];

export type Blocks = {
  [T in BlockType]: (data: BlockData<T>) => React.ReactNode;
};

export type RenderContentBlock = <T extends BlockType>(
  type: T,
  data: BlockData<T>,
) => React.ReactNode;
