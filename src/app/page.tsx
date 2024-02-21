// "use client";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import HeroLink from "../Components/HeroLink";
// import { use, useEffect, useState } from "react";
// import AnimatedText from "@/Components/AnimatedText";
// import Link from "next/link";
// import AnimatedComponent from "@/Components/AnimatedComponent";
// import GSAPTextScramble from "@/Components/ScrambleText";
// import ScrambleText from "@/Components/ScrambleText";
// import useSmoothScroll from "@/hooks/useSmoothScroll";
// import { ReactLenis } from "@studio-freight/react-lenis";
// import AnimatedWord from "@/Components/AnimatedWord";
// import LoadingScreen from "@/Components/LoadingScreen";
// import { log } from "console";
// import Footer from "@/Components/Footer";
// import { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });

// const scrollSpeed = 1;

// export default function Home() {
//     // useSmoothScroll();

//     const [isLoading, setLoading] = useState(true);

//     useEffect(() => {
//         const videoElement = document.querySelector("#initial-video") as HTMLVideoElement | null;
//         const loopVideoElement = document.querySelector("#loop-video") as HTMLVideoElement | null;

//         console.log('vid',videoElement);
        
    
//         if (videoElement) {
//             // const onVideoCanPlayThrough = () => {
//             //     const playPromise = videoElement.play();
    
//             //     if (playPromise !== undefined) {
//             //         playPromise.then(() => {
//             //             setLoading(false);
//             //         }).catch((error: any) => {
//             //             console.error("Video playback was prevented:", error);
//             //             setLoading(false);
//             //         });
//             //     }
//             // };
    
//             // // Add event listener for canplaythrough event
//             // videoElement.addEventListener('canplaythrough', onVideoCanPlayThrough);
            


//             //check if video is already playing and set lofing to false if it is
//             if (videoElement.readyState > 3) {
//                 setLoading(false);
//             }
    
//             videoElement.addEventListener("playing", () => {
//                 setLoading(false);
//             });
    
//             videoElement.addEventListener("ended", () => {
//                 if (loopVideoElement) {
//                     videoElement.style.display = "none"; // Hide the initial video
//                     loopVideoElement.style.display = "block"; // Show the loop video
//                     loopVideoElement.play().catch((error: any) => {
//                         console.error("Error trying to play the loop video:", error);
//                     });
//                 }
//             });
    
//             // Cleanup function to remove event listener
//             // return () => {
//             //     videoElement.removeEventListener('canplaythrough', onVideoCanPlayThrough);
//             // };
//         }
//     }, []);
    

//     const scrollToNextScreen = () => {
//         window.scrollBy({
//             top: window.innerHeight, // Scroll down one full screen height
//             left: 0,
//             behavior: "smooth", // Smooth scroll
//         });
//     };

//     return (
//         <div
//             style={{
//                 height: "100vh",
//                 width: "100vw",
//                 overflowY: "hidden",
//             }}
//         >
//             {isLoading && <LoadingScreen />}

//             <video
//                 id="loop-video"
//                 preload="auto"
//                 playsInline
//                 muted
//                 loop
//                 className="hero-video"
//             >
//             {/* <source src={"/loop.mp4"} type="video/mp4" /> */}
//                 <source src={"/compressedloop.mp4"} type="video/mp4" />
//             </video>
//             <video
//                 id="initial-video"
//                 preload="auto"
//                 playsInline
//                 muted
//                 autoPlay
//                 className="hero-video"
//             >
//             {/* <source src={"/start.mp4"} type="video/mp4" /> */}
//                 <source src={"/compressed.mp4"} type="video/mp4" />
//             </video>
//             <div
//                 style={{
//                     position: "absolute",
//                     color: "white",
//                     width: "100vw",
//                     height: "100vh",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "flex-end",
//                     paddingInline: "5vw",
//                     zIndex: 2,
//                 }}
//             >
//                 <AnimatedWord
//                     yOffset={60}
//                     stagger={0.03}
//                     duration={0.4}
//                     delay={!isLoading ? 2 : 100}
//                     triggerMargin="0%"
//                     textStyle={{
//                         textTransform: "uppercase",
//                         width: "100%",
//                         fontSize: "Max(10vw, 3rem)",
//                         fontFamily: "Monument-Extended",
//                         display: "flex",
//                         // justifyContent: "center",
//                         lineHeight: 0.8,
//                         marginBottom: "6vh",
//                     }}
//                     text="Phoenix"
//                 />
//                 <AnimatedText
//                     delay={!isLoading ? 3.5 : 100}
//                     yOffset={20}
//                     stagger={0.01}
//                     duration={0.5}
//                     triggerMargin="0%"
//                     textStyle={{
//                         fontSize: "Max(1.8vw, 1rem)",
//                         fontFamily: "Monument-Extended",
//                         fontWeight: 400,
//                         marginLeft: "3vw",
//                         lineHeight: 1.3,
//                         width: "Max(40vw, 20rem)",
//                     }}
//                     text="New England's Premier Construction Labor Partner"
//                 />
//                 <div className="hero-spacer" />
//             </div>

//             <div
//                 className="scroll-spacer"
//                 style={{
//                     position: "absolute",
//                     width: "100vw",
//                     height: "100vh",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "flex-end",
//                     paddingInline: "5vw",
//                     zIndex: 5,
//                     opacity: 0.8,
//                 }}
//             >
//                 <button
//                     onClick={scrollToNextScreen}
//                     style={{
//                         background: "none",
//                         border: "none",
//                         cursor: "pointer",
//                         padding: 0,
//                         display: "flex",
//                         alignItems: "center",
//                     }}
//                 >
//                     <AnimatedComponent
//                         yOffset={60}
//                         duration={0.4}
//                         delay={!isLoading ? 7.4 : 100}
//                         triggerMargin="0%"
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             gap: "0.5rem",
//                         }}
//                     >
//                         <div
//                             style={{
//                                 border: "0.5px solid white",
//                                 borderRadius: "100%",
//                                 width: "2.4rem",
//                                 height: "2.4rem",
//                                 display: "flex",
//                                 justifyContent: "center",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     height: "1.4rem",
//                                     width: "1.4rem",
//                                 }}
//                             >
//                                 <svg
//                                     width="100%"
//                                     height="100%"
//                                     viewBox="0 0 24 24"
//                                     fill="none"
//                                     stroke="currentColor"
//                                     strokeWidth="0.8"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     style={{ alignSelf: "center" }}
//                                 >
//                                     <path d="M12 1 L12 23 M1 12 L12 23 L23 12"></path>
//                                 </svg>
//                             </div>
//                         </div>
//                         <div
//                             style={{
//                                 fontWeight: 300,
//                                 fontSize: "0.8rem",
//                             }}
//                         >
//                             SCROLL
//                         </div>
//                     </AnimatedComponent>
//                 </button>
//             </div>

//             <div
//                 className="hero-links"
//                 style={{
//                     position: "absolute",
//                     color: "white",
//                     right: 0,
//                     height: "100vh",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "flex-end",
//                     alignItems: "flex-end",
//                     paddingInline: "3vw",
//                     zIndex: 5,
//                     opacity: 0.8,
//                 }}
//             >
//                 <AnimatedComponent
//                     yOffset={60}
//                     duration={0.4}
//                     delay={!isLoading ? 3.9 : 100}
//                     triggerMargin="0%"
//                     style={{
//                         textTransform: "uppercase",
//                         fontSize: "1.1rem",
//                         fontWeight: 300,
//                     }}
//                 >
//                     <Link
//                         href={"/partner"}
//                         style={{
//                             cursor: "pointer",
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "0.8rem",
//                         }}
//                     >
//                         <ScrambleText text="PARTNER WITH PHOENIX" />
//                         <div
//                             style={{
//                                 height: "0.8rem",
//                                 width: "0.8rem",
//                             }}
//                         >
//                             <svg
//                                 width="100%"
//                                 height="100%"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 style={{ alignSelf: "center" }}
//                             >
//                                 <path d="M1 23 L23 1 M1 1 H23 V23"></path>
//                             </svg>
//                         </div>
//                     </Link>
//                 </AnimatedComponent>
//                 <AnimatedComponent
//                     yOffset={60}
//                     duration={0.4}
//                     delay={!isLoading ? 4.1 : 100}
//                     triggerMargin="0%"
//                     style={{
//                         textTransform: "uppercase",
//                         fontSize: "1.1rem",
//                         fontWeight: 300,
//                     }}
//                 >
//                     <Link
//                         href={"/apply"}
//                         style={{
//                             cursor: "pointer",
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "0.8rem",
//                         }}
//                     >
//                         <ScrambleText text="JOIN OUR TEAM" />
//                         <div
//                             style={{
//                                 height: "0.8rem",
//                                 width: "0.8rem",
//                             }}
//                         >
//                             <svg
//                                 width="100%"
//                                 height="100%"
//                                 viewBox="0 0 24 24"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 style={{ alignSelf: "center" }}
//                             >
//                                 <path d="M1 23 L23 1 M1 1 H23 V23"></path>
//                             </svg>
//                         </div>
//                     </Link>
//                 </AnimatedComponent>
//             </div>

//             <div
//                 style={{
//                     position: "absolute",
//                     color: "white",
//                     width: "100vw",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "flex-end",
//                     zIndex: 2,
//                 }}
//             >
//                 <div
//                     style={{
//                         height: "100vh",
//                         paddingBottom: "10rem",
//                         width: "100vw",
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "flex-end",
//                         zIndex: 2,
//                     }}
//                 ></div>
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "flex-start",
//                         alignItems: "flex-start",
//                         color: "white",
//                         backgroundColor: "black",
//                         paddingInline: "5vw",
//                         paddingTop: "7rem",
//                         // paddingBottom: "7rem",
//                         gap: "20px", // Adds space between items in the flex container
//                     }}
//                 >
//                     <AnimatedText
//                         stagger={0.005}
//                         duration={0.4}
//                         yOffset={50}
//                         delay={!isLoading ? 0 : 100}
//                         textStyle={{
//                             fontSize: "1rem",
//                             fontFamily: "Monument-Extended",
//                         }}
//                         text="/ RISING TO THE CHALLENGE"
//                     ></AnimatedText>
//                     <div
//                         style={{
//                             display: "flex",
//                             width: "100%",
//                             justifyContent: "space-between",
//                         }}
//                     >
//                         <AnimatedText
//                             stagger={0.0025}
//                             duration={0.4}
//                             yOffset={50}
//                             delay={!isLoading ? 0 : 100}
//                             textStyle={{
//                                 fontSize: "1.8rem",
//                                 fontWeight: 300,
//                                 lineHeight: 1.4,
//                                 marginTop: "2rem",
//                                 opacity: 0.8,
//                             }}
//                             text="Phoenix offers adaptable team sizes and quick deployment. Our workers specialize in site preparation, clean-up, and material handling, ensuring smooth project management and reliable results."
//                         ></AnimatedText>
//                         <AnimatedComponent
//                             triggerMargin="40%"
//                             yOffset={100}
//                             duration={0.5}
//                             delay={!isLoading ? 0 : 100}
//                         >
//                             <div
//                                 className="desktop"
//                                 style={{
//                                     height: "36vw",
//                                     width: "36vw",
//                                     position: "relative",
//                                     marginTop: "-6rem",
//                                 }}
//                             >
//                                 <Image
//                                     fill
//                                     src={"/bp3.png"}
//                                     alt={"image"}
//                                     sizes="100vw"
//                                     priority
//                                     style={{
//                                         objectFit: "cover",
//                                     }}
//                                 />
//                             </div>
//                         </AnimatedComponent>
//                     </div>
//                     <div
//                         className="hero-links-bottom"
//                         style={{
//                             display: "flex",
//                             justifyContent: "space-between",
//                             width: "100%",
//                             zIndex: 2,
//                             color: "white",
//                             fontSize: "5.6vw",
//                             fontFamily: "Monument-Extended",
//                         }}
//                     >
//                         <AnimatedComponent
//                             delay={!isLoading ? 0 : 100}
//                             triggerMargin="0px"
//                         >
//                             <Link
//                                 href={"/partner"}
//                                 style={{
//                                     cursor: "pointer",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: "1.2vw",
//                                 }}
//                             >
//                                 <ScrambleText text="PARTNER" />
//                                 <div
//                                     style={{
//                                         height: "3.6vw",
//                                         width: "3.6vw",
//                                     }}
//                                 >
//                                     <svg
//                                         width="100%"
//                                         height="100%"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="0.5"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         style={{ alignSelf: "center" }}
//                                     >
//                                         <path d="M1 23 L23 1 M1 1 H23 V23"></path>
//                                     </svg>
//                                 </div>
//                             </Link>
//                         </AnimatedComponent>
//                         <AnimatedComponent
//                             delay={!isLoading ? 0 : 100}
//                             triggerMargin="0px"
//                         >
//                             <Link
//                                 href={"/apply"}
//                                 style={{
//                                     cursor: "pointer",
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: "1.2vw",
//                                 }}
//                             >
//                                 APPLY
//                                 <div
//                                     style={{
//                                         height: "3.6vw",
//                                         width: "3.6vw",
//                                     }}
//                                 >
//                                     <svg
//                                         width="100%"
//                                         height="100%"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="currentColor"
//                                         strokeWidth="0.5"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         style={{ alignSelf: "center" }}
//                                     >
//                                         <path d="M1 23 L23 1 M1 1 H23 V23"></path>
//                                     </svg>
//                                 </div>
//                             </Link>
//                         </AnimatedComponent>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </div>
//     );
// }



// "use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import HeroLink from "../Components/HeroLink";
import { use, useEffect, useState } from "react";
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
import Footer from "@/Components/Footer";
import { Metadata } from "next";
import ScrollDownButton from "@/Components/ScrollDownButton";

const inter = Inter({ subsets: ["latin"] });

const scrollSpeed = 1;

export default function Home() {


    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                overflowY: "hidden",
            }}
        >

            <video
                preload="auto"
                playsInline
                muted
                loop
                autoPlay
                className="hero-video"
                poster="thumb.png"

            >
                <source src={"/combo_compressed_10M.mp4"} type="video/mp4" 
                 />
            </video>
            <div
                style={{
                    position: "absolute",
                    color: "white",
                    width: "100vw",
                    // height: "100vh",
                    bottom: "0",
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
                    // delay={!isLoading ? 2 : 100}
                    delay={0}
                    triggerMargin="0%"
                    textStyle={{
                        textTransform: "uppercase",
                        width: "100%",
                        fontSize: "Max(10vw, 3rem)",
                        fontFamily: "Monument-Extended",
                        display: "flex",
                        // justifyContent: "center",
                        lineHeight: 0.8,
                        marginBottom: "4vw",
                    }}
                    text="Phoenix"
                />
                <AnimatedText
                    // delay={!isLoading ? 3.5 : 100}
                    delay={0.2}
                    yOffset={20}
                    stagger={0.01}
                    duration={0.5}
                    triggerMargin="0%"
                    textStyle={{
                        fontSize: "Max(1.8vw, 1rem)",
                        fontFamily: "Monument-Extended",
                        fontWeight: 400,
                        // marginLeft: "3vw",
                        lineHeight: 1.3,
                        width: "Max(40vw, 20rem)",
                    }}
                    text="New England's Premier Construction Labor Partner"
                />
                <div className="hero-spacer" />
            </div>

            <ScrollDownButton />

            <div
                className="hero-links"
                style={{
                    position: "absolute",
                    color: "white",
                    right: 0,
                    // height: "100vh",
                    bottom: "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingInline: "3vw",
                    zIndex: 5,
                    opacity: 0.8,
                }}
            >
                <AnimatedComponent
                    yOffset={60}
                    duration={0.4}
                    // delay={!isLoading ? 3.9 : 100}
                    delay={0.4}
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
                    // delay={!isLoading ? 4.1 : 100}
                    delay={0.6}
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
                        // paddingBottom: "7rem",
                        gap: "20px", // Adds space between items in the flex container
                    }}
                >
                    <AnimatedText
                        stagger={0.005}
                        duration={0.4}
                        yOffset={50}
                        // delay={!isLoading ? 0 : 100}
                        delay={0}
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
                            // delay={!isLoading ? 0 : 100}
                            textStyle={{
                                fontSize: "1.8rem",
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
                            // delay={!isLoading ? 0 : 100}
                        >
                            <div
                                className="desktop"
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
                        className="hero-links-bottom"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            zIndex: 2,
                            color: "white",
                            fontSize: "5.6vw",
                            fontFamily: "Monument-Extended",
                        }}
                    >
                        <AnimatedComponent
                            // delay={!isLoading ? 0 : 100}
                            triggerMargin="0px"
                        >
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
                            // delay={!isLoading ? 0 : 100}
                            triggerMargin="0px"
                        >
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
                <Footer />
            </div>
        </div>
    );
}
