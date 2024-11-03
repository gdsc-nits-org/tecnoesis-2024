import Landing from "~/components/Spark/Landing";
import About from "~/components/Spark/About";
import Gallery from "~/components/Spark/Gallery";
import FinalFooter from "~/components/FinalFooter";
import AboutArtist from "~/components/Spark/AboutArtist";
export const runtime = "edge";

const Spark = () => {
  return (
    <div className="bg-dotted flex min-h-screen w-full flex-col items-center justify-center overflow-hidden">
       <div className="h-fit">
        <Landing />
      </div>
      {/*
      <div className="mb-[4rem] h-fit lg:mt-[4rem]">
        <About />
      </div>
      <div className="mb-[4rem] w-[90vw]">
        <Gallery />
      </div>
      <FinalFooter /> */}
      <AboutArtist />
    </div>
  );
};

export default Spark;
