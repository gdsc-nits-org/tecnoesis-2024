import Image from "next/image"

const About = () => {
    return (
        <div className="h-fit w-full flex flex-col md:flex-row justify-evenly gap-20">
            <div className="w-[80vw] md:w-[30vw] h-fit md:-translate-y-8 ml-[10vw] md:ml-0">
                <Image
                    src="/assets/spark/Spark_ticket.png"
                    width={400}
                    height={200}
                    alt="Spark Ticket"
                />
            </div>
            <div className="w-[80vw] ml-[10vw] mr-[10vw] md:ml-0 md:mr-0 md:w-[50vw] h-fit flex flex-col items-center justify-center gap-8">
                <div className="bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal tracking-widest text-transparent lg:text-3xl 2xl:text-5xl 3xl:text-8xl">
                    aBOUT SPARK
                </div>
                <div className="font-outfit text-justify text-white text-base lg:text-lg 3xl:text-2xl 4xl:text-5xl md:text-left">
                    What could be a more fitting conclusion to an exhilarating techno-management festival than a breathtaking musical celebration? Spark, the grand finale, illuminates the night with joy, vitality, and cherished memories. This evening unfolds a lively blend of genres, from the fierce energy of Rock to the grace of Classical, taking you on an unforgettable auditory adventure.
                    <br />
                    With soulful vocals, poignant lyrics, and stellar production, a harmonious tapestry of sound awaits. Whether you find yourself swaying to gentle tunes or dancing to pulsating rhythms, Spark promises an electrifying experience for all. The stage is ready, the rhythms are alive, and all that’s needed is your enthusiasm. Dive into this musical spectacle and embrace the magic of Spark!
                </div>

            </div>
        </div>
    );
}

export default About;