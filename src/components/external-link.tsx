import { ArrowUpRight, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function ExternalLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <div className="hover:translate-x-1 transition">
      <Link className="link" href={href} target="_blank">
        {children ? children : <ArrowUpRight />}
      </Link>
    </div>
  );
}
