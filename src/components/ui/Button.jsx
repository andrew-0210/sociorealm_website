export default function Button({ children }) {
  return (
    <button className="font-heading min-w-[250px] cursor-pointer rounded-full border-[2px] border-[#004e39] bg-[#4fbe9f] py-[1rem] text-[1rem] text-[#0a3f31] uppercase shadow-[0_6px_0px_rgba(0,78,57,1)] transition-shadow duration-200 ease-in hover:shadow-none md:min-w-[342px] md:text-[1.125rem]">
      {children}
    </button>
  );
}
