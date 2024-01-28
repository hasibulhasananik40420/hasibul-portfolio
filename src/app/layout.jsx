import Navbar from "@/components/Shared/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Shared/Footer/Footer";



export const metadata = {
  title: "Hasibul-Portfolio",
  description: "Hasibul-Portfolio created by Hasibul Hasan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
         <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
