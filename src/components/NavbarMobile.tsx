"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Login from "./GoogleAuth";
const outfit = Outfit({
  weight: "500",
  subsets: ["latin"],
});

export default function NavbarMobile() {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    let path = "/home";
    if (window) {
      path = window.location.pathname;
    }

    const navMap = new Map([
      ["/home", 0],
      ["/home#about", 1],
      ["/home#sponsors", 2],
      ["/modules", 3],
      ["/team", 4],
    ]);

    const links = document.querySelectorAll("nav-options");
    const currentPage = navMap.get(path);
    if (currentPage !== undefined) {
      console.log(currentPage);
      links[currentPage]?.classList.add(" text-[#01A3F5]");
    }
  }, []);

  return (
    <nav
      className={
        "sticky left-0 top-0 z-50 flex w-full flex-col gap-4 bg-[#000000]"
      }
      style={
        expand
          ? {
              background: "radial-gradient(circle, #011528 0%, #000204 100%)",
              height: "100vh",
            }
          : {
              height: "auto",
            }
      }
    >
      <div
        className={"flex items-center justify-between px-8 py-2 pr-14"}
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
        <button onClick={() => setExpand(!expand)}>
          {!expand ? (
            <IoMenu size={45} color="#808080" />
          ) : (
            <IoClose size={45} color="#808080" />
          )}
        </button>
        <Image
          className="drop-shadow-[2px_2px_20px_#0a9de5] filter"
          src="/assets/NavbarMobile/TecnoLogo.svg"
          width={27}
          height={41}
          alt="tecnoesisLogo"
        ></Image>
      </div>

      <div
        className={`${expand ? "flex h-full" : "hidden"} w-full animate-accordion-down flex-col gap-2`}
      >
        <Login />
        <section
          className={
            outfit.className +
            " flex h-full flex-col items-center gap-4 pb-4 text-2xl font-semibold text-[#B8B8B8]"
          }
        >
          <div className="p-4">
            <Link className="nav-options" href="home">
              Home
            </Link>
          </div>
          <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
          <div className="p-4">
            <Link className="nav-options" href="home#about">
              About
            </Link>
          </div>
          <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
          <div className="p-4">
            <Link className="nav-options" href="home#sponsors">
              Sponsors
            </Link>
          </div>
          <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
          <div className="p-4">
            <Link className="nav-options" href="modules">
              Modules
            </Link>
          </div>
          <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
          <div className="p-4">
            <Link className="nav-options" href="team">
              Team
            </Link>
          </div>
        </section>
      </div>
    </nav>
  );
}
