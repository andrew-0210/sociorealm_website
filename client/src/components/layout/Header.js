import Image from "next/image";
import Link from "next/link";

const tabs = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "About",
		href: "/about",
	},
	{
		name: "Solutions",
		href: "/about",
	},
	{
		name: "Resources",
		href: "/",
	},
];

const Header = () => {
	return (
		<header className="fixed w-full bg-[#fff] z-40">
			<nav className="flex items-center justify-between px-[1.25rem] md:px-[2rem] py-[0.5rem] border-b border-[#d1d1d1]">
				<Link href="/">
					<div className="relative w-[8.5rem] h-[3rem] md:w-[14rem] md:h-[5rem]">
						<Image
							src="./images/sociorealm_logo.svg"
							alt="sociorealm_logo"
							fill
							className="object-contain"
						/>
					</div>
				</Link>
				<div>
					<ul className="flex gap-5">
						{tabs.map((link, i) => (
							<li key={i}>
								<Link href={link.href}>{link.name}</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
