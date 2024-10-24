import Landing from "~/components/Spark/Landing";
import About from "~/components/Spark/About";
import Gallery from "~/components/Spark/Gallery";

export const runtime = "edge";

const Spark = () => {
    return (
        <div className="bg-dotted min-h-screen w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="h-fit">
                <Landing />
            </div>
            <div className="h-fit">
                <About />
            </div>
            <div className="h-fit">
                <Gallery />
            </div>
        </div>
    );
}

export default Spark;