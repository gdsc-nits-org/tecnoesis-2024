"use client";

import Navbar from "./DeskNav";
import NavbarMobile from "./NavbarMobile";
import { useMediaQuery } from "usehooks-ts";

const FinalNav = () => {
  const bigScreen = useMediaQuery("(min-width: 768px)");
  if (!bigScreen) return <NavbarMobile />;
  return <Navbar />;
};
export default FinalNav;
