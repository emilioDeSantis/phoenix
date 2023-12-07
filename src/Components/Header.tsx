"use client";
import Link from "next/link";
import { link } from "fs";
import { usePathname } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";

const Header: React.FC = () => {
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [underlineLeft, setUnderlineLeft] = useState<number>(0);

    const pathname = usePathname();

    const [isSwitchingTabs, setIsSwitchingTabs] = useState(false);

    useEffect(() => {
        setIsSwitchingTabs(true);
        // reset isSwitchingTabs to false after 300ms. Adjust the delay if needed.
        setTimeout(() => setIsSwitchingTabs(false), 500);
    }, [pathname]);

    useEffect(() => {
        const activeIndex = links.findIndex((link) => link.href === pathname);
        const activeLink = linkRefs.current[activeIndex];

        if (activeLink) {
            const left = activeLink.offsetLeft;
            setUnderlineLeft(left);
        }
    }, [pathname]);

    const links = [
        { name: "Home", href: "/" },
        { name: "Partner", href: "/partner" },
        { name: "Apply", href: "/apply" },
        // { name: "Contact", href: "/contact" },
    ];
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "stretch",
                backgroundColor: pathname == "/" ? "#0000" : "#000",
                color: "white",
                zIndex: 1000,
                letterSpacing: "0.1em",
                paddingLeft: "5vw",
                paddingRight: "8vw",
                // borderBottom: "0.3px solid #ffffff",
            }}
        >
            <Link href="/" style={{
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                PHOENIX
            </Link>
            <nav
                style={{
                    color: "#EEFDFF",
                    gap: "2.4rem",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                    display: "flex",
                    height: '3rem',
                }}
            >
                {links.map((link, index) => (
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
                        <div>{link.name}</div>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Header;
