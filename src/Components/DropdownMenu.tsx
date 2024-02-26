"use client";
import { useState, useRef, useEffect, FC } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

type DropdownMenuProps = {
    navLinks: { label: string; href: string }[];
};

const DropdownMenu: FC<DropdownMenuProps> = ({ navLinks }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const pathname = usePathname();

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                // alert('close')
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, []);

    useEffect(() => {
        console.log(isOpen);
    }, [isOpen]);

    return (
        <div style={{ position: "relative" }}>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
                style={{
                    border: "none",
                    cursor: "pointer",
                    height: "3rem",
                    width: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    color:'white',
                }}
            >
                {isOpen && <XMarkIcon className="h-6 w-6"/>}
                {!isOpen && <Bars3Icon className="h-6 w-6" />}
            </button>
            <div
                style={{
                    width: "100vw",
                    position: "fixed",
                    top: 0,
                    right: 0,
                    transform: isOpen ? "translateY(0)" : "translateY(-30rem)",
                    transition: "transform 0.3s ease",
                    zIndex: -1,
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "6rem",
                    paddingBottom: "2rem",
                    fontWeight: 300,
                    borderRadius: "none",
                    color: "#EEFDFF",
                    letterSpacing: "0.04em",
                    opacity: 1,
                    background: 'black',
                    fontSize: '1.2rem'
                }}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => {
                            setIsOpen(false);
                        }}
                        className={link.href == pathname ? "" : "nav-link"}
                        style={{
                            padding: '0.6rem',
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DropdownMenu;
