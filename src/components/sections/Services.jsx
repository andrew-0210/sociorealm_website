"use client";
import { useState } from "react";
import TabButton from "../ui/TabButton";
import { SERVICES_INFO } from "@/constants/data";
import { Image } from "@imagekit/next";

export default function Services() {
  const [selectedService, setSelectedService] = useState("ui_design");

  function handleSelect(selectedButton) {
    setSelectedService(selectedButton);
  }

  return (
    <section className="h-full px-[1.25rem] py-[6.25rem]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[1.25rem]">
        <h2 className="font-heading text-[1.5rem] leading-[1.875rem] tracking-[-0.5px] uppercase md:text-[3.5rem] md:leading-[58px]">
          Our Solutions
        </h2>
        <menu className="scroll-container flex w-full items-center justify-between px-[0.25rem] py-[0.5rem] md:overflow-x-hidden">
          <TabButton
            isSelected={selectedService === "ui_design"}
            onSelect={() => handleSelect("ui_design")}
          >
            Ui/Ux Design
          </TabButton>
          <TabButton
            isSelected={selectedService === "website_development"}
            onSelect={() => handleSelect("website_development")}
          >
            Website Development
          </TabButton>
          <TabButton
            isSelected={selectedService === "mobile_app_development"}
            onSelect={() => handleSelect("mobile_app_development")}
          >
            Mobile App Development
          </TabButton>
          <TabButton
            isSelected={selectedService === "seo"}
            onSelect={() => handleSelect("seo")}
          >
            SEO
          </TabButton>
          <TabButton
            isSelected={selectedService === "social_media_marketing"}
            onSelect={() => handleSelect("social_media_marketing")}
          >
            Social Media Marketing
          </TabButton>
        </menu>
        {selectedService && (
          <div className="flex w-full flex-col items-center justify-center gap-[1.5rem] rounded-[1.25rem] bg-white p-[1.25rem] md:flex-row md:gap-[3rem] md:px-[2rem] md:py-[2rem]">
            <div className="relative h-[30vh] w-full overflow-clip rounded-[0.75rem] md:h-[50vh] md:w-[40%]">
              <Image
                urlEndpoint="https://ik.imagekit.io/imagestore0210"
                src={SERVICES_INFO[selectedService].image}
                alt="UX design image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-[0.5rem] md:w-[40%]">
              <h3 className="font-heading text-[1.25rem] md:text-[2rem] md:leading-[1.2]">
                {SERVICES_INFO[selectedService].title}
              </h3>
              <p className="text-[0.938rem] leading-[1.5] font-medium tracking-[-0.5px] whitespace-pre-line md:text-[1.125rem]">
                {SERVICES_INFO[selectedService].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
