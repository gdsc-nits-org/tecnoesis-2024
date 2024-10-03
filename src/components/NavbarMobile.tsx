"use client";

import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import styles from "./NavbarMobile.module.css";
import { Outfit } from "next/font/google";
import Link from "next/link";
import Login from "./GoogleAuth";
const outfit = Outfit({
  weight: "500",
  subsets: ["latin"],
});

export default function NavbarMobile() {
  const [expand, setExpand] = useState(false);

  return (
    <nav
      className={
        "sticky left-0 top-0 z-50 flex w-full flex-col gap-4 bg-[#000000]"
      }
      style={
        expand
          ? {
              background: "radial-gradient(circle, #011528 0%, #000204 100%)",
            }
          : {}
      }
    >
      <div
        className={
          !expand
            ? "flex items-center justify-between px-8 pr-14 pt-4"
            : "flex items-center justify-between px-8 pr-14 pt-4"
        }
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
            <IoMenu size={50} color="#B8B8B8" />
          ) : (
            <IoClose size={50} color="#B8B8B8" />
          )}
        </button>
        <Image
          className="filter"
          style={{
            filter: "drop-shadow(2px 2px 8px 16px #01A3F5)",
          }}
          src="/assets/NavbarMobile/TecnoLogo.svg"
          width={27}
          height={41}
          alt="tecnoesisLogo"
        ></Image>
      </div>
      {expand && (
        <div className="flex h-full w-full flex-col gap-2">
          <Login />
          <section
            className={
              outfit.className +
              " flex h-full flex-col items-center gap-4 pb-4 text-2xl font-semibold text-[#B8B8B8]"
            }
          >
            <div className="p-4">
              <Link href="home">Home</Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link href="home#about">About</Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link href="home#sponsors">Sponsors</Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link href="modules">Modules</Link>
            </div>
            <hr className="h-0.5 w-[75%] border-0 bg-gradient-to-r from-transparent via-[#01A3F5] to-transparent" />
            <div className="p-4">
              <Link href="team">Team</Link>
            </div>
          </section>
        </div>
      )}
    </nav>
  );
}
