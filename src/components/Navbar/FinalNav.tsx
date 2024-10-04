"use client"

import Navbar from "./DeskNav"
import NavbarMobile from "./NavbarMobile"
import { useMediaQuery } from "usehooks-ts"

const FinalNav = () => {
    const isMobile = useMediaQuery("(max-width: 768px)")
    return (
        <section className="sticky top-0">
            {isMobile?<NavbarMobile />:
            <Navbar />}
        </section>
    )
}
export default FinalNav