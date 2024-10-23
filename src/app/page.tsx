import Landing from "~/components/Landing";

export const runtime = "edge";
export default function HomePage() {
  return (
    <div className="min-h-screen w-screen overflow-hidden bg-[url('/assets/Landing/stars-bg.avif')]">
      <Landing />
    </div>
  );
}
