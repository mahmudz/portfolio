"use client";

import { Share2Icon, CheckIcon } from "lucide-react";
import { useState } from "react";

export default function ShareButton() {
  const [status, setStatus] = useState(false);

  function handleClipboard() {
    setStatus(true);

    setTimeout(() => {
      setStatus((status) => !status);
    }, 1500);
  }

  return (
    <button onClick={handleClipboard}>
      {!status ? (
        <Share2Icon size={20} />
      ) : (
        <CheckIcon size={20} className="text-secondary-color transition" />
      )}
    </button>
  );
}
