"use client";
import Link from "next/link";
import Navbar from "~/components/LandingNav";
import Footer from "~/components/LandingFooter";
import Scene from "~/components/Scene";

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="bg-black">
      <Navbar />
      <div className="h-screen">
        <Scene />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
