import "./globals.css";
import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";
import {
  instrumentSerif,
  caveatHand,
  dmSans,
  akiraExpanded,
} from "@/fonts/font";

export const metadata = {
  title: "Sociorealm | Where Ideas Click and Brands Stick",
  description:
    "At Sociorealm, we mix bold marketing with smart web design to help your brand stand out. From scroll-stopping ads to websites that wow — let’s build something awesome together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${dmSans.variable} ${caveatHand.variable} ${akiraExpanded.variable} antialiased`}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
