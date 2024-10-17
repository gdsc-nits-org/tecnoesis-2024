import Image from "next/image"
import React, { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons'
interface propsType {
  name: string;
  designation: string;
  photo: string;
  id: string;
  main: number;
  facebook?: string;
  linkedin?: string;
  instagram?: string
}

const Card: React.FC<propsType> = ({ name, designation, photo, id, main, facebook, linkedin, instagram }) => {
  const [hover, setHover] = useState(false);
  const customHoverDetails = hover ? {
    textShadow: "0 0 8.48px rgba(251, 5, 255, 1), 0 0 16.96px rgba(251,5,255,1)",
    transition: "all 0.3s ease"
  }
    : { transition: "all 0.3s ease" }

  const customHoverButton = hover ? {
    right: "20px",
    transition: "all 0.3s ease"
  } : {
    right: "0px",
    transition: "all 0.3s ease"
  }

  useEffect(() => {
    if (document) {
      const element = document.getElementById("papadiv" + main + id)
      console.log(element)
      element?.addEventListener("mouseenter", () => {
        setHover(true);
      })
      element?.addEventListener("mouseleave", () => {
        setHover(false);
      })
    }
  }, [id])
  return (
    <div className='m-6 w-[20rem] h-[22rem] relative flex flex-col scale-90' id={"papadiv" + main + id}>
      <div className="w-full flex flex-row items-start justify-around absolute top-0">
        <Image src="/team/leftframe.svg" className="absolute scale-[2.2] top-12 left-11" alt="leftframe" width={100} height={100} />
        <div style={hover ? {
          filter: `drop-shadow(0 2px 1px rgba(251, 5, 255, 1))`,
          transition: "all 0.3s ease"
        }
          : { transition: "all 0.3s ease" }}
          className="absolute bg-[url('/team/rightframe.svg')] -top-12 scale-[0.92] -right-4 z-10 w-[96px] h-[445px] flex items-center justify-center">
          <div className="rotate-90">
            <h1 style={customHoverDetails}
              className="font-rp1 w-[400px] text-center mb-8 text-2xl mr-12">{designation}</h1>
          </div>
          <div className="fixed flex flex-col z-[5] right-12 gap-6" style={hover ? {
            height: "max-content",
            transform: "scale(1)",
            transition: "all 0.3s ease",
          } : { opacity: "0", transition: "all 0.3s ease", transform: "scale(0.6)" }}>
            {facebook && (<div className="relative cursor-pointer" style={customHoverButton} >
              < SocialIcon url="https://facebook.com" style={{ height: 30, width: 30 }} />
            </div>
            )}
            {instagram && (<div className="relative cursor-pointer" style={customHoverButton} >
              < SocialIcon url="https://www.instagram.com/officialrickastley" style={{ height: 30, width: 30 }} />
            </div>
            )}
            {linkedin && (<div className="relative cursor-pointer" style={customHoverButton} >
              < SocialIcon url="https://linkedin.com" style={{ height: 30, width: 30 }} />
            </div>
            )}
          </div>
          <Image src="/team/stencil.png" width={162} height={162} alt=""
            style={hover ? {
              filter: `drop-shadow(0 0 8.48px rgba(251, 5, 255, 1)) drop-shadow(0 0 16.96px rgba(251, 5, 255, 1))`,
              transition: "all 0.3s ease"
            }
              : {
                transition: "all 0.3s ease"
              }} className="absolute top-[350px] -right-1 z-[15] " />
        </div>
        <div style={hover ? {
          filter: `drop-shadow(0 0 2.48px rgba(251, 5, 255, 1))`,
          transform: "translateY(0.91rem)",
          transition: "all 0.3s ease"
        }
          : { transition: "all 0.3s ease" }}
          className="absolute top-[300px] -left-5 z-10 bg-[url('/team/bottframe.svg')] w-[262px] h-[82px] flex items-center">
          <div className="flex flex-col items-center w-[80%] ml-4"
            style={customHoverDetails}>
            <h1 className="font-rp1">{name}</h1>
          </div>
        </div>
      </div>
      <Image src={photo} alt="photo" height={500} width={500}
        style={hover ? {
          transition: "all 0.3s ease",
          boxShadow: "-20px 0 4.48px -10px rgba(251, 5, 255, 0.5), -15px 0 0 -10px rgba(255, 255, 255, 1)",
          filter: ` drop-shadow(-5px -5px 8.96px rgba(251, 255, 255, 0.3))`
        } : {
          transition: "all 0.3s ease",
          filter: ` drop-shadow(-5px -5px 8.96px rgba(251, 255, 255, 0.3))`
        }}
        className="w-full rounded-[45.58px] h-full object-cover" />
    </div>
  )
}


export default Card;

interface MemberProps {
  name: string,
  designation: string,
  photo: string,
  index: number,
  facebook?: string,
  linkedin?: string,
  instagram?: string,
  hoversetter: React.Dispatch<React.SetStateAction<boolean>>

}

//Links to the social media handles of the members are not added yet.
// The json needs to be updated with the social media handles of the members.

const MemberCard: React.FC<MemberProps> = ({ name, designation, photo, index, facebook, instagram, linkedin, hoversetter }) => {
  const top = index % 2 ? (-2 - 2 * Math.random()) : 6 + 2 * Math.random()
  return (
    <div onMouseEnter={() => hoversetter(false)} onMouseLeave={() => hoversetter(true)} style={{ top: top.toString() + "rem" }}
      className={`group relative -mx-8 lg:mx-0 w-[21rem] h-[26.25rem] ${index % 2 ? "scale-[0.5]" : "scale-[0.6]"} hover:scale-[0.7] duration-700`}>
      <Image
        style={{
          mask: "url('/team/memberVector.svg')"
        }}
        className="w-full h-full object-cover" src={photo} alt="member" height={420} width={337} />
      <div className="font-rp1 ml-8 mt-6 group-hover:scale-125 duration-700">
        <p>{name}</p>
        <p>{designation}</p>
      </div>
      <div className="overflow-hidden absolute bottom-0 right-8 w-1/2 h-16">
        <div className=" relative flex -bottom-16 group-hover:-bottom-2 justify-between w-full duration-700">
          {facebook && (<div className="drop-shadow-xl p-2 cursor-pointer"
            rel="noopener noreferrer">
            < SocialIcon url="https://facebook.com" style={{ height: 30, width: 30 }} />
          </div>
          )}
          {instagram && (<div className="drop-shadow-xl p-2 cursor-pointer"
            rel="noopener noreferrer">
            < SocialIcon url="https://www.instagram.com/officialrickastley" style={{ height: 30, width: 30 }} />
          </div>
          )}
          {linkedin && (<div className="drop-shadow-xl p-2 cursor-pointer"
            rel="noopener noreferrer">
            < SocialIcon url="https://linkedin.com" style={{ height: 30, width: 30 }} />
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export { MemberCard }