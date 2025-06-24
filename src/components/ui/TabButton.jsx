export default function TabButton({ children, isSelected, onSelect }) {
  return (
    <li>
      <button
        className={`cursor-pointer p-[1rem] font-sans whitespace-nowrap uppercase ${isSelected ? "font-semibold text-[#4fbe9f]" : " "}`}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
