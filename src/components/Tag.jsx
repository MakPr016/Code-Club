
const themes = {
  javascript: {
    bg: "bg-[#36371A]",
    text: "text-[#FFE734]",
  },
  java: {
    bg: "bg-[#392423]",
    text: "text-[#EA625E]",
  },
  python: {
    bg: "bg-[#1A371F]",
    text: "text-[#77D195]",
  },
  react: {
    bg: "bg-[#1F4646]",
    text: "text-[#6DEAE9]",
  },
  django: {
    bg: "bg-[#36371A]",
    text: "text-[#FFE734]",
  },
};

const Tag = ({ label="Express", icon="javascript", theme="javascript" }) => {
  const { bg, text } = themes[theme] || themes["javascript"];

  return (
    <div className={`inline-flex items-center gap-2 font-roboto font-semibold text-[14px] rounded-full px-3 py-1 h-fit ${bg} ${text}`}>
      <img src={`/icons/${icon}.png`} className="w-4 h-4" alt={`${label} logo`} />
      <span>{label}</span>
    </div>
  );
};

export default Tag;

