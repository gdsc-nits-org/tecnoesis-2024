"use client";

import Navbar from "./DeskNav";
import NavbarMobile from "./NavbarMobile";
import { useMediaQuery } from "usehooks-ts";

const FinalNav = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if(isMobile) return <NavbarMobile/>
  return <Navbar/>
};
export default FinalNav;
