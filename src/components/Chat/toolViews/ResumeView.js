import React from "react";
import { motion } from "framer-motion";
import { HiArrowDownTray } from "react-icons/hi2";

function ResumeView({ data }) {
  const url = data?.url;
  const filename = data?.filename ?? "Resume.pdf";
  if (!url) return null;

  return (
    <div className="tool-view tool-resume">
      <motion.a
        href={url}
        download={filename}
        className="tool-resume-btn"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <HiArrowDownTray />
        <span>Download Resume</span>
      </motion.a>
    </div>
  );
}

export default ResumeView;
