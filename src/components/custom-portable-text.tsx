import { PortableTextComponents } from "@portabletext/react";
import { codeToHtml } from "shiki";
import CopyToClipooard from "./copy-to-clipboard";

async function CodeBlock({
  value,
}: {
  value: { language: string; code: string };
}) {
  const out = await codeToHtml(value.code, {
    lang: value.language,
    theme: "catppuccin-mocha",
  });

  return (
    <div className="relative">
      <div className="flex justify-between items-center absolute right-4 top-4">
        <CopyToClipooard content={value.code} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: out }} />
    </div>
  );
}

export const CustomPortableText: PortableTextComponents = {
  types: {
    code: CodeBlock,
  },
};
