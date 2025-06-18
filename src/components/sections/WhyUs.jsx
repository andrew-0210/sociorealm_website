const WhyUs = () => {
  return (
    <section className="h-full px-[1.25rem] py-[6.25rem]">
      <div className="mx-auto flex max-w-[1440px] items-center">
        <div className="flex max-w-[590px] flex-col items-start gap-[1.25rem] md:gap-[2rem]">
          <h2 className="font-heading text-[1.5rem] leading-[1.875rem] tracking-[-0.5px] uppercase md:text-[3.5rem] md:leading-[58px]">
            Your Brand could be 153% more memorable.
          </h2>
          <p className="text-[0.938rem] leading-[1.5] font-semibold tracking-[-0.5px] whitespace-pre-line md:text-[1.125rem]">
            Okay, we might have made that stat up. But it caught your attention,
            didn&apos;t it? That&apos;s the point - to make you pause, think,
            and remember. At Sociorealm, making your brand unforgettable
            isn&apos;t a lucky accident - it&apos;s our entire game plan. We mix
            strategic thinking, smart storytelling, and visuals that pop off the
            screen to help you stand out. Every. Single. Time.
          </p>
          <span className="font-handwritten text-[2rem] leading-[1.25] font-bold tracking-tight text-[#AF4FBE] md:text-[3.5rem]">
            Okay fine, 153% of the time.
          </span>
          <button className="font-heading min-w-[250px] cursor-pointer rounded-full border-[2px] border-[#004e39] bg-[#4fbe9f] py-[1rem] text-[1rem] text-[#0a3f31] uppercase shadow-[0_6px_0px_rgba(0,78,57,1)] transition-shadow duration-200 ease-in hover:shadow-none md:min-w-[342px] md:text-[1.125rem]">
            Know How
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
