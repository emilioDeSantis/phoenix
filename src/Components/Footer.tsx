import React from "react";
import LogoOnly from "./LogoOnly";
import { dividerStroke } from "./RowDivider";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: "12rem",
                marginBottom: "1rem",
            }}
        >
            <div
                style={{
                    height: "Min(12rem, 20vw)",
                    opacity: 0.1,
                    paddingInline: "5vw",
                }}
            >
                <LogoOnly />
            </div>
            <div
                style={{
                    width: "100%",
                    borderTop: dividerStroke,
                    marginTop: "3rem",
                }}
            />
            <div
                className="footer-container"
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingInline: "5vw",
                    marginTop: "3rem",
                    fontFamily: "Monument-Extended",
                    fontSize: "0.9rem",
                    lineHeight: 2.4,
                    gap: "3rem",
                }}
            >
                <div>
                    <h2 style={{}}>Explore</h2>
                    <nav
                        style={{
                            marginTop: "1rem",
                            opacity: 0.7,
                        }}
                    >
                        <ul style={{}}>
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/partner"}>Partner</Link>
                            </li>
                            <li>
                                <Link href={"/apply"}>Apply</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <section>
                        <h2 style={{}}>Contact</h2>
                        <div
                            style={{
                                fontWeight: 300,
                                marginTop: "1rem",
                                opacity: 0.7,
                            }}
                        >
                            <p>781-641-2858</p>
                            <p>info@phoenixcr.net</p>
                            <p>
                                165 Washington St Suite A Winchester MA 01890 US
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingInline: "5vw",
                    opacity: 0.6,
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    alignItems: "flex-end",
                    marginTop: "3rem",
                }}
            >
                <p style={{
                    textTransform: "uppercase",
                }}>© 2024 Phoenix construction resources Inc.</p>
                <Link 
                target="_blank"
                 style={{
                    whiteSpace: "nowrap",
                }} href="https://www.ui-design-studio.com">UI Design Studio</Link>
            </div>
        </footer>
    );
};

export default Footer;
