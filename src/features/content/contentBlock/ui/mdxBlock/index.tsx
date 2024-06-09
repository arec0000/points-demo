import classes from "./index.module.scss";

import { components } from "./components";
import { getMDXComponent } from "mdx-bundler/client";
import { compileMDX } from "@/shared/lib/mdx/server";

export async function MdxBlock({ content }: { content: string }) {
  const { code } = await compileMDX(content);
  const Component = getMDXComponent(code);

  return (
    <div className={classes.mdx}>
      <Component components={components} />
    </div>
  );
}
