import { PortableTextComponents } from "@portabletext/react";
import CodeBlock from "./ui/code-block";
import { cn, slugify } from "@/lib/utils";
import HashScroll from "./hash-scroll";
import { ReactNode } from "react";

const Heading = ({
  level = 1,
  children,
  className,
}: {
  level: string | number;
  children: ReactNode;
  className?: string;
}) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      id={slugify(children)}
      className={cn(
        "font-incognito before:content-['#'] before:hidden hover:before:sm:inline-block hover:before:hidden before:absolute lg:before:-left-5 before:-left-4 lg:before:text-2xl before:text-xl block before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative font-bold tracking-tight dark:text-zinc-100 text-zinc-700 my-8",
        className
      )}
    >
      <HashScroll text={children} />
    </HeadingTag>
  );
};

export const CustomPortableText: PortableTextComponents = {
  types: {
    code: CodeBlock,
  },
  block: {
    normal: ({ children }) => <p className="mt-2 mb-4">{children}</p>,
    h1: ({ children }) => <Heading level={1}>{children}</Heading>,
    h2: ({ children }) => <Heading level={2}>{children}</Heading>,
    h3: ({ children }) => <Heading level={3}>{children}</Heading>,
    h4: ({ children }) => <Heading level={4}>{children}</Heading>,
  },
  marks: {
    em: ({ children }) => (
      <em className="font-incognito font-medium italic">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-bold dark:text-zinc-300 text-zinc-700">
        {children}
      </strong>
    ),
    code: ({ children }) => (
      <code className="font-incognito py-[0.15rem] px-1 rounded-sm font-medium dark:bg-primary-bg bg-secondary-bg dark:text-zinc-200 text-pink-500">
        {children}
      </code>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-[square]">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
};
