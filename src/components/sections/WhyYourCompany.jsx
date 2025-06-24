const WhyYourCompany = () => {
  return (
    <section className="h-full bg-[#000000] px-[1.25rem] py-[6.25rem] text-[#fff]">
      <div className="mx-auto flex max-w-[1280px] justify-start text-left md:justify-center md:text-center">
        <div className="flex max-w-[650px] flex-col gap-[1.25rem] md:gap-[2rem]">
          <span className="font-serif text-[1.25rem] italic md:text-[2rem]">
            The billion dollar question
          </span>
          <h2 className="font-heading text-[1.5rem] leading-[1.875rem] tracking-[-0.5px] text-[#52ffa9] uppercase md:text-[3.5rem] md:leading-[58px]">
            Why does your company exist?
          </h2>
          <p className="text-[0.938rem] leading-[1.5] font-medium tracking-[-0.5px] whitespace-pre-line md:text-[1.125rem]">
            You know what makes you awesome. The tricky part? Getting everyone
            else to see it. That&apos;s where we come in - decoding your
            brand&apos;s brilliance and turning it into messaging that actually
            connects.
          </p>
        </div>
      </div>
    </section>
  );
};
export default WhyYourCompany;
