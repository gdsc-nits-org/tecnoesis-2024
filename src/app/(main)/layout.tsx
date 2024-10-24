import FinalFooter from "~/components/FinalFooter";
import FinalNav from "~/components/Navbar/FinalNav";
import SmoothScroll from "~/components/smoothScroll";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-dotted">
      <FinalNav />
      {children}
    </div>
  );
}
