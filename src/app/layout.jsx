import { Instrument_Serif, Manrope, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	weight: ["400"],
});

const manropeSans = Manrope({
	variable: "--font-manrope-sans",
	subsets: ["latin"],
	weight: ["500", "600", "700", "800"],
});
const caveatHand = Caveat({
	variable: "--font-caveat-hand",
	subsets: ["latin"],
});

export const metadata = {
	title: "Sociorealm | Where Ideas Click and Brands Stick",
	description:
		"At Sociorealm, we mix bold marketing with smart web design to help your brand stand out. From scroll-stopping ads to websites that wow — let’s build something awesome together.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${instrumentSerif.variable} ${manropeSans.variable} ${caveatHand.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
