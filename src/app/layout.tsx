import Head from "next/head";
import Header from "../Components/Header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
      title: 'Revolutionizing Robotic Safety',
      description: 'Experience the next frontier of robotic safety with the Supervisor Suite. Navigate the world where advanced technology meets universal safety standards, setting the pace for the future of robotics.',
      url: 'https://3lawsrobotics.com/',
      siteName: '3Lawsrobotics.com',
      images: [
        {
          url: '/og.png',
          width: 1000,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">

<Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                ></link>
                <link rel="manifest" href="/site.webmanifest"></link>
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                ></link>
                <meta name="msapplication-TileColor" content="#da532c"></meta>
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
