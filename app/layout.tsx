import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/hooks/useCart";

export const metadata: Metadata = {
  title: "CandelaRolls | Rollitos de Canela Artesanales Premium",
  description: "Descubre nuestros deliciosos rollitos de canela horneados artesanalmente. Los mejores ingredientes, sabor incomparable. Envío a domicilio en Madrid.",
  keywords: ["rollitos de canela", "canela premium", "artesanal", "repostería", "Madrid", "delivery"],
  authors: [{ name: "CandelaRolls" }],
  creator: "CandelaRolls",
  
  openGraph: {
    type: "website",
    url: "https://candela-rolls-open-claw.vercel.app",
    title: "CandelaRolls | Rollitos de Canela Artesanales",
    description: "Rollitos de canela premium, hecho a mano con los mejores ingredientes.",
    siteName: "CandelaRolls",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "CandelaRolls - Rollitos de Canela",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "CandelaRolls | Rollitos de Canela Artesanales",
    description: "Descubre nuestros deliciosos rollitos de canela premium.",
    images: ["https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=1200&h=630&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://candela-rolls-open-claw.vercel.app" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "CandelaRolls",
              description: "Rollitos de canela artesanales premium",
              url: "https://candela-rolls-open-claw.vercel.app",
              telephone: "+34912345678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Canela 123",
                addressLocality: "Madrid",
                addressRegion: "Madrid",
                postalCode: "28001",
                addressCountry: "ES",
              },
              image: "https://images.unsplash.com/photo-1588195538326-c5b1e6f79ec5?w=800",
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className="bg-[#FDF6EC] text-[#1A1A1A]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
