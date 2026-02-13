import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../common/Header";
import Footer from "../common/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yo Ko Bane | The Future of Education",
  description: "Academic excellence starts at your fingertips. Bridging the gap between data and human connection in education.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased font-sans bg-white text-gray-900`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
