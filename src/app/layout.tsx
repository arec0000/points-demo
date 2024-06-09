import type { Metadata } from "next";
import cx from "clsx";

import { Inter, Roboto } from "@/shared/styles/fonts";
import "@/shared/styles/global.css";
import { AppProvider } from "./providers/AppProvider";
import { RootLayout } from "@/shared/uikit/atoms/RootLayout";

export const metadata: Metadata = {
  title: "Points",
  description:
    "Расскажем плюсы и минусы стран для переезда. Подготовим к переезду и поможем на первых этапах",
  robots: "noindex",
  openGraph: {
    type: "website",
    title: "Points",
    description:
      "Расскажем плюсы и минусы стран для переезда. Подготовим к переезду и поможем на первых этапах",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cx(Inter.variable, Roboto.variable)}>
        <script defer src="https://accounts.google.com/gsi/client" />
        <AppProvider>
          <RootLayout>{children}</RootLayout>
        </AppProvider>
      </body>
    </html>
  );
}
