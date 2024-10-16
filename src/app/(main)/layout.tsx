import FinalNav from "~/components/Navbar/FinalNav";

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
