'use client'; 

import FinalNav from "~/components/Navbar/FinalNav";
import SmoothScroll from "~/components/smoothScroll";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const noBackgroundPaths = ["/modules", "/gallery"];
  const applyBackground = !noBackgroundPaths.includes(pathname);

  return (
    <div className={applyBackground ? "bg-dotted" : "bg-current"}>
      <FinalNav />
      {children}
    </div>
  );
}
