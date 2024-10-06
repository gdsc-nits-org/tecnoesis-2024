"use client";

import { useEffect } from "react";
import Navbar from "./DeskNav";
import NavbarMobile from "./NavbarMobile";
import { useMediaQuery } from "usehooks-ts";

const FinalNav = () => {
  let isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <NavbarMobile /> : <Navbar />;
};
export default FinalNav;
