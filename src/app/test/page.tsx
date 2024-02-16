"use client";
import { useEffect, useState } from "react";

export default function Home() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const videoElement = document.querySelector("#initial-video") as HTMLVideoElement | null;
        const loopVideoElement = document.querySelector("#loop-video") as HTMLVideoElement | null;

        if (videoElement) {
            const playPromise = videoElement.play();

            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        setLoading(false);
                    })
                    .catch((error: any) => {
                        console.error("Video playback was prevented:", error);
                        setLoading(false);
                    });
            }

            videoElement.addEventListener("playing", () => {
                setLoading(false);
            });

            videoElement.addEventListener("ended", () => {
                if (loopVideoElement) {
                    videoElement.style.display = "none"; // Hide the initial video
                    loopVideoElement.style.display = "block"; // Show the loop video
                    loopVideoElement.play().catch((error: any) => {
                        console.error("Error trying to play the loop video:", error);
                    });
                }
            });
        }
    }, []);

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                overflowY: "hidden",
            }}
        >
            {isLoading && <div>Loading...</div>}
            <video
                id="initial-video"
                preload="auto"
                playsInline
                muted
                className="hero-video"
            >
                <source src={"/start.mp4"} type="video/mp4" />
            </video>
            <video
                id="loop-video"
                preload="auto"
                playsInline
                muted
                loop
                className="hero-video"
            >
                <source src={"/loop.mp4"} type="video/mp4" />
            </video>
        </div>
    );
}
