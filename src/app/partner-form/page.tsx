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

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#000',
      }}>
        <img src="/path/to/logo.png" alt="Logo" style={{ height: '2rem' }} />
        <button style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '2rem',
          cursor: 'pointer',
        }}>
          <span style={{ display: 'block' }}>&#9776;</span>
        </button>
      </div>
      <div style={{ textAlign: 'center', width: '100%' }}>
        <img src="/path/to/building-image.jpg" alt="Building" style={{ width: '100%', height: 'auto' }} />
        <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>Need General Laborers For Your Construction Project?</h1>
        <div style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          margin: '1rem',
        }}>
          <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>HIRE A PHOENIX TEAM</h2>
          <p style={{ fontSize: '1rem', margin: '1rem 0' }}>
            Custom-Tailored for Your Site's Specific Needs.
            <br />
            Our experienced workers are on standby, ready to be deployed to your project at a moment's notice.
          </p>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#f96332',
            color: '#fff',
            border: 'none',
            borderRadius: '0.25rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}>Deploy a Team Now &rarr;</button>
        </div>
      </div>
    </div>
  );





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
