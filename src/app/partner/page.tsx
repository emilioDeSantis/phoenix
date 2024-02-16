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
import NumberedSection from "@/Components/NumberedSection";
import InternalPage from "@/Components/InternalPage";
import TextSection from "@/Components/TextSection";

const Partner = () => {
    return (
        <InternalPage
            hero={"/partner.png"}
            title="Partner With Phoenix"
            subtitle="Flexible Solutions for Construction Staffing"
            text={`Delivering skilled, reliable labor for New England's construction needs. From site prep to clean-up, we manage it all, including foreman-led teams for larger projects.`}
            buttonText="Partner Today"
        >
            <RowDivider />
            <div className="section-container">
                <SectionImage src={"/honest-face.png"} />
                <ColumnDivider mobile />
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
            <div className="section-container">
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
                <ColumnDivider mobile />
                <SectionImage src={"/blueprint1.png"} />
            </div>
            <RowDivider />
            <div className="section-container">
                <SectionImage src={"/female-face.png"} />
                <ColumnDivider mobile />
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
                        text={`All Phoenix employees arrive OSHA-certified, ensuring top-notch safety standards on your site.`}
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
                <SectionImage src={"/worker3.png"} />
                <ColumnDivider />
                <div
                    style={{
                        // width: `calc(2 * (100vw - ${dividerWidth})/3)`,
                        width: `100%`,
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
                            fontSize: "Min(2.4rem, 6vw)",
                            color: "white",
                            textTransform: "uppercase",
                            fontFamily: "Monument-Extended",
                            lineHeight: "1.2",
                            marginBottom: "1.6rem",
                        }}
                        text={`Is Phoenix the Right Fit for Your Site?`}
                    />
                    <TextSection
                        title="Work Type:"
                        text="Site prep, clean-up, demolition, excavation and more."
                    />

                    <TextSection
                        title="Location:"
                        text="Boston area and New England."
                    />

                    <TextSection
                        title="Team Size:"
                        text="From 1 worker to 20+ workers and foreman."
                    />

                    <TextSection
                        title="Timeframe:"
                        text="Flexible labor solutions tailored to the duration of your project."
                    />
                </div>
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
                        text={`Next Steps to Hire Phoenix`}
                    />
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
            <div id="form" />
            <Form></Form>
        </InternalPage>
    );
};

export default Partner;
