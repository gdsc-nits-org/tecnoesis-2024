import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "sonner";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Tecnoesis 2024",
  description: "The Official Website of Tecnoesis 2024",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const toastOps = {
  classNames: {
    title: "text-md md:text-lg font-mono",
    success: "toast-theme-blue",
    info: "toast-theme-blue",
    error: "toast-theme-red",
    warning: "toast-theme-red",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`} prefix="og: https://ogp.me/ns#">
      <head>
        <meta property="og:title" content="Tecnoesis 2024" />
        <meta property="og:description" content="The Official Website of Tecnoesis 2024" />
        <meta property="og:image" content="https://opengraph.tecnoesis-2024.pages.dev/tecnoesislogo.jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:website" content="https://tecnoesis-2024.pages.dev" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {children}
        <Toaster
          toastOptions={toastOps}
          visibleToasts={1}
          position="bottom-center"
        />
      </body>
    </html>
  );
}
