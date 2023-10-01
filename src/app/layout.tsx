import Footer from "@/app/Layout/Footer";
import "./globals.css";
import { Manrope, Inter } from "next/font/google";
import localFont from "next/font/local";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Venue Pro",
  description: "Book your latest Venue",
};

const sfUi = localFont({
  src: [
    {
      path: "../fonts/sf-ui-display-extralight.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-light.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-thin.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-heavy.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/sf-ui-display-black.woff",
      weight: "900",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Footer />
      </body>
    </html>
  );
}
