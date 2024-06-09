import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

type CustomComponents = Record<string, any>;

export function useMdxComponent(
  code: string,
  customComponents?: CustomComponents,
) {
  return useMemo(() => {
    const Component = getMDXComponent(code, {});

    return function MdxComponent({ className }: { className?: string }) {
      return (
        <div className={className}>
          <Component components={{ ...customComponents }} />
        </div>
      );
    };
  }, [code]);
}

export function Mdx({
  code,
  components,
  ...props
}: {
  code: string;
  components?: CustomComponents;
  className?: string;
}) {
  const Component = useMdxComponent(code, components);
  return <Component {...props} />;
}
