export const Avatar = ({ name, size = "small" }: { name: string; size?: "small" | "big" }) => {
  const sizeClass = size === "big" ? "w-10 h-10" : "w-6 h-6";
  const fontSizeClass = size === "big" ? "text-lg" : "text-xs";

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClass} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className={`${fontSizeClass} font-medium text-gray-600 dark:text-gray-300`}>{name[0].toUpperCase()}</span>
    </div>
  );
};