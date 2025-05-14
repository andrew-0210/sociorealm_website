import Link from "next/link";

const NotFound = () => {
	return (
		<section className="h-[100dvh] font-jetbrains py-[2rem] w-dvw">
			<div className="flex h-[70dvh] flex-col  md:justify-evenly items-center w-dvw justify-around">
				<h1 className="text-[10rem] md:text-[15rem] leading-[1.2] font-bold">
					404
				</h1>
				<p className="text-[0.938rem] text-center ">
					We&apos;re sorry. We can&apos;t connect to the outer reaches of the
					web right now.
				</p>
			</div>
			<div className="flex gap-5 justify-between w-full h-[10dvh] items-center  p-[2rem] font-serif flex-col md:flex-row">
				<h3>sociorealm.design</h3>
				<div className="flex gap-3 items-center">
					<h3>Head home or enjoy the view?</h3>
					<Link
						href="/"
						className="py-[0.5rem] px-[2rem] bg-[#115cbe]  capitalize font-medium rounded-full">
						Back to home
					</Link>
				</div>
				<ul className="flex gap-5 flex-row ">
					<li>web</li>
					<li>product</li>
					<li>brand</li>
				</ul>
			</div>
		</section>
	);
};

export default NotFound;
