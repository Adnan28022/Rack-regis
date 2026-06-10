import Navbar from "@/src/components/common/Navbar";
import "./globals.css";
import Footer from "@/src/components/common/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="pt-20"> 
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}