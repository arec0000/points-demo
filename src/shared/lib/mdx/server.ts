import { bundleMDX } from "mdx-bundler";

export const compileMDX = (source: string) => bundleMDX({ source });
