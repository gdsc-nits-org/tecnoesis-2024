"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import Login from "../GoogleAuth";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
  const [expand, setExpand] = useState(false);
  let path = usePathname();
  const navLinks: string[] = [
    "/home",
    "/gallery",
    "/spark",
    "/modules",
    "/team",
    "/dashboard",
  ];

  const handleProfile = () => {
    setExpand(false);
  };
  const handleNavClick = (idx: number) => {
    setExpand(false);
    if (navLinks[idx]) path = navLinks[idx];
  };
  useEffect(() => {
    if (expand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [expand]);

  return (
    <>
      <nav
        className={`${expand ? "fixed h-auto min-h-screen" : "sticky h-[4.75rem]"} left-0 top-0 z-50 flex w-full flex-col gap-1 bg-transparent backdrop-blur-sm`}
        style={
          expand
            ? {
                background:
                  "radial-gradient(circle, #011528d6 0%, #000204d6 100%)",
              }
            : {}
        }
      >
        <section
          className={`${!expand && "bg-gradient-to-b from-[#011528] to-[#0002043f]"} flex items-center justify-between px-8 pr-14 pt-4`}
        >
          <button className="mb-2" onClick={() => setExpand(!expand)}>
            {!expand ? (
              <IoMenu size={50} color="#B8B8B8" />
            ) : (
              <IoClose size={50} color="#B8B8B8" />
            )}
          </button>
          <Image
            className="filter"
            style={{
              filter: "drop-shadow(2px 2px 16px #01A3F5)",
            }}
            src="/assets/NavbarMobile/TecnoLogo.svg"
            width={30}
            height={41}
            alt="tecnoesisLogo"
          ></Image>
        </section>
        {
          <div
            className={`${expand ? "flex h-screen translate-y-0 opacity-100" : "h-0 translate-y-[-100rem] opacity-0"} w-full flex-col gap-2 transition-transform duration-1000`}
          >
            <div onClick={handleProfile}>
              <Login />
            </div>
            <section className="font-out flex h-full flex-col items-center gap-2 pb-4 text-2xl font-semibold text-[#B8B8B8]">
              <div className="p-1">
                <Link
                  onClick={() => handleNavClick(0)}
                  className={`navOptions text-lg transition-colors duration-500 lg:text-xl ${path == navLinks[0] && "text-[#01A3F5]"} `}
                  href="/home"
                >
                  Home
                </Link>
              </div>
              <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
              <div className="p-1">
                <Link
                  onClick={() => handleNavClick(1)}
                  className={`navOptions text-lg transition-colors duration-500 lg:text-xl ${path == navLinks[1] && "text-[#01A3F5]"} `}
                  href="/gallery"
                >
                  Gallery
                </Link>
              </div>
              <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
              <div className="p-1">
                <Link
                  onClick={() => handleNavClick(2)}
                  className={`navOptions text-lg transition-colors duration-500 lg:text-xl ${path == navLinks[2] && "text-[#01A3F5]"} `}
                  href="/spark"
                >
                  Spark
                </Link>
              </div>
              <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
              <div className="p-1">
                <Link
                  onClick={() => handleNavClick(3)}
                  className={`navOptions text-lg transition-colors duration-500 lg:text-xl ${path == navLinks[3] && "text-[#01A3F5]"} `}
                  href="/modules"
                >
                  Modules
                </Link>
              </div>
              <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
              <div className="p-1">
                <Link
                  onClick={() => handleNavClick(4)}
                  className={`navOptions text-lg transition-colors duration-500 lg:text-xl ${path == navLinks[4] && "text-[#01A3F5]"} `}
                  href="/team"
                >
                  Team
                </Link>
              </div>
            </section>
          </div>
        }
      </nav>
      {expand && <div className="display-none h-[4.75rem]"></div>}
    </>
  );
}
