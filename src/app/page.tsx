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

import Image from "next/image";
import Link from "next/link";

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
// import Image from "nex

export default function Home() {
    return (
        <main>
            <section
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    paddingTop: "3rem",
                    alignItems: "center",
                    flexDirection: "column",
                    borderBottom: "1px solid #ddd",
                    position: "relative",
                }}
            >
                <div
                    style={{
                        minHeight: "max(12vw, 8rem)",
                        width: "100%",
                        position: "relative",
                        background: "black",
                    }}
                >
                    <Image
                        fill
                        src={"/banner.png"}
                        alt={"image"}
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                            opacity: 0.6,
                        }}
                    />
                    <div
                        className="side-padding"
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            width: "100%",
                            color: "white",
                            lineHeight: 1.3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <h3
                            style={{
                                fontSize: "max(1.8vw, 1.2rem)",
                                fontWeight: 500,
                            }}
                        >
                            {`Massachusetts’ Leading`}
                        </h3>
                        <h2
                            style={{
                                fontSize: "max(3.6vw, 1.8rem)",
                                textTransform: "uppercase",
                                fontWeight: 700,
                                lineHeight: 1,
                            }}
                        >
                            {`Construction Staffing Service`}
                        </h2>
                    </div>
                </div>
                <div
                    className="side-padding flex-direction"
                    style={{
                        display: "flex",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,

                            justifyContent: "center",
                            paddingBlock: "1rem",
                        }}
                    >
                        <h2
                            style={{
                                textTransform: "uppercase",
                                fontSize: "max(1.4vw,1rem)",
                                fontWeight: 600,
                            }}
                        >
                            Your Solution for
                        </h2>
                        <h1
                            style={{
                                fontSize: "max(6.4vw, 2.8rem)",
                                fontWeight: 800,
                                lineHeight: 1,
                                marginTop: "1.6vw",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Skilled Labor <br></br>and Carpentry
                        </h1>
                        <p
                            style={{
                                marginTop: "4vw",
                                opacity: 0.7,
                                fontWeight: 500,
                                lineHeight: 1.6,
                            }}
                        >{`• Custom-Tailored Teams`}</p>
                        <p
                            style={{
                                opacity: 0.7,
                                fontWeight: 500,
                                lineHeight: 1.6,
                            }}
                        >{`• On standby, ready to be deployed`}</p>
                        <Link
                            href="/contact"
                            style={{
                                fontSize: "1.5rem",
                                fontWeight: 500,
                                color: "#ffffff",
                                cursor: "pointer",
                                paddingBlock: "0.6rem",
                                background: "#FF5D39",
                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
                                display: "flex",
                                justifyContent: "center",
                                filter: "saturate(120%)",
                                maxWidth: "24rem",
                                marginTop: "5vw",
                                zIndex: 2,
                            }}
                        >
                            Deploy a Team Now →
                        </Link>
                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                // height: "100%",
                                // minWidth: "28vw",
                                // position: "relative",
                                height: "100%",
                                aspectRatio: "0.63",
                                position: "relative",
                            }}
                        >
                            <Image
                                fill
                                src={"/hero-worker.png"}
                                alt={"image"}
                                sizes="30vw"
                                priority
                                style={{
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div
                className="scroll-button"
                    style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link
                        href="#scroll"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            padding: "1rem",
                            opacity: 0.5,
                        }}
                    >
                        learn more <br></br>↓
                    </Link>
                </div>
            </section>
            <div
                id="scroll"
                className="side-padding"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    paddingBlock: "3rem",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <h3
                    style={{
                        // textTransform: "uppercase",
                        fontSize: "2.4rem",
                        fontWeight: 600,
                    }}
                >
                    Contract Staffing
                </h3>
                <p
                    style={{
                        fontWeight: 400,
                        marginTop: "0.6rem",
                        fontSize: "1.2rem",
                        opacity: 0.7,
                        maxWidth: "42rem",
                        lineHeight: 1.2,
                    }}
                >
                    {`We offer a unique contract staffing service that provides experienced labor teams ready to be deployed to your project site.`}
                </p>

                <div
                    style={{
                        borderBottom: "1px solid #ddd",
                        marginTop: "3rem",
                    }}
                />

                <h3
                    style={{
                        fontSize: "4.4rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        marginTop: "2rem",
                    }}
                >
                    {`here's how it works`}
                </h3>
                <p
                    style={{
                        fontWeight: 400,
                        marginTop: "1.6rem",
                        fontSize: "1.6rem",
                        opacity: 0.8,
                        maxWidth: "56rem",
                        lineHeight: 1.2,
                    }}
                >
                    {`Phoenix employs skilled laborers and carpenters who can be hired for the duration of your project. While they work under your direction at the job site, they remain employees of Phoenix Construction.`}
                    <br></br>
                    <br></br>
                    {`This means:`}
                </p>

                <div
                    className="flex-direction"
                    style={{
                        display: "flex",
                        width: "100%",
                        marginTop: "2rem",
                        gap: "2rem",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <h4
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 500,
                            }}
                        >
                            Immediate Expertise
                        </h4>

                        <p
                            style={{
                                marginTop: "1rem",
                                fontWeight: 400,
                                opacity: 0.6,
                                lineHeight: 1.2,
                            }}
                        >
                            {`Our workers are experienced and ready to start, eliminating the need for an onboarding process.`}
                        </p>
                    </div>
                    <div className="divider" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <h4
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 500,
                            }}
                        >
                            Flexibility
                        </h4>

                        <p
                            style={{
                                marginTop: "1rem",
                                fontWeight: 400,
                                opacity: 0.6,
                                lineHeight: 1.2,
                            }}
                        >
                            {`You can easily adjust the size of your team based on your project needs. Whether you need workers temporarily or for the entire duration of your project, we have you covered.`}
                        </p>
                    </div>
                    <div className="divider" />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <h4
                            style={{
                                fontSize: "1.8rem",
                                fontWeight: 500,
                            }}
                        >
                            No Long-term Commitment
                        </h4>

                        <p
                            style={{
                                marginTop: "1rem",
                                fontWeight: 400,
                                opacity: 0.6,
                                lineHeight: 1.2,
                            }}
                        >
                            {`Hire teams for the specific duration of your project without worrying about long-term employment contracts.`}
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        borderBottom: "1px solid #ddd",
                        marginTop: "3rem",
                    }}
                />

                <h3
                    style={{
                        fontSize: "2.4rem",
                        fontWeight: 800,
                        textTransform: "uppercase",
                        lineHeight: 1.2,
                        marginTop: "2rem",
                    }}
                >
                    {`Who is this for?`}
                </h3>
                <p
                    style={{
                        fontWeight: 400,
                        marginTop: "1.6rem",
                        fontSize: "1.6rem",
                        opacity: 0.8,
                        maxWidth: "56rem",
                        lineHeight: 1.2,
                    }}
                >
                    {`Our services are tailored for general contractors working on commercial projects, ranging from small developments to skyscrapers. Whether you need a compact team or a larger crew, Phoenix Construction is ready to support your project’s success.`}
                </p>
            </div>
            <div
                className="flex-direction"
                style={{
                    display: "flex",
                    width: "100%",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <div
                    style={{
                        aspectRatio: "3/2",
                        minWidth: "50vw",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={"/team.png"}
                        alt={"image"}
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                            filter: "saturate(120%)",
                        }}
                    />
                </div>
                <div
                    className="side-padding"
                    style={{
                        paddingBlock: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <h3
                        style={{
                            fontSize: "3rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            lineHeight: 1.2,
                        }}
                    >
                        {`Why choose a phoenix team`}
                    </h3>

                    <p
                        style={{
                            marginTop: "1.6rem",
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            opacity: 0.7,
                            lineHeight: 1.2,
                        }}
                    >
                        {`• We Handle all logistics related to payment and personnel management.`}
                    </p>
                    <p
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            opacity: 0.7,
                            lineHeight: 1.2,
                        }}
                    >
                        {`• You have the freedom to modify your workforce quickly and easily.`}
                    </p>
                </div>
            </div>
            <div
                className="side-padding"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
                    paddingBlock: "1.6rem",
                    // borderRadius: "1rem",
                    background: "#2b6288",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingInline: "1rem",
                        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
                        paddingBottom: "2rem",
                        paddingTop: "1rem",
                        borderRadius: "1rem",
                        background: "#ffffff11",
                        maxWidth: "30rem",
                        alignItems: "center",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="white"
                        className="w-6 h-6"
                        style={{
                            height: "8rem",
                            width: "8rem",
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                    </svg>

                    <h3
                        style={{
                            // textTransform: "uppercase",
                            fontSize: "1.8rem",
                            fontWeight: 500,
                            marginTop: "1.6rem",
                            color: "white",
                        }}
                    >
                        OSHA Certified
                    </h3>

                    <p
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            opacity: 0.8,
                            lineHeight: 1.2,
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {`All Phoenix employees arive with proper safety training and OSHA certification.`}
                    </p>
                </div>
            </div>

            <div
                className="flex-direction"
                style={{
                    display: "flex",
                    width: "100%",
                    borderBottom: "1px solid #ddd",
                }}
            >
                <div
                    className="side-padding"
                    style={{
                        paddingBlock: "2rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        flexGrow: 1,
                    }}
                >
                    <h4
                        style={{
                            fontSize: "3rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            lineHeight: 1.2,
                        }}
                    >
                        Our Services
                    </h4>
                    <ul
                        style={{
                            display: "flex",
                            marginTop: "1rem",
                            gap: "0.6rem",
                            flexDirection: "column",
                        }}
                    >
                        <li
                            style={{
                                // textTransform: "uppercase",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "100%",
                                    background: "#000000",
                                }}
                            />
                            Carpentry
                        </li>
                        <li
                            style={{
                                // textTransform: "uppercase",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "100%",
                                    background: "#000000",
                                }}
                            />
                            General Labor
                        </li>
                        <li
                            style={{
                                // textTransform: "uppercase",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "100%",
                                    background: "#000000",
                                }}
                            />
                            Punch List
                        </li>
                        <li
                            style={{
                                // textTransform: "uppercase",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "100%",
                                    background: "#000000",
                                }}
                            />
                            Site Preparation
                        </li>
                        <li
                            style={{
                                // textTransform: "uppercase",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "100%",
                                    background: "#000000",
                                }}
                            />
                            Waste Disposal
                        </li>
                        <li
                            style={{
                                // textTransform: "uppercase",
                                fontSize: "1.4rem",
                                fontWeight: 700,
                                lineHeight: 1.2,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.6rem",
                            }}
                        >
                            <div
                                style={{
                                    height: "0.4rem",
                                    width: "0.4rem",
                                    borderRadius: "100%",
                                    background: "#000000",
                                }}
                            />
                            Material Handling
                        </li>
                    </ul>

                    <Link
                        href="/contact"
                        style={{
                            fontSize: "1.2rem",
                            fontWeight: 500,
                            color: "#FF5D39",
                            cursor: "pointer",
                            paddingBlock: "0.6rem",
                            display: "flex",
                            marginTop: "1rem",
                        }}
                    >
                        Learn More →
                    </Link>
                </div>
                <div
                    style={{
                        aspectRatio: "3/2",
                        minWidth: "50vw",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={"/sweeper2.png"}
                        alt={"image"}
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                            filter: "saturate(120%)",
                        }}
                    />
                </div>
            </div>
        </main>
    );
}
