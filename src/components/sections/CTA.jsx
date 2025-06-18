import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="h-full bg-[#8845df] px-[1.25rem] py-[6.25rem]">
      <div className="mx-auto flex max-w-[1280px] items-center">
        <div className="flex max-w-[400px] flex-col items-start gap-[1.25rem] md:gap-[2rem]">
          <h3 className="font-heading text-[1.5rem] leading-[1.875rem] tracking-[-0.5px] text-[#fff] uppercase md:text-[3.5rem] md:leading-[58px]">
            Our promise to you.
          </h3>
          <p className="text-[0.938rem] leading-[1.5] font-semibold tracking-[-0.5px] whitespace-pre-line text-[#fff] md:text-[1.125rem]">
            Your brand launch should feel less like a checkbox and more like a
            career mic-drop. Let's make it one to remember.
          </p>
          <Button>Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
