import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/hooks/useCart";

export const metadata: Metadata = {
  title: "CandelaRolls - Artisan Cinnamon Rolls",
  description: "Premium handcrafted cinnamon rolls",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#FDF6EC] text-[#1A1A1A]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
