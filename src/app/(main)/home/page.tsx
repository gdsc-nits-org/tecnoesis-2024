import Download from "~/components/Download";
import MarqueeComponent from "~/components/sponsorMarquee";
import SponsorHome from "~/components/SponsorHome";
import PhotoGallery from "~/components/PhotoGallery";
import About from "~/components/AboutPage";

export default function Page() {
  return (
    <div className="bg-dotted flex min-h-screen w-full flex-col items-center">
      <About />
      <div className="px-10">
        <PhotoGallery />
      </div>
      <div className="text-gradient-blue mt-10 font-rp1 text-2xl font-bold md:hidden">
        Tecnoesis App
      </div>
      <div className="mb-10 flex w-full flex-col gap-y-20 lg:py-[5rem]">
        <Download />
      </div>
      <div className="text-gradient-blue m-10 font-rp1 text-2xl font-bold md:text-6xl">
        Past Sponsors
      </div>
      <div className="flex w-full flex-col gap-y-20 md:w-3/5">
        <MarqueeComponent direction={"left"} set={1} />
        <MarqueeComponent direction={"right"} set={2} />
      </div>
      <div className="text-gradient-blue mb-10 mt-20 font-rp1 text-2xl font-bold sm:pt-20 md:text-6xl">
        Sponsors
      </div>
      <div className="w-full px-10">
        <SponsorHome />
      </div>
    </div>
  );
}
