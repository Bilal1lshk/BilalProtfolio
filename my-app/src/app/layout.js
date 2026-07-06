import Navbar from "./-components/reuseable.jsx/Navbar";
import "./globals.css";



export const metadata = {
  title: "BilalProtfolio",
  description: "Bilal is an AI-driven web developer crafting custom portfolio sites, smart web apps, and automation-first digital products with polished design and modern UX.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={` h-full antialiased`} 
    suppressHydrationWarning 
    >
      <body className="min-h-full flex flex-col font-sekuya">
        {children}
      </body>
    </html>
  );
}