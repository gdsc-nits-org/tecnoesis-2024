import Image from 'next/image';
import images from '../modules/images.json'; 

export default function Page() {
    return (
        <div className="bg-[radial-gradient(circle_at_center,#011528_75%,#000204_100%)] min-h-screen">
            <div>
            <div className="header flex items-center justify-center text-4xl md:text-5xl lg:text-6xl font-rp1 mt-15 p-28 text-white">
                    <h1>MORE MODULES</h1>
                </div>

                {/* Container for modules */}
                <div className="flex flex-wrap justify-center">
                    {images.map((image) => (
                        <div key={image.id} className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
                            <Image 
                                src={image.src} 
                                alt={image.alt} 
                                height={300} 
                                width={480} 
                                className="object-cover w-full h-full" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}





























































// import Image from "next/image";

// export default function Page() {
//     return (
//         <div className="bg-[radial-gradient(circle_at_center,#011528_75%,#000204_100%)] min-h-screen">
//             <div>
//                 <div className="header flex items-center justify-center text-6xl font-rp1 mt-15 p-28 text-white">
//                     <h1>MORE MODULES</h1>
//                 </div>

//                 {/* Hardcoded module divs */}
//                 <div className="flex flex-wrap justify-center"> {/* Added flex wrap to align modules properly */}
//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module1.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full" // Ensuring the image covers the div
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module2.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module3.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module1.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module2.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module3.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module1.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image 
//                             src="/assests/modules/module2.jpeg" 
//                             alt="hello" 
//                             height={300} 
//                             width={480} 
//                             className="object-cover w-full h-full"
//                         />
//                     </div>

//                     <div className="module2 w-[480px] h-[300px] bg-red-500 m-6 rounded-2xl overflow-hidden">
//                         <Image
//                              src="/assests/modules/module3.jpeg" // Different image for the last module
//                              alt="hello"
//                              height={300}
//                              width={480}
//                              className="object-cover w-full h-full"
//                          />
//                      </div>
//                 </div>
//             </div>
//         </div>
//     );
// }