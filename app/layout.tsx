import type { Metadata } from "next";
import { Montserrat, Libertinus_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "./components/navabar_component";
import Footer from "./components/footer";



const mont = Montserrat({
  variable: "--font-montserrat",
  subsets:["latin"]
})

const liber = Libertinus_Mono({
  variable:"--font-libertinus-mono",
  subsets:["latin"],
  weight:"400"
})



export const metadata: Metadata = {
  title: "Mutsawashe Nancy Zisengwe",
  description: "A young upcoming author",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${liber.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
