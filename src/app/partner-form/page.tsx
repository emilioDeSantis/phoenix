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
import { Metadata } from "next";


export const metadata: Metadata = {
    title: 'Partner With Us | Phoenix Construction Resources Massachusetts',
    description: `Enhance your construction projects by partnering with Phoenix Construction Resources. Our expertise in providing skilled labor ensures your project's success in Massachusetts.`,
};

const Partner = () => {

  // returns




    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
        }}
        >
            <Form></Form>
        </div>
    );
};

export default Partner;
