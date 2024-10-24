import Landing from "~/components/Spark/Landing";
import About from "~/components/Spark/About";
import Gallery from "~/components/Spark/Gallery";
import FinalFooter from "~/components/FinalFooter";
export const runtime = "edge";

const Spark = () => {
    return (
        <div className="bg-dotted min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="h-fit">
                <Landing />
            </div>
            <div className="h-fit lg:mt-[4rem] mb-[4rem]">
                <About />
            </div>
            <div className="w-[90vw] mb-[4rem]">
                <Gallery />
            </div>
            <FinalFooter/>
        </div>
    );
}

export default Spark;