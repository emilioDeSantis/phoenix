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
            className="flex-direction"
                style={{
                    width: "100vw",
                    height: "Calc(100vh - 3rem)",
                    display: "flex",
                    paddingTop: "3rem",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        minHeight: "60vw",
                        width: "100%",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={"/50prospect.png"}
                        alt={"image"}
                        sizes="100vw"
                        priority
                        style={{
                            objectFit: "cover",
                            filter: "saturate(150%) brightness(40%)",
                        }}
                    />
                    <h2
                        className="side-padding"
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            width: "100%",
                            color: "white",
                            fontSize: "1.9rem",
                            fontWeight: 600,
                            lineHeight: 1.3,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        Need Skilled Laborers for Your Construction Project?
                    </h2>
                </div>
                <div
                    className="side-padding"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        maxHeight: '30rem',
                        justifyContent: "space-between",
                        paddingBottom: "6rem",
                        // paddingTop: "3rem",
                    }}
                >
                    <div />
                    <h1
                        style={{
                            fontSize: "2.6rem",
                            fontWeight: 800,
                            textTransform: "uppercase",
                            lineHeight: 1.2,
                        }}
                    >
                        Hire a Phoenix Team
                    </h1>
                    <p
                        style={{
                            fontWeight: 500,
                            lineHeight: 1.2,
                            opacity: 0.6,
                        }}
                    >
                        {`Custom-Tailored for Your Site's Specific Needs.`}
                        <br></br>
                        <br></br>
                        {`Our experienced workers are on standby, ready to be deployed to your project at a moment's notice.`}
                    </p>
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
                        }}
                    >
                        Deploy a Team Now →
                    </Link>
                </div>
            </section>

            <div
                style={{
                    aspectRatio: "3/2",
                    maxWidth: "30rem",
                    position: "relative",
                }}
            >
                <Image
                    fill
                    src={"/team1.png"}
                    alt={"image"}
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                        filter: "saturate(120%)",
                    }}
                />
            </div>
            <h3
                className="side-padding"
                style={{
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: 400,
                    opacity: 0.7,
                    marginTop: "3rem",
                }}
            >
                Contract Staffing
            </h3>

            <p
                className="side-padding"
                style={{
                    marginTop: "1rem",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    opacity: 0.7,
                    lineHeight: 1.2,
                }}
            >
                {`At Phoenix Construction Resources, we understand that your project needs can change at a moment's notice. That's why we offer custom-assembled labor teams, ready to be deployed immediately to your site for the entire duration of your project.`}
            </p>
            <h2
                className="side-padding"
                style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    marginTop: "4rem",
                }}
            >
                {`here's how it works`}
            </h2>
            <div
                className="flex-direction side-padding"
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
                        paddingInline: "1rem",
                        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
                        paddingBlock: "2rem",
                        borderRadius: "1rem",
                        background: "white",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{
                            height: "4rem",
                            width: "4rem",
                            opacity: 0.8,
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                        />
                    </svg>

                    <h3
                        style={{
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            fontWeight: 400,
                            opacity: 0.7,
                            marginTop: "2rem",
                        }}
                    >
                        Custom Team Assembly
                    </h3>

                    <p
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.4rem",
                            fontWeight: 500,
                            opacity: 0.7,
                            lineHeight: 1.2,
                        }}
                    >
                        {`Based on your project's specific time and size requirements, we assemble a team perfectly aligned with your needs. Whether it’s a small group or a large crew, we have the flexibility to scale and adapt.`}
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingInline: "1rem",
                        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
                        paddingBlock: "2rem",
                        borderRadius: "1rem",
                        background: "white",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{
                            height: "4rem",
                            width: "4rem",
                            opacity: 0.8,
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                    </svg>

                    <h3
                        style={{
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            fontWeight: 400,
                            opacity: 0.7,
                            marginTop: "2rem",
                        }}
                    >
                        Immediate Deployment
                    </h3>

                    <p
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.4rem",
                            fontWeight: 500,
                            opacity: 0.7,
                            lineHeight: 1.2,
                        }}
                    >
                        {`Your tailored team can be on your site quickly, reducing downtime and ensuring that your project continues to move forward without interruption.`}
                    </p>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingInline: "1rem",
                        boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
                        paddingBlock: "2rem",
                        borderRadius: "1rem",
                        background: "white",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                        className="w-6 h-6"
                        style={{
                            height: "4rem",
                            width: "4rem",
                            opacity: 0.8,
                        }}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                        />
                    </svg>

                    <h3
                        style={{
                            textTransform: "uppercase",
                            fontSize: "1rem",
                            fontWeight: 400,
                            opacity: 0.7,
                            marginTop: "2rem",
                        }}
                    >
                        Experienced and Self-Sufficient Workers
                    </h3>

                    <p
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.4rem",
                            fontWeight: 500,
                            opacity: 0.7,
                            lineHeight: 1.2,
                        }}
                    >
                        {`Each member of your Phoenix team comes with the experience and safety training needed to hit the ground running. They are prepared to work with as much or as little supervision as you deem necessary, integrating seamlessly into your existing operations.`}
                    </p>
                </div>
            </div>

            <div
                style={{
                    minHeight: "60vw",
                    width: "100%",
                    position: "relative",
                    marginTop: "4rem",
                }}
            >
                <Image
                    fill
                    src={"/team2.png"}
                    alt={"image"}
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                        filter: "saturate(120%)",
                    }}
                />
            </div>
            <h2
                className="side-padding"
                style={{
                    fontSize: "2rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    lineHeight: 1.2,
                    marginTop: "3rem",
                }}
            >
                {`Why choose a phoenix team`}
            </h2>

            <p
                className="side-padding"
                style={{
                    marginTop: "1.6rem",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    opacity: 0.7,
                    lineHeight: 1.2,
                }}
            >
                {`We Handle all logistics related to payment and personnel management.`}
            </p>
            <p
                className="side-padding"
                style={{
                    marginTop: "1rem",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    opacity: 0.7,
                    lineHeight: 1.2,
                }}
            >
                {`You have the freedom to modify your workforce quickly and easily.`}
            </p>
            <div
                className="side-padding"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    // boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.2)",
                    paddingBlock: "1.6rem",
                    // borderRadius: "1rem",
                    background: "#2b6288",
                    marginTop: "3rem",
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
                        }}
                    >
                        {`All Phoenix employees arive with proper safety training and OSHA certification.`}
                    </p>
                </div>
            </div>
            <h3
                className="side-padding"
                style={{
                    textTransform: "uppercase",
                    fontSize: "1rem",
                    fontWeight: 400,
                    opacity: 0.7,
                    marginTop: "4rem",
                }}
            >
                General Labor Services
            </h3>

            <h4
                className="side-padding"
                style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    marginTop: "0.6rem",
                    lineHeight: 1.2,
                }}
            >
                For Sites Requiring Skilled Carpentry and General Labor
            </h4>

            <p
                className="side-padding"
                style={{
                    marginTop: "2rem",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                    opacity: 0.7,
                    lineHeight: 1.2,
                }}
            >
                {`Phoenix employees are experienced in a wide range of essential construction tasks. Whether your site needs skilled carpentry or general labor assistance, we have the expertise to support your project's success.`}
            </p>


            <div
                style={{
                    minHeight: "70vw",
                    width: "100%",
                    position: "relative",
                    marginTop: "3rem",
                }}
            >
                <Image
                    fill
                    src={"/sweeper.png"}
                    alt={"image"}
                    sizes="100vw"
                    priority
                    style={{
                        objectFit: "cover",
                        filter: "saturate(120%)",
                    }}
                />
            </div>

            <h4
                className="side-padding"
                style={{
                    textTransform: "uppercase",
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    marginTop: "3rem",
                    lineHeight: 1.2,
                    opacity: 0.8,
                }}
            >
                Our teams are proficient in
            </h4>
            <ul
                className="side-padding"
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
                        gap : "0.6rem",
                    }}
                >
                    <div style={{
                        height: "0.4rem",
                        width: "0.4rem",
                        borderRadius: "100%",
                        background: "#000000",
                    }}/>Carpentry
                </li>
                <li
                    style={{
                        // textTransform: "uppercase",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        display: "flex",
                        alignItems: "center",
                        gap : "0.6rem",
                    }}
                >
                    <div style={{
                        height: "0.4rem",
                        width: "0.4rem",
                        borderRadius: "100%",
                        background: "#000000",
                    }}/>
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
                        gap : "0.6rem",
                    }}
                >
                    <div style={{
                        height: "0.4rem",
                        width: "0.4rem",
                        borderRadius: "100%",
                        background: "#000000",
                    }}/>
                    Digging
                </li>
                <li
                    style={{
                        // textTransform: "uppercase",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        lineHeight: 1.2,
                        display: "flex",
                        alignItems: "center",
                        gap : "0.6rem",
                    }}
                >
                    <div style={{
                        height: "0.4rem",
                        width: "0.4rem",
                        borderRadius: "100%",
                        background: "#000000",
                    }}/>
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
                        gap : "0.6rem",
                    }}
                >
                    <div style={{
                        height: "0.4rem",
                        width: "0.4rem",
                        borderRadius: "100%",
                        background: "#000000",
                    }}/>
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
                        gap : "0.6rem",
                    }}
                >
                    <div style={{
                        height: "0.4rem",
                        width: "0.4rem",
                        borderRadius: "100%",
                        background: "#000000",
                    }}/>
                    Material Handling
                </li>
            </ul>



            <p
                className="side-padding"
                style={{
                    marginTop: "3rem",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    opacity: 0.7,
                    lineHeight: 1.2,
                }}
            >
                {`With Phoenix, your construction needs are covered by professionals who bring both skill and dedication to every task.`}
            </p>

            <Link
            className="side-padding"
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
                Learn More About Our Services →
            </Link>

            <div style={{ height: "10rem" }} />
        </main>
    );
}
