import { Outfit, Instrument_Serif, Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const outfitSans = Outfit({
	variable: "--font-outfit-sans",
	subsets: ["latin"],
	preload: true,
	weight: ["200", "300", "400", "600", "700", "800"],
});
const oswaldSans = Oswald({
	variable: "--font-oswald-sans",
	subsets: ["latin"],
	preload: true,
	weight: ["200", "300", "400", "600", "700", "500"],
});
const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	preload: true,
	weight: "400",
});
const jetBrainsMono = JetBrains_Mono({
	variable: "--font-jetbrains-mono",
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
				className={`${outfitSans.variable} ${oswaldSans.variable} ${jetBrainsMono.variable} ${instrumentSerif.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
