import React from "react";
import { FiGithub, FiGlobe, FiLinkedin, FiMail } from "react-icons/fi";
export default function SocialInfoCard() {
  return (
    <div className="border rounded-md p-5 shadow-md lg:w-[600px] md:w-[450px] sm:w-[400px] w-[90vw] min-w-[320px]">
      <h3 className="text-xl font-bold mb-5 flex justify-start items-start gap-2">
        Connect me via my social network <FiGlobe size={20} className="mt-1" />
      </h3>

      <div className="flex justfiy-start items-center gap-2 mb-4 flex-wrap">
        <span className="flex justfiy-start items-center gap-1.5">
          <FiMail size={18} className="inline-block" /> Mail:
        </span>
        <a href="mailto:peteraungmpa2006@gmail.com" target="_blank">
          peteraungmpa2006@gmail.com
        </a>
      </div>

      <div className="flex justfiy-start items-center gap-2 mb-4">
        <span className="flex justfiy-start items-center gap-1.5">
          <FiLinkedin size={18} className="inline-block" /> LinkedIn:
        </span>
        <a href="https://www.linkedin.com/in/peterhyperaung/" target="_blank">
          peterhyperaung
        </a>
      </div>

      <div className="flex justfiy-start items-center gap-2 mb-3">
        <span className="flex justfiy-start items-center gap-1.5">
          <FiGithub size={18} className="inline-block" /> Github:
        </span>
        <a href="https://github.com/PeterHyperAung" target="_blank">
          PeterHyperAung
        </a>
      </div>
    </div>
  );
}
