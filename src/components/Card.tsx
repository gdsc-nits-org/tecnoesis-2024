import Image from "next/image"
import React from "react";
interface propsType {
    name: string;
    designation: string;
    photo: string;
}

const Card: React.FC<propsType> = ({ name, designation, photo }) => {
    return (
        <div className='m-6 w-[20rem] h-[25rem] relative flex flex-col'>
            <div className="w-full flex flex-row items-start justify-around absolute top-0">
                <Image src="/team/leftframe.svg" className="absolute top-0 left-0" alt="leftframe" width={100} height={100} />
                <Image src="/team/rightframe.svg" className="absolute top-0 right-0" alt="rightframe" width={40} height={40} />
            </div>
            <Image src={photo} alt="photo" height={100} width={100} className="w-full h-full object-cover" />
            <div className="flex flex-col items-center flex-end bg-cover bg-center bg-[url('/team/Rectangle 3881.png')]">
                <h1 className="font-rp1">{name}</h1>
                <h3 className="font-rp1">{designation}</h3>
            </div>
        </div>
    )
}

export default Card;