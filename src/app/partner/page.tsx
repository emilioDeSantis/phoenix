"use client";
import PageSubtitle from "@/Components/PageSubtitle";
import PageContainer from "../../Components/PageContainer";
import PageTitle from "../../Components/PageTitle";
import Button from "@/Components/Button";
import Spotlight from "@/Components/Spotlight";
import AnimatedText from "@/Components/AnimatedText";
import AnimatedComponent from "@/Components/AnimatedComponent";

const Partner = () => {
    return (
        <PageContainer>
            <PageTitle title="/  Partner With Phoenix" />
            <PageSubtitle title="Flexible Solutions for Construction Staffing" />
            <AnimatedText
                yOffset={20}
                stagger={0.002}
                delay={0.2}
                textStyle={{
                    fontSize: "1rem",
                    color: "white",
                    marginTop: "5rem",
                    fontWeight: 300,
                    marginInline: "5rem",
                    width: "48rem",
                    opacity: 0.7,
                }}
                text={`Phoenix Construction Resources is your go-to source for flexible, skilled labor on construction sites across the New England area. When your project requires additional manpower, we supply the dependable, unskilled laborers you need for tasks like site clean-up, material transport, demolition, and excavation. Forget the hassle of hiring and payroll; you tell us how many workers you need and for how long, and we'll handle the rest. For larger teams, a skilled foreman will be provided to ensure efficient, streamlined operations on-site.`}
            />
            <AnimatedComponent
                delay={0.4}
                style={{
                    display: "flex",
                    paddingInline: "5rem",
                    marginTop: "3rem",
                }}
            >
                <Button href={"/khjgvjhgv"}>Partner Today</Button>
            </AnimatedComponent>
            <Spotlight
                title="/ READY WORKFORCE"
                src="/blueprint1.png"
                text={`Access a pool of laborers ready to deploy at a moment's notice, tailored to your project's size and duration.`}
            />
            <Spotlight
                title="/ Hassle-Free Management"
                src="/blueprint2.png"
                reverse
                text={`We manage all aspects of employment, from onboarding to payroll, allowing you to focus on your project.`}
            />
            <Spotlight
                title="/ Leadership Included"
                src="/blueprint5.png"
                text={`For larger labor needs, our foremen bring leadership and coordination to the workforce, ensuring productivity and quality.`}
            />
            <Spotlight
                title="/ Operational Excellence"
                src="/bp4.png"
                reverse
                text={`With our workers, expect a seamless extension to your team, backed by Phoenix's commitment to operational efficiency.`}
            />
        </PageContainer>
    );
};

export default Partner;
