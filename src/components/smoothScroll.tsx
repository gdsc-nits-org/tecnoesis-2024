import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis>{children}</ReactLenis>;
};

export default SmoothScroll;
