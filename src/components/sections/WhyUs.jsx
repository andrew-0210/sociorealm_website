const WhyUs = () => {
	return (
		<section className="h-full px-[1.25rem] py-[6.25rem]  ">
			<div className="max-w-[1440px] mx-auto flex items-center">
				<div className="max-w-[590px] flex flex-col gap-[1.25rem] md:gap-[2rem] items-start">
					<h2 className=" text-[1.75rem] md:text-[3.5rem] uppercase font-extrabold leading-[2.25rem] md:leading-[58px] tracking-[-0.5px]">
						Your Brand could be 153% more memorable.
					</h2>
					<p className="whitespace-pre-line text-[0.938rem] leading-[1.5] font-semibold tracking-[-0.5px] md:text-[1.125rem]">
						Okay, we might have made that stat up. But it caught your attention,
						didn&apos;t it? That&apos;s the point - to make you pause, think,
						and remember. At Sociorealm, making your brand unforgettable
						isn&apos;t a lucky accident - it&apos;s our entire game plan. We mix
						strategic thinking, smart storytelling, and visuals that pop off the
						screen to help you stand out. Every. Single. Time.
					</p>
					<span className="font-handwritten text-[2rem] md:text-[3.5rem] text-[#AF4FBE] font-bold tracking-tight leading-[1.25]">
						Okay fine, 153% of the time.
					</span>
					<button className="uppercase text-[1rem] md:text-[1.125rem] font-extrabold py-[1rem] bg-[#4fbe9f] rounded-full border-[2px] border-[#004e39] shadow-[0_6px_0px_rgba(0,78,57,1)] min-w-[250px] md:min-w-[342px] transition-shadow duration-200 ease-in hover:shadow-none">
						Know How
					</button>
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
