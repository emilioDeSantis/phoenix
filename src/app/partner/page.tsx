"use client";
import PageSubtitle from "@/Components/PageSubtitle";
import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";
import Button from "@/Components/Button";
import Spotlight from "@/Components/Spotlight";
import AnimatedText from "@/Components/AnimatedText";
import AnimatedComponent from "@/Components/AnimatedComponent";
import { useState } from "react";
import Form from "@/Components/Form";
import Image from "next/image";
import RowDivider, { dividerWidth } from "@/Components/RowDivider";
import Block from "@/Components/Block";
import Index from "@/Components/Index";
import ColumnDivider from "@/Components/ColumnDivider";
import Section from "@/Components/Section";
import SectionImage from "@/Components/SectionImage";
import Link from "next/link";

const Partner = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    position: "absolute",
                }}
            >
                <div
                    style={{
                        height: "100vh",
                        width: "100vw",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={"/partner.png"}
                        alt={"image"}
                        sizes="100vw"
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
                <PageTitle title="Partner With Phoenix" />
                <PageSubtitle title="Flexible Solutions for Construction Staffing" />
                <AnimatedText
                    yOffset={20}
                    stagger={0.002}
                    delay={0.2}
                    textStyle={{
                        fontSize: "1.1rem",
                        color: "white",
                        marginTop: "5rem",
                        fontWeight: 300,
                        marginInline: "10vw",
                        width: "32rem",
                        opacity: 0.7,
                    }}
                    text={`Delivering skilled, reliable labor for New England's construction needs. From site prep to clean-up, we manage it all, including foreman-led teams for larger projects.`}
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
                        Partner Today<span style={{ marginLeft: "1rem" }}>↘</span>
                    </Link>
                </AnimatedComponent>
            </div>
            <RowDivider />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <SectionImage src={"/honest-face.png"} />
                <ColumnDivider />
                <Index index={1} />
                <ColumnDivider />
                <Section
                    title={"Ready Workforce"}
                    bullets={[
                        `Able to deploy at a moment's notice`,
                        `Tailored to your project's size and duration`,
                    ]}
                />
            </div>
            <RowDivider />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Index index={2} />
                <ColumnDivider />
                <Section
                    title={"Streamlined Management"}
                    bullets={[
                        `Phoenix handles all payroll details`,
                        `Replace and add team members as your project evolves`,
                        `No hassle of termination processes`,
                    ]}
                />
                <ColumnDivider />
                <SectionImage src={"/blueprint1.png"} />
            </div>
            <RowDivider />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <SectionImage src={"/female-face.png"} />
                <ColumnDivider />
                <Index index={3} />
                <ColumnDivider />
                <Section
                    title={"Self-Sufficient Teams"}
                    bullets={[
                        `Workers intuitively manage their tasks`,
                        `Request foremen for larger projects`,
                    ]}
                />
            </div>
            <RowDivider />

            <div
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "100%",
                    paddingInline: "5vw",
                    marginTop: "5rem",
                    marginBottom: "5rem",
                }}
            >
                <div style={{ width: "5rem" }}></div>
                <div style={{ maxWidth: "35vw", marginBottom: "2vw" }}>
                    <AnimatedText
                        yOffset={20}
                        textStyle={{
                            fontSize: "1rem",
                            color: "white",
                            textTransform: "uppercase",
                            fontWeight: 300,
                            opacity: 0.8,
                        }}
                        text={`OSHA-Certified Safety Training`}
                    />
                    <AnimatedText
                        yOffset={20}
                        textStyle={{
                            color: "white",
                            fontFamily: "Monument-Extended",
                            fontSize: "1.6vw",
                            marginTop: "1.2rem",
                        }}
                        text={`All Phoenix laborers arrive OSHA-certified, ensuring top-notch safety standards on your site.`}
                    />
                </div>

                <div style={{ flexGrow: 1 }}></div>
                <AnimatedComponent
                    style={{
                        height: "40vw",
                        width: "40vw",
                        position: "relative",
                    }}
                >
                    <Image
                        fill
                        src={"/sparks2.png"}
                        alt={"image"}
                        sizes="40vw"
                        priority
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </AnimatedComponent>
            </div>

            <RowDivider />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <SectionImage src={"/worker3.png"} />
                <ColumnDivider />
                <div
                    style={{
                        width: `calc(2 * (100vw - ${dividerWidth})/3)`,
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        alignItems: "flex-start",
                        padding: "1.8rem",
                        paddingInline: "2.4rem",
                        gap: "1.2rem",
                    }}
                >
                    <AnimatedText
                        yOffset={20}
                        textStyle={{
                            fontSize: "2.4rem",
                            color: "white",
                            textTransform: "uppercase",
                            fontFamily: "Monument-Extended",
                            lineHeight: "1.2",
                            marginBottom: "1.6rem",
                        }}
                        text={`Is Phoenix the Right Fit for Your Site?`}
                    />
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                fontWeight: 300,
                                opacity: 0.8,
                                width: "6rem",
                                lineHeight: 0.8,
                            }}
                            text={`Work Type:`}
                        />
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                lineHeight: 0.8,
                                fontWeight: 700,
                            }}
                            text={`Site prep, clean-up, demolition, excavation and more.`}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                fontWeight: 300,
                                opacity: 0.8,
                                width: "6rem",
                                lineHeight: 0.8,
                            }}
                            text={`Location:`}
                        />
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                lineHeight: 0.8,
                                fontWeight: 700,
                            }}
                            text={`Boston area and New England.`}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                fontWeight: 300,
                                opacity: 0.8,
                                width: "6rem",
                                lineHeight: 0.8,
                            }}
                            text={`Team Size:`}
                        />
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                lineHeight: 0.8,
                                fontWeight: 700,
                            }}
                            text={`From 1 worker to 20+ workers and foreman.`}
                        />
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                fontWeight: 300,
                                opacity: 0.8,
                                width: "6rem",
                                lineHeight: 0.8,
                            }}
                            text={`Timeframe:`}
                        />
                        <AnimatedText
                            yOffset={20}
                            textStyle={{
                                fontSize: "1rem",
                                color: "white",
                                lineHeight: 0.8,
                                fontWeight: 700,
                            }}
                            text={`Flexible labor solutions tailored to the duration of your project.`}
                        />
                    </div>
                </div>
            </div>
            <RowDivider />

            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    width: "100%",
                    paddingInline: "5vw",
                    marginTop: "12rem",
                    marginBottom: "5rem",
                }}
            >
                <div style={{ width: "5rem" }}></div>
                <div style={{ maxWidth: "50vw", marginBottom: "2vw" }}>
                    <AnimatedText
                        yOffset={20}
                        textStyle={{
                            fontSize: "3.2rem",
                            color: "white",
                            textTransform: "uppercase",
                            fontFamily: "Monument-Extended",
                        }}
                        text={`Next Steps to Hire Phoenix`}
                    />
                    <div
                        style={{
                            display: "flex",
                            alignItems: "flex-end",
                            flexDirection: "column",
                        }}
                    >
                        <NumberedSection
                            index={1}
                            title="Meeting Scheduling"
                            text="We'll contact you to set up a meeting."
                        />
                        <NumberedSection
                            index={2}
                            title="Discuss Your Project"
                            text="In the meeting, we'll talk about project size, duration, and labor needs."
                        />
                        <NumberedSection
                            index={3}
                            title="Contract Finalization"
                            text="After the meeting, we'll prepare a contract tailored to your project."
                        />
                        <NumberedSection
                            index={4}
                            title="Quick Deployment"
                            text="Once the contract is signed, our team is rapidly deployed to your site."
                        />
                    </div>
                </div>

                <div style={{ flexGrow: 1 }}></div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "12rem",
                        marginLeft: "-20rem",
                        zIndex: -1,
                    }}
                >
                    <AnimatedComponent
                        style={{
                            height: "40vw",
                            width: "40vw",
                            position: "relative",
                        }}
                    >
                        <Image
                            fill
                            src={"/blueprint5.png"}
                            alt={"image"}
                            sizes="40vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </AnimatedComponent>{" "}
                    <AnimatedComponent
                        style={{
                            height: "40vw",
                            width: "40vw",
                            position: "relative",
                        }}
                    >
                        <Image
                            fill
                            src={"/bp4.png"}
                            alt={"image"}
                            sizes="40vw"
                            priority
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </AnimatedComponent>
                </div>
            </div>

<div id='form'/>
            <Form></Form>
        </div>
    );
};

export default Partner;

// add in a component called NumberedSection the has a number on the left and a title and text on the right
//add in type definitions

type NumberedSectionProps = {
    index: number;
    title: string;
    text: string;
};

const NumberedSection: React.FC<NumberedSectionProps> = ({
    index,
    title,
    text,
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "-12vw",
            }}
        >
            <Index index={index} />
            <Section
                title={title}
                bullets={[text]}
            />
        </div>
    );
};
