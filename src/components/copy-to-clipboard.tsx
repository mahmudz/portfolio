"use client";

import { CheckIcon, CopyCheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function CopyToClipooard({ content }: { content: string }) {
  const [status, setStatus] = useState(false);

  function handleClipboard() {
    navigator.clipboard.writeText(content);
    setStatus(true);

    setTimeout(() => {
      setStatus((status) => !status);
    }, 1500);
  }

  return (
    <button onClick={handleClipboard}>
      {!status ? (
        <CopyIcon size={20} />
      ) : (
        <CheckIcon size={20} className="text-emerald-300 transition" />
      )}
    </button>
  );
}
