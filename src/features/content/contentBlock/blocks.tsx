import { Embed } from "@/shared/uikit/atoms/Embed";
import { Blocks } from "./types";
import { MdxBlock } from "./ui/mdxBlock";
import { EmbedsCarousel } from "@/shared/uikit/atoms/EmbedsCarousel";
import { WrappedFormBlock } from "./ui/formBlock/wrappedFormBlock";
import { WrappedMultistepForm } from "./ui/multistepForm/wrappedMultistepForm";

export const blocks: Blocks = {
  mdx: (data) => <MdxBlock content={data.content} />,
  embed: (data) => <Embed {...data} />,
  embedsCarousel: (data) => <EmbedsCarousel {...data} />,
  form: (data) => <WrappedFormBlock data={data} />,
  multistepForm: (data) => <WrappedMultistepForm {...data} />,
};
