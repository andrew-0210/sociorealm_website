export default function TabButton({ children, isSelected, onSelect }) {
  return (
    <li>
      <button
        className={`cursor-pointer px-[1rem] py-[0.5rem] font-sans whitespace-nowrap uppercase lg:min-w-[245px] ${isSelected ? "rounded-full border-[2px] border-[#004e39] bg-[#4fbe9f] font-semibold text-[#0a3f31] shadow-[0_3px_0px_rgba(0,78,57,1)] transition-shadow duration-200 ease-in hover:shadow-none" : " "}`}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
