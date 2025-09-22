// "use client";
import { slugify } from "@/lib/utils";
import Link from "next/link";

type props = {
  text: React.ReactNode;
  event?: any;
};

export default function HashScroll({ text, event }: props) {
  return (
    <Link
      onClick={event}
      href={`#${slugify(text)}`}
    >
      {text}
    </Link>
  );
}