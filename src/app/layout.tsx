import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "sonner";
import FinalNav from "~/components/Navbar/FinalNav";

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
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {/* <div className="sticky top-0 w-screen z-20"> */}
        <FinalNav />
        {/* </div> */}
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
