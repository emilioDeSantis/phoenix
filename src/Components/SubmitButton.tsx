import React, { useState, useEffect } from "react";

interface SubmitButtonProps {
    isLoading: boolean;
    onSubmit: () => void;
    wasSuccessful: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isLoading, onSubmit, wasSuccessful }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        // This effect runs when the isPopupVisible changes
        if (wasSuccessful) {
            setIsPopupVisible(true);
            // Set a timeout to automatically close the popup after 3 seconds (3000 ms)
            const timer = setTimeout(() => {
                setIsPopupVisible(false);
            }, 3000);
            // Clear the timeout if the component is unmounted or if the popup closes early
            return () => clearTimeout(timer);
        }
    }, [wasSuccessful]);

    const handleClick = () => {
        onSubmit(); // Call the onSubmit function provided by the parent component
        // setIsPopupVisible(true); // Show popup on submit
    };

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                disabled={isLoading}
                style={{
                    backgroundColor: isLoading ? "#D3D3D3" : "#2753C5",
                    color: "white",
                    padding: "0.8rem 2rem",
                    fontSize: "0.9rem",
                    borderRadius: "5px",
                    cursor: isLoading ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "Monument-Extended",
                }}
            >
                {isLoading ? "Loading..." : "Submit"}
            </button>
            {isPopupVisible && (
                <>
                    <div
                        style={{
                            position: "fixed",

                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            backdropFilter: "blur(5px)",
                            zIndex: 999, // Ensure it's behind the popup but above other elements
                        }}
                        onClick={() => {
                            setIsPopupVisible(false);
                        }}
                    ></div>
                    <div
                        style={{
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            backgroundColor: "#111111aa",
                            padding: "2rem",
                            paddingInline: "3rem",
                            borderRadius: "5px",
                            border: "0.5px solid #ffffff33",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            zIndex: 1000, // Ensure it's on top of the overlay
                            width: "auto", // Don't let the popup be wider than the screen
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                        }}
                    >
                        <h3
                            style={{
                                color: "#ffffff",
                                textAlign: "center",
                                fontFamily: "Monument-Extended",
                                fontSize: "1.6rem",
                            }}
                        >
                            Submission Successful
                        </h3>
                        <p
                            style={{
                                color: "#ffffffaa",
                                textAlign: "center",
                                fontWeight: 300,
                            }}
                        >
                            Your submission has been received, and we will be in
                            touch shortly.
                        </p>
                    </div>
                </>
            )}
        </>
    );
};

export default SubmitButton;
