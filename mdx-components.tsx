import CodeBlock from "@/components/ui/code-block";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: (props) => {
      const { className, children } = props;
      const language = className?.split("-").pop()!;

      return <CodeBlock value={{ code: children?.toString()!, language }} />;
    },
    ...components,
  };
}
