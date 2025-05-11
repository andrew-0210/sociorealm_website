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
];

const Header = () => {
	return (
		<header>
			<nav className="flex items-center justify-between px-[1.25rem] md:px-[2rem] py-[0.75rem]">
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
