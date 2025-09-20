import { codeToHtml } from "shiki";
import CopyToClipooard from "../copy-to-clipboard";

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
      <div
        dangerouslySetInnerHTML={{ __html: out }}
        className="scrollbar p-4"
      />
    </div>
  );
}

export default CodeBlock;
