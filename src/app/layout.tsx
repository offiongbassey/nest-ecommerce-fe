import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/footer/Footer";
import { ReduxProvider } from "./StoreProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Nest Ecommerce",
  description: "Buy your products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Toaster position="top-right" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
        </ReduxProvider>
        </body>
    </html>
  );
}
