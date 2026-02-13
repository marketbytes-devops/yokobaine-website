import { Inter, Outfit, Syne, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Yo Ko Bane | The Future of Education",
  description: "Academic excellence starts at your fingertips. Bridging the gap between data and human connection in education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${syne.variable} ${poppins.variable} antialiased font-sans bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
