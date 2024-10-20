"use client";

import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import Login from "../GoogleAuth";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
  const [expand, setExpand] = useState(false);
  let path = usePathname();
  const navLinks: string[] = [
    "/home",
    "/home#about",
    "/home#sponsors",
    "/modules",
    "/team",
  ];

  const handleNavClick = (idx: number) => {
    setExpand(false);
    if (navLinks[idx]) path = navLinks[idx];
  };

  return (
    <nav
      className={`${expand ? "absolute max-h-screen" : "sticky"} left-0 top-0 z-50 flex w-full flex-col gap-4 bg-[#000000]`}
      style={
        expand
          ? {
              background: "radial-gradient(circle, #011528 0%, #000204 100%)",
            }
          : {}
      }
    >
      <section
        className={"flex items-center justify-between px-8 pr-14 pt-4"}
        style={
          !expand
            ? {
                background: "radial-gradient(circle, #011528 0%, #000204 100%)",
                boxShadow:
                  "0px 0px 29.92px 0px #33789B1A, inset 0px 0px 15.3px 1px #143342BF",
              }
            : {}
        }
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
          <Login />
          <section className="font-out flex h-full flex-col items-center gap-4 pb-4 text-2xl font-semibold text-[#B8B8B8]">
            <div className="p-4">
              <Link
                onClick={() => handleNavClick(0)}
                className={`navOptions duration- transition-colors ${path == navLinks[0] && "text-[#01A3F5]"} `}
                href="/home"
              >
                Home
              </Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link
                onClick={() => handleNavClick(1)}
                className={`navOptions duration- transition-colors ${path == navLinks[1] && "text-[#01A3F5]"} `}
                href="/home#about"
              >
                About
              </Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link
                onClick={() => handleNavClick(2)}
                className={`navOptions duration- transition-colors ${path == navLinks[2] && "text-[#01A3F5]"} `}
                href="/home#sponsors"
              >
                Sponsors
              </Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link
                onClick={() => handleNavClick(3)}
                className={`navOptions duration- transition-colors ${path == navLinks[3] && "text-[#01A3F5]"} `}
                href="/modules"
              >
                Modules
              </Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link
                onClick={() => handleNavClick(4)}
                className={`navOptions duration- transition-colors ${path == navLinks[4] && "text-[#01A3F5]"} `}
                href="/team"
              >
                Team
              </Link>
            </div>
          </section>
        </div>
      }
    </nav>
  );
}
