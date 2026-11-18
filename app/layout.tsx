import type { Metadata } from "next";
import { Montserrat, Inter, Oswald } from "next/font/google";
import "./globals.css";

// Подключаем Montserrat для заголовков
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["700", "900"],
});

// // Подключаем Inter для основного текста
// const inter = Inter({
//   subsets: ["latin", "cyrillic"],
//   variable: "--font-inter",
//   weight: ["400", "500"],
// });



// Шрифт для заголовков (плотный, как на фото)
const oswald = Oswald({
  subsets: ["cyrillic", "latin"],
  weight: ["600", "700"],
  variable: "--font-heading",
  display: "swap",
});

// Шрифт для основного текста
const inter = Inter({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});


export const metadata: Metadata = {
  title: "KARELIA. Quiet Forest",
  description: "Ближайшие графики лесных выездов в Карелию",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${oswald.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
