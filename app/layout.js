import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} relative antialiased min-h-screen flex flex-col bg-primary-950 text-primary-100`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="w-full max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
