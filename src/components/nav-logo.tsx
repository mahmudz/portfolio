"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLogo() {
  const path = usePathname();

  return (
    <Link href={"/"} className="text-3xl font-bold">
      M.
    </Link>
  );
}
