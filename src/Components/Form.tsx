"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

// Utility function for email validation
const validateEmail = (email: string) => {
    if (!email) return true;
    const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,4}\.[0-9]{1,4}\.[0-9]{1,4}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

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
    const [error, setError] = useState("");
    const [wasSuccessful, setwasSuccessful] = useState(false);

    const handleSubmit = async (e?: React.FormEvent) => {
        e?.preventDefault(); // Only call if e is not undefined
        setIsLoading(true); // Set loading state
        setError(""); // Reset error state
        setwasSuccessful(false); // Reset submission message

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }

        try {
            const jotFormData = {
                email: email,
                name: name,
                company: company,
                phone: phone,
                message: message,
                apply: apply,
            };

            const response = await fetch("/api/jotform", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jotFormData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            // Handle successful form submission
            const data = await response.json();
            console.log("Form submitted:", data);
            setwasSuccessful(true);
            // Reset form fields
            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setMessage("");
        } catch (error) {
            console.error("Error submitting form:", error);
            setError(
                "Failed to submit form. Please try again or give us a call."
            );
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <div
            style={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                paddingTop: "5rem",
                paddingInline: "5vw",
                minHeight: "100vh",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: "Min(36rem, 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <h2
                    style={{
                        width: "100%",
                        fontSize: "2rem",
                        color: "black",
                        lineHeight: "1.2",
                        textTransform: "uppercase",
                        fontWeight: 700,
                    }}
                >
                    {apply
                        ? `Start Your Application Process`
                        : `Deploy a Skilled Labor Team`}
                </h2>
                <p
                    style={{
                        fontSize: "1rem",
                        color: "fff",
                        opacity: 0.7,
                        width: "100%",
                        fontWeight: 400,
                        marginBottom: "3rem",
                    }}
                >
                    {apply
                        ? `Complete the form below to schedule your initial meeting. We’re eager to meet you and explore the opportunities at Phoenix.`
                        : `Fill out the form below. We will contact you to discuss your needs and get a taylored team of laborers or carpenters to your site ASAP.`}
                </p>
                <InputHStack>
                    <Input
                        label="Name"
                        type="text"
                        // placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {!apply && (
                        <Input
                            label="Company"
                            type="text"
                            // placeholder="Enter your company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    )}
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
                            color: "black",
                            fontSize: "0.9rem",
                            fontWeight: 500,
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
                <SubmitButton
                    isLoading={isLoading}
                    onSubmit={handleSubmit}
                    wasSuccessful={wasSuccessful}
                />
                {error && <div style={{ color: "red" }}>{error}</div>}
                {wasSuccessful && (
                    <div style={{ color: "green" }}>
                        Your submission has been received, and we will be in
                        touch shortly.
                    </div>
                )}
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
                    color: "black",
                    fontSize: "0.9rem",
                    fontWeight: 500,
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
