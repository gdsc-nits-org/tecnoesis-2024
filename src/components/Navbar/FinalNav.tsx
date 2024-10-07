"use client";

import Navbar from "./DeskNav";
import NavbarMobile from "./NavbarMobile";
import { useMediaQuery } from "usehooks-ts";

const FinalNav = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return isMobile ? <NavbarMobile /> : <Navbar />;
};
export default FinalNav;
