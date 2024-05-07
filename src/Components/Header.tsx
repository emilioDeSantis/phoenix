"use client";
import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { use, useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import useHideNavOnScroll from "@/app/hooks/useHideNavOnScroll";

const Header: React.FC = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [underlineLeft, setUnderlineLeft] = useState<number>(0);

    const pathname = usePathname();

    const visable = useHideNavOnScroll();

    const links = [
        
        { label: "Home", href: "/" },
        { label: "Partner", href: "/partner" },
        { label: "Apply", href: "/apply" },
        // { name: "Contact", href: "/contact" },
    ];
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                position: "fixed",
                top: 0,
                transform: `translateY(${visable ? 0 : -4}rem)`,
                transition: "0.3s",
                zIndex: 1000,
                background: "#1C1D1E",
            }}
        >
            <div
            className="side-padding"
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    color: "white",
                    zIndex: 1000,
                    letterSpacing: "0.1em",
                }}
            >
                <Link href="/">
                    <Logo />
                </Link>
                <nav
                    className="desktop"
                    style={{
                        color: "#EEFDFF",
                        gap: "2.4rem",
                        fontWeight: 300,
                        letterSpacing: "0.04em",
                        height: "3rem",
                        opacity: 1,
                    }}
                >
                    {/* {links.map((link, index) => (
                        <Link
                            key={index}
                            ref={(el) => (linkRefs.current[index] = el)}
                            className={link.href == pathname ? "" : "nav-link"}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            href={link.href}
                        >
                            <div>{link.label}</div>
                        </Link>
                    ))} */}
                </nav>
                <div className="mobile">
                    {/* <DropdownMenu navLinks={links} /> */}
                </div>
            </div>
        </div>
    );

};

export default Header;
