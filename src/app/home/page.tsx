import Download from "~/components/Download";
import MarqueeComponent from "~/components/sponsorMarquee";
import SponsorHome from "~/components/SponsorHome";
import PhotoGallery from "~/components/PhotoGallery";

export default function Page() {
  return (
    <div className="bg-dotted flex min-h-screen w-full flex-col items-center">
      <div className="px-10">
        <PhotoGallery/>
      </div>
      <div className="text-gradient-blue m-10 font-rp1 text-2xl font-bold md:hidden">
        Tecnoesis App
      </div>
      <div className="flex w-full p-6 lg:py-[5rem] flex-col gap-y-20">
        <Download/>
      </div>
      <div className="text-gradient-blue m-10 font-rp1 text-2xl font-bold md:text-6xl">
        Past Sponsors
      </div>
      <div className="flex w-full flex-col gap-y-20 md:w-3/5">
        <MarqueeComponent direction={"left"} set={1} />
        <MarqueeComponent direction={"right"} set={2} />
      </div>
      <div className="text-gradient-blue m-10 font-rp1 text-2xl font-bold md:text-6xl sm:pt-20">
        Sponsors
      </div>
      <div className="px-10">
        <SponsorHome/>
      </div>
    </div>
  );
}
