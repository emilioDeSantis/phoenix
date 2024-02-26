import Head from "next/head";
import Header from "../Components/Header";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    openGraph: {
        title: "Phoenix Construction Resources",
        description:
            "Leading the way in construction labor services, Phoenix Construction Resources offers skilled, reliable labor for projects in Massachusetts. Discover efficient solutions for your construction needs.",
        url: "https://PhoenixConstructionResources.com/",
        siteName: "PhoenixConstructionResources.com",
        images: [
            {
                url: "https://PhoenixConstructionResources.com/og.png",
                width: 1000,
                height: 600,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    title: "Phoenix Construction Resources | Premier Labor Services in Massachusetts",
    description:
        "Leading the way in construction labor services, Phoenix Construction Resources offers skilled, reliable labor for projects in Boston and across New England. Discover efficient solutions for your construction needs.",
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
                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-JFCXK3DHRX"
                ></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JFCXK3DHRX');
            `,
                    }}
                />
            </Head>
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
