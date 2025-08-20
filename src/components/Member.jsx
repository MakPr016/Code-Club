import React from "react";
import { Mail, Github, UserRound } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

const Member = ({ name = "User", email = "", linkedin = "", github = "", team = "core" }) => {
  const mutedText = "text-[#616161]";
  const activeText = "text-[#9aa0a6] hover:text-white transition-colors";
  const disabledIcon = "text-[#616161] opacity-50 cursor-not-allowed pointer-events-none";

  const safeTeam = team ? team.toUpperCase() : "TEAM N/A";
  const safeName = name || "Name unavailable";

  const hasLinkedin = Boolean(linkedin);
  const hasGithub = Boolean(github);
  const hasEmail = Boolean(email);
  const emailHref = hasEmail ? `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}` : undefined;

  return (
    <div
      className="
        font-robot card h-60 w-53
        flex flex-col items-center justify-start
        rounded-2xl
        shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_40px_-20px_rgba(0,0,0,0.6)]
        relative p-5
      "
    >
      <div className="w-12 h-12 rounded-full bg-[#2a2a2a] mt-1 flex justify-center items-center">
        <UserRound className="w-11 h-11 rounded-full text-[#777]" />
      </div>

      <div className="flex flex-col items-center gap-1 mt-5">
        <h3 className={`text-xl text-center tracking-wide ${name ? "font-semibold text-white" : mutedText}`}>{safeName}</h3>
        <p className={`text-[12px] tracking-[0.18em] uppercase ${team ? "text-[#9aa0a6]" : mutedText}`}>{safeTeam}</p>
      </div>

      <div className="flex items-center gap-6 mt-auto mb-2">
        {hasLinkedin ? (
          <a href={linkedin} target="_blank" rel="noreferrer" className={activeText} aria-label="LinkedIn">
            <FaLinkedinIn className="w-6 h-6" />
          </a>
        ) : (
          <span aria-disabled="true" className={disabledIcon}>
            <FaLinkedinIn className="w-6 h-6" />
          </span>
        )}

        {hasGithub ? (
          <a href={github} target="_blank" rel="noreferrer" className={activeText} aria-label="GitHub">
            <Github className="w-6 h-6" />
          </a>
        ) : (
          <span aria-disabled="true" className={disabledIcon}>
            <Github className="w-6 h-6" />
          </span>
        )}

        {hasEmail ? (
          <a href={emailHref} target="_blank" rel="noreferrer" className={activeText} aria-label="Email">
            <Mail className="w-6 h-6" />
          </a>
        ) : (
          <span aria-disabled="true" className={disabledIcon}>
            <Mail className="w-6 h-6" />
          </span>
        )}
      </div>
    </div>
  );
};

export default Member;
