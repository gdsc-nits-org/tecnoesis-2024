import MarqueeComponent from "~/components/sponsorMarquee";

export default function Page() {
  return (
    <>
      <div className="bg-dotted flex min-h-screen w-full flex-col items-center">
        <div className="text-gradient-blue m-10 font-rp1 text-2xl font-bold md:text-6xl">
          Past Sponsors
        </div>
        <div className="flex w-full flex-col gap-y-20 md:w-3/5">
          <MarqueeComponent direction={"left"} set={1} />
          <MarqueeComponent direction={"right"} set={2} />
        </div>{" "}
      </div>
    </>
  );
}
