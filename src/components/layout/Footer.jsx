import { Image } from "@imagekit/next";

export default function Footer() {
  return (
    <footer className="h-full bg-[#000000] px-[1.25rem] py-[6.25rem]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="relative h-[10vh] w-[100%]">
          <Image
            urlEndpoint="https://ik.imagekit.io/imagestore0210"
            src="/sociorealm_footer.svg"
            alt="Sociorealm_logo"
            priority
            fill
            className="object-fill invert"
          />
        </div>
      </div>
    </footer>
  );
}
