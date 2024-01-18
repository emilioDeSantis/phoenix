"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import HeroLink from "../Components/HeroLink";
import { useEffect, useState } from "react";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import AnimatedComponent from "@/Components/AnimatedComponent";
import GSAPTextScramble from "@/Components/ScrambleText";
import ScrambleText from "@/Components/ScrambleText";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import { ReactLenis } from "@studio-freight/react-lenis";
import AnimatedWord from "@/Components/AnimatedWord";
import LoadingScreen from "@/Components/LoadingScreen";
import { log } from "console";

const inter = Inter({ subsets: ["latin"] });

const scrollSpeed = 1;

export default function Home() {
    // useSmoothScroll();

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const videoElement = document.querySelector("video");
        console.log(videoElement);

        videoElement?.play();

        videoElement?.addEventListener("playing", () => {
            setLoading(false)
        });

        videoElement?.addEventListener("ended", function () {
            // Change to the looping video
            videoElement.src = "/loop.mp4";
            videoElement.loop = true;
            videoElement.play();
        });
    }, []);

    const scrollToNextScreen = () => {
        window.scrollBy({
            top: window.innerHeight, // Scroll down one full screen height
            left: 0,
            behavior: "smooth", // Smooth scroll
        });
    };

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                overflowY: "hidden",
            }}
        >
            {isLoading && <LoadingScreen />}
            {/* <div
                style={{
                    perspective: "1px",
                    overflowY: "scroll",
                    height: "100vh",
                    transformStyle: "preserve-3d",
                }}
            > */}
            <video
                // autoPlay
                // loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100vh",
                    left: 0,
                    right: 0,
                    top: 0,
                    objectFit: "cover",
                    transform: `scale(${1 / scrollSpeed}) scaleX(-1)
                            translateZ(-${1 / scrollSpeed - 1}px) 
                            translateY(calc(${(1 - scrollSpeed) * -50}vh))`,
                    transformOrigin: "top",
                    // filter: "brightness(60%) contrast(250%)",
                    filter: "brightness(90%) contrast(110%)",
                }}
            >
                <source src={"/start.mp4"} type="video/mp4" />
            </video>
            <div
                style={{
                    position: "absolute",
                    color: "white",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    paddingInline: "5vw",
                    zIndex: 2,
                }}
            >
                <AnimatedWord
                    yOffset={60}
                    stagger={0.03}
                    duration={0.4}
                    delay={!isLoading ? 2 : 100}
                    triggerMargin="0%"
                    textStyle={{
                        textTransform: "uppercase",
                        width: "100%",
                        fontSize: "10vw",
                        fontFamily: "Monument-Extended",
                        display: "flex",
                        // justifyContent: "center",
                        lineHeight: 0.8,
                        marginBottom: "6vh",
                    }}
                    text="Phoenix"
                />
                <AnimatedText
                    delay={!isLoading ? 3.5 : 100}
                    yOffset={20}
                    stagger={0.01}
                    duration={0.5}
                    triggerMargin="0%"
                    textStyle={{
                        fontSize: "1.8vw",
                        marginBottom: "20vh",
                        fontFamily: "Monument-Extended",
                        fontWeight: 400,
                        marginLeft: "3vw",
                        lineHeight: 1.3,
                        width: "40vw",
                    }}
                    text="New England's Premier Construction Labor Partner"
                />
            </div>

            <div
                style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingBottom: "2rem",
                    zIndex: 5,
                    opacity: 0.8,
                }}
            >
                <button
                    onClick={scrollToNextScreen}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <AnimatedComponent
                        yOffset={60}
                        duration={0.4}
                        delay={!isLoading ? 7.4 : 100}
                        triggerMargin="0%"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <div
                            style={{
                                border: "0.5px solid white",
                                borderRadius: "100%",
                                width: "2.4rem",
                                height: "2.4rem",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    height: "1.4rem",
                                    width: "1.4rem",
                                }}
                            >
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ alignSelf: "center" }}
                                >
                                    <path d="M12 1 L12 23 M1 12 L12 23 L23 12"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            style={{
                                fontWeight: 300,
                                fontSize: "0.8rem",
                            }}
                        >
                            SCROLL
                        </div>
                    </AnimatedComponent>
                </button>
            </div>

            <div
                style={{
                    position: "absolute",
                    color: "white",
                    right: 0,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingInline: "3vw",
                    paddingBottom: "2rem",
                    zIndex: 5,
                    opacity: 0.8,
                }}
            >
                <AnimatedComponent
                    yOffset={60}
                    duration={0.4}
                    delay={!isLoading ? 3.9 : 100}
                    triggerMargin="0%"
                    style={{
                        textTransform: "uppercase",
                        fontSize: "1.1rem",
                        fontWeight: 300,
                    }}
                >
                    <Link
                        href={"/partner"}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                    >
                        <ScrambleText text="PARTNER WITH PHOENIX" />
                        <div
                            style={{
                                height: "0.8rem",
                                width: "0.8rem",
                            }}
                        >
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ alignSelf: "center" }}
                            >
                                <path d="M1 23 L23 1 M1 1 H23 V23"></path>
                            </svg>
                        </div>
                    </Link>
                </AnimatedComponent>
                <AnimatedComponent
                    yOffset={60}
                    duration={0.4}
                    delay={!isLoading ? 4.1 : 100}
                    triggerMargin="0%"
                    style={{
                        textTransform: "uppercase",
                        fontSize: "1.1rem",
                        fontWeight: 300,
                    }}
                >
                    <Link
                        href={"/apply"}
                        style={{
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.8rem",
                        }}
                    >
                        <ScrambleText text="JOIN OUR TEAM" />
                        <div
                            style={{
                                height: "0.8rem",
                                width: "0.8rem",
                            }}
                        >
                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ alignSelf: "center" }}
                            >
                                <path d="M1 23 L23 1 M1 1 H23 V23"></path>
                            </svg>
                        </div>
                    </Link>
                </AnimatedComponent>
            </div>

            <div
                style={{
                    position: "absolute",
                    color: "white",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        height: "100vh",
                        paddingBottom: "10rem",
                        width: "100vw",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        zIndex: 2,
                    }}
                ></div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        color: "white",
                        backgroundColor: "black",
                        paddingInline: "5vw",
                        paddingTop: "7rem",
                        paddingBottom: "7rem",
                        gap: "20px", // Adds space between items in the flex container
                    }}
                >
                    <AnimatedText
                        stagger={0.005}
                        duration={0.4}
                        yOffset={50}
                        delay={!isLoading ? 0 : 100}
                        textStyle={{
                            fontSize: "1rem",
                            fontFamily: "Monument-Extended",
                        }}
                        text="/ RISING TO THE CHALLENGE"
                    ></AnimatedText>
                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <AnimatedText
                            stagger={0.0025}
                            duration={0.4}
                            yOffset={50}
                            delay={!isLoading ? 0 : 100}
                            textStyle={{
                                fontSize: "2vw",
                                width: "50vw",
                                fontWeight: 300,
                                lineHeight: 1.4,
                                marginTop: "2rem",
                                opacity: 0.8,
                            }}
                            text="Phoenix offers adaptable team sizes and quick deployment. Our workers specialize in site preparation, clean-up, and material handling, ensuring smooth project management and reliable results."
                        ></AnimatedText>
                        <AnimatedComponent
                            triggerMargin="40%"
                            yOffset={100}
                            duration={0.5}
                            delay={!isLoading ? 0 : 100}
                        >
                            <div
                                style={{
                                    height: "36vw",
                                    width: "36vw",
                                    position: "relative",
                                    marginTop: "-6rem",
                                }}
                            >
                                <Image
                                    fill
                                    src={"/bp3.png"}
                                    alt={"image"}
                                    sizes="100vw"
                                    priority
                                    style={{
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        </AnimatedComponent>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            marginTop: "-2rem",
                            zIndex: 2,
                            color: "white",
                            fontSize: "5.6vw",
                            fontFamily: "Monument-Extended",
                        }}
                    >
                        <AnimatedComponent 
                        delay={!isLoading ? 0 : 100}>
                            <Link
                                href={"/partner"}
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.2vw",
                                }}
                            >
                                <ScrambleText text="PARTNER" />
                                <div
                                    style={{
                                        height: "3.6vw",
                                        width: "3.6vw",
                                    }}
                                >
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ alignSelf: "center" }}
                                    >
                                        <path d="M1 23 L23 1 M1 1 H23 V23"></path>
                                    </svg>
                                </div>
                            </Link>
                        </AnimatedComponent>
                        <AnimatedComponent 
                        delay={!isLoading ? 0 : 100}>
                            <Link
                                href={"/apply"}
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1.2vw",
                                }}
                            >
                                APPLY
                                <div
                                    style={{
                                        height: "3.6vw",
                                        width: "3.6vw",
                                    }}
                                >
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ alignSelf: "center" }}
                                    >
                                        <path d="M1 23 L23 1 M1 1 H23 V23"></path>
                                    </svg>
                                </div>
                            </Link>
                        </AnimatedComponent>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    );
}
