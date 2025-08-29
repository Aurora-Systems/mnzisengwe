import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "./components/navabar_component";
import Footer from "./components/footer";







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
      <body >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
