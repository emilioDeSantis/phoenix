"use client";
import PageSubtitle from "@/Components/PageSubtitle";
import Button from "@/Components/Button";
import Spotlight from "@/Components/Spotlight";
import AnimatedText from "@/Components/AnimatedText";
import AnimatedComponent from "@/Components/AnimatedComponent";
import React, { Children, useRef, useState } from "react";
import Form from "@/Components/Form";
import Image from "next/image";
import RowDivider, { dividerWidth } from "@/Components/RowDivider";
import Block from "@/Components/Block";
import Index from "@/Components/Index";
import ColumnDivider from "@/Components/ColumnDivider";
import Section from "@/Components/Section";
import SectionImage from "@/Components/SectionImage";
import Link from "next/link";
import NumberedSection from "@/Components/NumberedSection";
import PageTitle from "./PageTitle";
import Footer from "./Footer";

type InternalPageProps = {
    hero: string;
    title: string;
    subtitle: string;
    text: string;
    buttonText: string;
    children: React.ReactNode;
};

const InternalPage: React.FC<InternalPageProps> = ({
    hero,
    title,
    subtitle,
    text,
    buttonText,
    children,
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    height: "Min(100vh, 68vw)",
                    width: "100vw",
                    position: "absolute",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={hero}
                        alt={"image"}
                        sizes="50vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "2rem",
                }}
            >
                <PageTitle title={title} />
                <PageSubtitle title={subtitle} />
                <AnimatedText
                    yOffset={20}
                    stagger={0.002}
                    delay={0.2}
                    textStyle={{
                        fontSize: "1.1rem",
                        color: "white",
                        marginTop: "5rem",
                        fontWeight: 300,
                        paddingLeft: "10vw",
                        paddingRight: "5vw",
                        width: "Min(48rem,100%)",
                        opacity: 0.7,
                    }}
                    text={text}
                />
                <AnimatedComponent
                    delay={0.4}
                    triggerMargin="0px"
                    style={{
                        display: "flex",
                        paddingInline: "10vw",
                        marginTop: "1rem",
                    }}
                >
                    <Link
                        href={"#form"}
                        scroll={true}
                        style={{
                            backgroundColor: "#08226533",
                            color: "white",
                            border: "0.5px solid #2753C5",
                            padding: "0.8rem 2rem",
                            fontSize: "0.9rem",
                            borderRadius: "5px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "Monument-Extended",
                        }}
                    >
                        {buttonText}
                        <span style={{ marginLeft: "1rem" }}>↘</span>
                    </Link>
                </AnimatedComponent>
            </div>

            {children}
            <Footer/>
        </div>
    );
};

export default InternalPage;
