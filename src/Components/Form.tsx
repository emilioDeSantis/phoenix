"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

//,make it so that if theres an apply inout set to true its has different text

type FormProps = {
    apply?: boolean;
};

const Form: React.FC<FormProps> = ({ apply }) => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true); // Set loading state

        // try {
        //     const jotFormData = {
        //         email: email,
        //     };

        //     const response = await fetch("/api/jotform", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(jotFormData),
        //     });

        //     if (!response.ok) {
        //         throw new Error(`Error: ${response.statusText}`);
        //     }

        //     const data = await response.json();
        //     console.log("Form submitted:", data);
        //     // Reset form fields
        //     setName("");
        //     setCompany("");
        //     setEmail("");
        //     setPhone("");
        //     setMessage("");
        //     // Show confirmation here or in the SubmitButton component
        //     // after successful submission:
        //     setIsLoading(false); // Reset loading state
        //     // Show success popup or handle success state
        // } catch (error) {
        //     console.error("Error submitting form:", error);
        //     setIsLoading(false); // Reset loading state on error
        //     // Handle error state
        // }
    };

    return (
        <div
            style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                marginBottom: "10rem",
                marginTop: "5rem",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "36rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <h2
                    style={{
                        width: "100%",
                        fontFamily: "Monument-Extended",
                        fontSize: "2.6rem",
                        color: "white",
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                    }}
                >
                    {apply ? `Start Your Application Process` : `Schedule a Consultation`}
                </h2>
                <p
                    style={{
                        fontSize: "0.9rem",
                        color: "fff",
                        opacity: 0.8,
                        width: "100%",
                        fontWeight: 300,
                        marginBottom: "5rem",
                    }}
                >
                    {apply? `Complete the form below to schedule your initial meeting. We’re eager to meet you and explore the opportunities at Phoenix.` : `Complete the form below to initiate contact with our team. We're ready to discuss your construction labor needs.`}
                </p>
                <InputHStack>
                    <Input
                        label="Name"
                        type="text"
                        // placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {!apply && <Input
                        label="Company"
                        type="text"
                        // placeholder="Enter your company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />}
                </InputHStack>
                <InputHStack>
                    <Input
                        label="Email"
                        type="email"
                        // placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Phone"
                        type="tel"
                        // placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </InputHStack>
                <div style={{ marginBottom: "1rem", width: "100%" }}>
                    <label
                        style={{
                            display: "block",
                            marginBottom: "0.5rem",
                            color: "white",
                            fontSize: "0.9rem",
                            fontFamily: "Monument-Extended",
                        }}
                    >
                        Message
                    </label>
                    <textarea
                        // placeholder="Message"
                        className="inputField"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                            height: "8rem", // This sets the height of the textarea
                        }}
                    />
                </div>
                <SubmitButton isLoading={isLoading} onSubmit={handleSubmit} />
            </form>
        </div>
    );
};

interface InputProps {
    label: string;
    type: string;
    placeholder?: string; // Making placeholder optional
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
    label,
    type,
    placeholder = "",
    value,
    onChange,
}) => {
    return (
        <div style={{ marginBottom: "1rem", width: "100%" }}>
            <label
                style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    color: "white",
                    fontSize: "0.9rem",
                    fontFamily: "Monument-Extended",
                }}
            >
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="inputField"
            />
        </div>
    );
};

interface InputHStackProps {
    children: React.ReactNode;
}

const InputHStack: React.FC<InputHStackProps> = ({ children }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
            }}
        >
            {children}
        </div>
    );
};

export default Form;
