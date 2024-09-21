import { PortableTextComponents } from "@portabletext/react";
import { codeToHtml } from "shiki";
import CopyToClipooard from "./copy-to-clipboard";

async function CodeBlock({
  value,
}: {
  value: { language: string; code: string; filename: string };
}) {
  const out = await codeToHtml(value.code, {
    lang: value.language,
    theme: "catppuccin-mocha",
  });

  return (
    <div className="relative">
      <div className="flex justify-between items-center absolute right-4 top-4">
        <div className="bg-slate-700/40 py-1 px-2 rounded mr-3 text-sm">
          {value.filename}
        </div>

        <CopyToClipooard content={value.code} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: out }} className="scrollbar" />
    </div>
  );
}

export const CustomPortableText: PortableTextComponents = {
  types: {
    code: CodeBlock,
  },
};
