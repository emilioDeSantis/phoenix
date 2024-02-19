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
import TextSection from "@/Components/TextSection";
import InternalPage from "@/Components/InternalPage";
import NumberedSection from "@/Components/NumberedSection";
import { Metadata } from "next";



export const metadata: Metadata = {
    title: 'Join Our Team - Apply Now | Phoenix Construction Resources',
    description: `Seeking a rewarding career in construction? Apply to join Phoenix Construction Resources and be part of a team dedicated to excellence in construction labor across Massachusetts.`,
};

const Apply = () => {



    return (
        <InternalPage
            hero={"/apply2.png"}
            title="Join the Phoenix Team"
            subtitle="Build Your Career with Us"
            text={`Join a team that values hard work, safety, and skill. At Phoenix, we offer a dynamic work environment with opportunities for growth in New England's construction industry.`}
            buttonText="Apply Today"
        >
            <RowDivider />
            <div className="section-container">
                <SectionImage src={"/blueprint2.png"} />
                <ColumnDivider mobile />
                <Index index={1} />
                <ColumnDivider />
                <Section
                    title={"Steady Employment"}
                    bullets={[
                        `Start work immediately`,
                        `Consistent project availability`,
                        `Reliable work schedules`,]}
                />
            </div>
            <RowDivider />
            <div className="section-container"
            >
                <Index index={2} />
                <ColumnDivider />
                <Section
                    title={"Optional Overtime"}
                    bullets={[`Additional income potential`]}
                />
                <ColumnDivider />
                <SectionImage src={"/worker6.png"} />
            </div>
            <RowDivider />
            <div className="section-container">
            <SectionImage src={"/bp6.png"} />
                <ColumnDivider />
                <Index index={3} />
                <ColumnDivider />
                <Section
                    title={"Dynamic Work Environment"}
                    bullets={[
                        `Work with a skilled, diverse team`,
                        `Engage in varied construction tasks`,
                        `Experience a stimulating job setting`,
                    ]}
                />
            </div>
            <RowDivider />
            <div
                className="section-container"
                style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    // flexDirection: "row",
                    width: "100%",
                    paddingInline: "5vw",
                    marginTop: "5rem",
                    marginBottom: "5rem",
                }}
            >
                <div style={{ width: "5rem" }}></div>
                <div className="safety">
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
                            fontSize: "Min(1.6rem, 5vw)",
                            marginTop: "1.2rem",
                        }}
                        text={`Phoenix arranges and covers the OSHA safety training course, certifying you for construction work.`}
                    />
                </div>

                <div style={{ flexGrow: 1, height: "2rem" }}></div>
                <div className="safety-image">
                    <AnimatedComponent
                        style={{
                            height: "100%",
                            width: "1005",
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
            </div>
            <RowDivider />
            <div className="section-container">
            <SectionImage src={"/worker7.png"} />
                <ColumnDivider />
                <Section
                    title={"Starting Salary"}
                    bullets={[
                        `Competitive pay starting in the mid-$20s per hour`,
                        `Opportunities for overtime and raises`,
                        `Additional increase for those advancing to foreman roles`,
                    ]}
                />
                <ColumnDivider />
                <Section
                    title={"Experience Needed"}
                    bullets={[
                        `No specific prior experience required`,
                        `Must be capable of performing manual labor`,
                        `Intelligence and a willingness to learn are key`,
                    ]}
                />
            </div>
            <RowDivider />
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    width: "100%",
                    marginTop: "5rem",
                    marginBottom: "5rem",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: "Min(70rem,100%)",
                        paddingInline: "5vw",
                    }}
                >
                    <AnimatedText
                        yOffset={20}
                        textStyle={{
                            fontSize: "Min(8vw, 3.2rem)",
                            color: "white",
                            textTransform: "uppercase",
                            fontFamily: "Monument-Extended",
                        }}
                        text={`Next Steps to Apply at Phoenix`}
                    />
                    <NumberedSection
                        index={1}
                        title="Schedule a Meeting"
                        text="Reach out to set up your initial meeting with us."
                    />
                    <NumberedSection
                        index={2}
                        title="Attend an Interview"
                        text="Come in for a face-to-face interview to discuss your skills and fit."
                    />
                    <NumberedSection
                        index={3}
                        title="Quick Site Placement"
                        text="Typically, Phoenix gets you working on a site within a week of your interview."
                    />
                </div>
            </div>
            <div id="form" />
            <Form></Form>
        </InternalPage>
    );


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
                        src={"/apply.png"}
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
                <PageTitle title="Join the Phoenix Team" />
                <PageSubtitle title="Build Your Career with Us" />
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
                    text={`Join a team that values hard work, safety, and skill. At Phoenix, we offer a dynamic work environment with opportunities for growth in New England's construction industry.`}
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
                        Apply Today<span style={{ marginLeft: "1rem" }}>↘</span>
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
                <SectionImage src={"/blueprint2.png"} />
                <ColumnDivider />
                <Index index={1} />
                <ColumnDivider />
                <Section
                    title={"Steady Employment"}
                    bullets={[
                        `Start work immediately`,
                        `Consistent project availability`,
                        `Reliable work schedules`,
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
                    title={"Optional Overtime"}
                    bullets={[`Additional income potential`]}
                />
                <ColumnDivider />
                <SectionImage src={"/worker6.png"} />
            </div>
            <RowDivider />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <SectionImage src={"/bp6.png"} />
                <ColumnDivider />
                <Index index={3} />
                <ColumnDivider />
                <Section
                    title={"Dynamic Work Environment"}
                    bullets={[
                        `Work with a skilled, diverse team`,
                        `Engage in varied construction tasks`,
                        `Experience a stimulating job setting`,
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
                        text={`Phoenix arranges and covers the OSHA safety training course, certifying you for construction work.`}
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
                <SectionImage src={"/worker7.png"} />
                <ColumnDivider />
                <Section
                    title={"Starting Salary"}
                    bullets={[
                        `Competitive pay starting in the mid-$20s per hour`,
                        `Opportunities for overtime and raises`,
                        `Additional increase for those advancing to foreman roles`,
                    ]}
                />
                <ColumnDivider />
                <Section
                    title={"Experience Needed"}
                    bullets={[
                        `No specific prior experience required`,
                        `Must be capable of performing manual labor`,
                        `Intelligence and a willingness to learn are key`,
                    ]}
                />
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
                        text={`Next Steps to Apply at Phoenix`}
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
                            title="Schedule a Meeting"
                            text="Reach out to set up your initial meeting with us."
                        />
                        <NumberedSection
                            index={2}
                            title="Attend an Interview"
                            text="Come in for a face-to-face interview to discuss your skills and fit."
                        />
                        <NumberedSection
                            index={3}
                            title="Quick Site Placement"
                            text="Typically, Phoenix gets you working on a site within a week of your interview."
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
                        marginTop: "10rem",
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
                            src={"/bp7.png"}
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
            <Form apply />
        </div>
    );
};

export default Apply;

