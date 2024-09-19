"use client";

import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      className="transition hover:-translate-x-1 cursor-pointer"
      onClick={() => router.back()}
    >
      <ArrowLeftIcon />
    </div>
  );
}
