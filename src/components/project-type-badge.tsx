"use client";

import { cn } from "@/lib/utils";
import { ProjectType } from "@/types";
import { useState } from "react";
import { motion } from "framer-motion";

const variants = {
  notExpanded: {
    width: "8px",
    height: "8px",
  },
  expanded: {
    width: "auto",
    height: "auto",
    transition: {
      delayChildren: 0.26,
    },
  },
};

const labelVariant = {
  notExpanded: { opacity: 0, padding: 0 },
  expanded: {
    opacity: 1,
    padding: "2px 8px",
  },
};

const types = {
  "client-work": {
    label: "Client Work",
    color: "bg-cyan-500",
  },
  "company-project": {
    label: "Company Project",
    color: "bg-blue-500",
  },
  "side-project": {
    label: "Side Project",
    color: "bg-lime-500",
  },
  "open-source": {
    label: "Open Source",
    color: "bg-green-500",
  },
};

export default function ProjectTypeBadge({
  project,
}: {
  project: ProjectType;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-2 cursor-pointer group" onClick={() => setExpanded(true)}>
      <motion.div
        animate={expanded ? "expanded" : "notExpanded"}
        initial="notExpanded"
        variants={variants}
        className={cn(
          "rounded-full select-none whitespace-nowrap capitalize group-hover:ring-4 text-white text-xs",
          project.type ? types[project.type].color : ""
        )}
      >
        <motion.div variants={labelVariant}>
          {types[project.type].label}
        </motion.div>
      </motion.div>
    </div>
  );
}