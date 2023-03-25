import ChakraWrapper from "@/components/ChakraWrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ChakraWrapper>
          <Navbar />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
