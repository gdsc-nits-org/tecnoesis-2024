"use client";

import { useState, useEffect } from "react";
import Navbar from "./DeskNav";
import NavbarMobile from "./NavbarMobile";
import { useMediaQuery } from "usehooks-ts";

const FinalNav = () => {
  const [isMounted, setIsMounted] = useState(false);
  const bigScreen = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (!bigScreen) return <NavbarMobile />;
  return <Navbar />;
};
export default FinalNav;
