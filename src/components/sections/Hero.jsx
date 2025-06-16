import Image from "next/image";

const Hero = () => {
	return (
		<section className="bg-[#ae9ded] overflow-x-hidden h-dvh px-[1.25rem] md:px-0 flex flex-col items-center justify-between py-[2rem]">
			<div className="absolute right-0 bottom-0">
				<div className="relative w-dvw h-[30dvw] md:h-[14dvw] ">
					<Image
						src="/rounded.svg"
						alt="rounded_shape"
						priority
						fill
						className="object-cover"
					/>
				</div>
			</div>
			<div>
				<div className="relative w-dvw h-[10dvw]">
					<Image
						src="/sociorealm_header.svg"
						alt="Sociorealm_logo"
						priority
						fill
					/>
				</div>
				<h1
					className="font-serif italic leading-[26px] text-[1.5rem] md:text-[2.5rem] md:leading-[1] text-center max-w-[15rem] md:max-w-[25rem] mx-auto md:font-medium mt-[0.5rem]
                ">
					a brand studio specializing in story & differentiation.
				</h1>
			</div>

			<div className="relative ">
				<p className=" max-w-[600px] text-center font-semibold leading-[1.5] text-[1rem] md:text-[1.125rem] tracking-[-0.5] z-20 md:pb-[3rem]">
					From pixel-perfect websites to scroll-stopping campaigns,we bring the
					tools, talent, and vibes to help your business win hearts and clicks
					online.
				</p>
			</div>
		</section>
	);
};

export default Hero;
