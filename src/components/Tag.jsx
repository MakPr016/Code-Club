
const themes = {
  yellow: {
    bg: "bg-[#36371A]",
    text: "text-[#FFE734]",
  },
  red: {
    bg: "bg-[#392423]",
    text: "text-[#EA625E]",
  },
  green: {
    bg: "bg-[#1A371F]",
    text: "text-[#77D195]",
  },
  cyan: {
    bg: "bg-[#1F4646]",
    text: "text-[#6DEAE9]",
  },
};

const Tag = ({ label="Express", icon="javascript", theme="yellow" }) => {
  const { bg, text } = themes[theme] || themes["javascript"];

  return (
    <div className={`inline-flex items-center gap-2 font-roboto font-semibold text-[14px] max-sm:text-[12px] rounded-full px-3 py-1 h-fit ${bg} ${text}`}>
      <img src={`/icons/${icon}.png`} className="w-4 h-4" alt={`${label} logo`} />
      <span>{label}</span>
    </div>
  );
};

export default Tag;

