"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
	const heroHeader_heading = useRef();
	const heroHeader_description = useRef();
	const heroContainer = useRef();

	const tl = gsap.timeline();
	useGSAP(
		() => {
			tl.from(heroHeader_heading.current, {
				y: 200,
				duration: 1,
				opacity: 0,
			});

			tl.from(heroHeader_description.current, {
				y: 100,
				opacity: 0,
				duration: 1,
			});
		},
		{ scope: heroContainer, revertOnUpdate: true },
	);

	return (
		<section
			className="h-dvh py-[7rem] md:py-[10rem] px-[1.25rem] md:px-[2rem]  flex flex-col gap-5"
			ref={heroContainer}>
			<div className="overflow-hidden ">
				<h1 ref={heroHeader_heading}>
					We&apos;re Sociorealm.{" "}
					<span className="block uppercase font-heading ">
						Your Digital Dream Team!
					</span>
				</h1>
			</div>
			<div className="overflow-hidden ">
				<p
					className="text-center md:max-w-[60vw] mx-auto"
					ref={heroHeader_description}>
					From pixel-perfect websites to scroll-stopping campaigns, we bring the
					tools, talent, and vibes to help your business win hearts and clicks
					online.
				</p>
			</div>
		</section>
	);
};

export default Hero;
