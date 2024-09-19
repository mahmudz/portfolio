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
        <CopyIcon />
      ) : (
        <CheckIcon className="text-secondary-color transition" />
      )}
    </button>
  );
}
