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

const Footer = () => {
	return (
		<header>
			<nav className="flex items-center justify-between px-[2rem] py-[0.75rem]">
				<Link href="/">
					<div className="relative w-[12rem] h-[3rem]">
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

export default Footer;
