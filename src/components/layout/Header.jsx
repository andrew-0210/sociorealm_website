import Link from "next/link";

const links = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Work",
		href: "/work",
	},
	{
		label: "About Us",
		href: "/about_us",
	},
	{
		label: "Solutions",
		href: "/solutions",
	},
];

const Header = () => {
	return (
		<header className="fixed bottom-0 w-full flex justify-center z-[999] p-[2rem] ">
			<nav className="flex flex-col items-center justify-center bg-[#2a2a2a]/50 backdrop-blur-sm py-[1rem] px-[2rem] rounded-full border-[1.5px] border-[#fafafa]">
				<ul className="flex gap-[1.25rem]">
					{links.map((link, i) => (
						<li key={i}>
							<Link
								href={link.href}
								className="text-white text-[0.875rem]">
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};
export default Header;
