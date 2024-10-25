import Download from "~/components/Download";
import MarqueeComponent from "~/components/sponsorMarquee";
import SponsorHome from "~/components/SponsorHome";
import PhotoGallery from "~/components/PhotoGallery";
import About from "~/components/AboutPage";
import FinalFooter from "~/components/FinalFooter";

export default function Page() {
  return (
    <div className="homepage bg-dotted flex min-h-screen w-full flex-col items-center">
      <About />
      <div className="px-10">
        <PhotoGallery />
      </div>
      <div className="text-gradient-blue mt-10 font-rp1 text-3xl font-bold md:hidden lg:text-4xl 2xl:text-6xl 3xl:text-9xl">
        Tecnoesis App
      </div>
      <div className="mb-10 flex w-full flex-col gap-y-20 lg:py-[5rem]">
        <Download />
      </div>
      <div className="text-gradient-blue titleText m-10 text-center font-rp1 font-bold">
        Past Sponsors
      </div>
      <div className="flex w-full flex-col gap-y-20 md:w-4/5">
        <MarqueeComponent direction={"left"} set={1} />
        <MarqueeComponent direction={"right"} set={2} />
      </div>
      <div className="text-gradient-blue titleText mb-10 mt-20 font-rp1 font-bold sm:pt-20">
        Sponsors
      </div>
      <div className="w-full px-10">
        <SponsorHome />
      </div>
      <FinalFooter />
    </div>
  );
}
