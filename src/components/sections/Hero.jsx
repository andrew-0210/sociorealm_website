// import Image from "next/image";
import { Image } from "@imagekit/next";

const Hero = () => {
  return (
    <section className="flex h-dvh flex-col items-center justify-between overflow-x-hidden bg-[#ae9ded] px-[1.25rem] py-[2rem] md:px-0">
      <div>
        <div className="relative h-[10dvw] w-dvw">
          <Image
            urlEndpoint="https://ik.imagekit.io/imagestore0210"
            src="/sociorealm_header.svg"
            alt="Sociorealm_logo"
            priority
            fill
          />
        </div>
        <h1 className="mx-auto mt-[0.5rem] max-w-[15rem] text-center font-serif text-[1.5rem] leading-[26px] italic md:max-w-[25rem] md:text-[2.5rem] md:leading-[1] md:font-medium">
          a brand studio specializing in story & differentiation.
        </h1>
      </div>

      <div className="max-w-[1280px] mx-auto">
        <p className="z-20 max-w-[600px] text-center text-[1rem] leading-[1.5] font-medium tracking-[-0.5] md:pb-[3rem] md:text-[1.125rem]">
          From pixel-perfect websites to scroll-stopping campaigns,we bring the
          tools, talent, and vibes to help your business win hearts and clicks
          online.
        </p>
      </div>
    </section>
  );
};

export default Hero;
