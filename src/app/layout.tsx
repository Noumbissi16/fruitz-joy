import type { Metadata } from "next";
import { Bricolage_Grotesque, Cabin } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const description =
  "Jus et nectars de fruits naturels, sans conservateur, préparés à Yaoundé à partir de fruits locaux de premier choix.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fruitz-joy.vercel.app"),
  title: "Fruitzy-Joy | Jus de fruits naturels à Yaoundé",
  description,
  openGraph: {
    title: "Fruitzy-Joy | Le fruit d’ici, le sourire en plus",
    description,
    locale: "fr_CM",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${cabin.variable} ${bricolage.variable} antialiased`}>
        <ThemeProvider attribute={"class"} forcedTheme="light">
          <NextIntlClientProvider>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
