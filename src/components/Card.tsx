import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";
interface propsType {
  name: string;
  designation: string;
  photo: string;
  id: string;
  main: number;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
}

const Card: React.FC<propsType> = ({
  name,
  designation,
  photo,
  id,
  main,
  facebook,
  linkedin,
  instagram,
  github,
}) => {
  const [hover, setHover] = useState(false);
  const customHoverDetails = hover
    ? {
        textShadow:
          "0 0 8.48px rgba(251, 5, 255, 1), 0 0 16.96px rgba(251,5,255,1)",
        transition: "all 0.3s ease",
      }
    : { transition: "all 0.3s ease" };

  const customHoverButton = hover
    ? {
        right: "20px",
        transition: "all 0.3s ease",
      }
    : {
        right: "0px",
        transition: "all 0.3s ease",
      };

  useEffect(() => {
    if (document) {
      const element = document.getElementById("papadiv" + main + id);
      element?.addEventListener("mouseenter", () => {
        setHover(true);
      });
      element?.addEventListener("mouseleave", () => {
        setHover(false);
      });
    }
  });
  return (
    <div
      className="relative m-6 flex h-[22rem] w-[20rem] scale-90 flex-col"
      id={"papadiv" + main + id}
    >
      <div className="absolute top-0 flex w-full flex-row items-start justify-around">
        <Image
          src="/team/leftframe.svg"
          className="absolute left-11 top-12 scale-[2.2]"
          alt="leftframe"
          width={100}
          height={100}
        />
        <div
          style={
            hover
              ? {
                  filter: `drop-shadow(0 2px 1px rgba(251, 5, 255, 1))`,
                  transition: "all 0.3s ease",
                }
              : { transition: "all 0.3s ease" }
          }
          className="absolute -right-4 -top-12 z-10 flex h-[445px] w-[96px] scale-[0.92] items-center justify-center bg-[url('/team/rightframe.svg')]"
        >
          <div className="rotate-90">
            <h1
              style={customHoverDetails}
              className="mb-8 mr-12 w-[400px] text-center font-rp1 text-2xl"
            >
              {designation}
            </h1>
          </div>
          <div
            className="fixed right-12 z-[5] flex flex-col gap-6"
            style={
              hover
                ? {
                    height: "max-content",
                    transform: "scale(1)",
                    transition: "all 0.3s ease",
                  }
                : {
                    opacity: "0",
                    transition: "all 0.3s ease",
                    transform: "scale(0.6)",
                  }
            }
          >
            {facebook && (
              <div
                className="relative cursor-pointer"
                style={customHoverButton}
              >
                <Link
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="FaceBook"
                >
                  <IoLogoFacebook className="h-[30px] w-[30px]" />
                </Link>
              </div>
            )}
            {instagram && (
              <div
                className="relative cursor-pointer"
                style={customHoverButton}
              >
                <Link
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IoLogoInstagram className="h-[30px] w-[30px]" />
                </Link>
              </div>
            )}
            {linkedin && (
              <div
                className="relative cursor-pointer"
                style={customHoverButton}
              >
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="InstaGram"
                >
                  <IoLogoLinkedin className="h-[30px] w-[30px]" />
                </Link>
              </div>
            )}
            {github && (
              <div
                className="relative cursor-pointer"
                style={customHoverButton}
                rel="noopener noreferrer"
              >
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IoLogoGithub className="h-[30px] w-[30px]" />
                </Link>
              </div>
            )}
          </div>
          <Image
            src="/team/stencil.png"
            width={162}
            height={162}
            alt=""
            style={
              hover
                ? {
                    filter: `drop-shadow(0 0 8.48px rgba(251, 5, 255, 1)) drop-shadow(0 0 16.96px rgba(251, 5, 255, 1))`,
                    transition: "all 0.3s ease",
                  }
                : {
                    transition: "all 0.3s ease",
                  }
            }
            className="absolute -right-1 top-[350px] z-[15]"
          />
        </div>
        <div
          style={
            hover
              ? {
                  filter: `drop-shadow(0 0 2.48px rgba(251, 5, 255, 1))`,
                  transform: "translateY(0.91rem)",
                  transition: "all 0.3s ease",
                }
              : { transition: "all 0.3s ease" }
          }
          className="absolute -left-5 top-[300px] z-10 flex h-[82px] w-[262px] items-center bg-[url('/team/bottframe.svg')]"
        >
          <div
            className="ml-4 flex w-[80%] flex-col items-center"
            style={customHoverDetails}
          >
            <h1 className="font-rp1">{name}</h1>
          </div>
        </div>
      </div>
      <Image
        src={photo}
        alt="photo"
        height={500}
        width={500}
        style={
          hover
            ? {
                transition: "all 0.3s ease",
                boxShadow:
                  "-20px 0 4.48px -10px rgba(251, 5, 255, 0.5), -15px 0 0 -10px rgba(255, 255, 255, 1)",
                filter: ` drop-shadow(-5px -5px 8.96px rgba(251, 255, 255, 0.3))`,
              }
            : {
                transition: "all 0.3s ease",
                filter: ` drop-shadow(-5px -5px 8.96px rgba(251, 255, 255, 0.3))`,
              }
        }
        className="h-full w-full rounded-[45.58px] object-cover"
      />
    </div>
  );
};

export default Card;

interface MemberProps {
  name: string;
  designation: string;
  photo: string;
  index: number;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  hoversetter: React.Dispatch<React.SetStateAction<boolean>>;
}

const MemberCard: React.FC<MemberProps> = ({
  name,
  designation,
  photo,
  index,
  facebook,
  instagram,
  linkedin,
  github,
  hoversetter,
}) => {
  const top = index % 2 ? -2 - 2 * Math.random() : 6 + 2 * Math.random();
  return (
    <div
      onMouseEnter={() => hoversetter(false)}
      onMouseLeave={() => hoversetter(true)}
      style={{ top: top.toString() + "rem" }}
      className={`group relative -mx-8 h-[26.25rem] w-[21rem] lg:mx-0 ${index % 2 ? "scale-[0.5]" : "scale-[0.6]"} duration-700 hover:scale-[0.7]`}
    >
      <Image
        style={{
          mask: "url('/team/memberVector.svg')",
        }}
        className="h-full w-full object-cover"
        src={photo}
        alt="member"
        height={420}
        width={337}
      />
      <div className="ml-8 mt-6 font-rp1 duration-700 group-hover:scale-125">
        <p>{name}</p>
        <p>{designation}</p>
      </div>
      <div className="absolute bottom-0 right-8 h-16 w-1/2 overflow-hidden">
        <div className="relative -bottom-16 flex w-full justify-between duration-700 group-hover:-bottom-2">
          {facebook && (
            <div
              className="cursor-pointer p-2 drop-shadow-xl"
              rel="noopener noreferrer"
            >
              <Link
                href={facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FaceBook"
              >
                <IoLogoFacebook className="h-[30px] w-[30px]" />
              </Link>
            </div>
          )}
          {instagram && (
            <div
              className="cursor-pointer p-2 drop-shadow-xl"
              rel="noopener noreferrer"
            >
              <Link
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="InstaGram"
              >
                <IoLogoInstagram className="h-[30px] w-[30px]" />
              </Link>
            </div>
          )}
          {linkedin && (
            <div
              className="cursor-pointer p-2 drop-shadow-xl"
              rel="noopener noreferrer"
            >
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IoLogoLinkedin className="h-[30px] w-[30px]" />
              </Link>
            </div>
          )}
          {github && (
            <div
              className="cursor-pointer p-2 drop-shadow-xl"
              rel="noopener noreferrer"
            >
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IoLogoGithub className="h-[30px] w-[30px]" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { MemberCard };
