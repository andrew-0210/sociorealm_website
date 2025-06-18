import localFont from "next/font/local";
import { Instrument_Serif, DM_Sans, Caveat } from "next/font/google";

export const akiraExpanded = localFont({
  src: [
    {
      path: "./Akira Expanded.otf",
      style: "normal",
    },
  ],
  variable: "--font-akira",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const caveatHand = Caveat({
  variable: "--font-caveat-hand",
  subsets: ["latin"],
});
