import AnimatedComponent from "./AnimatedComponent";
import Index from "./Index";
import Section from "./Section";

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
                width: "100%",
                marginTop: "4rem",
            }}
        >
            
            <div
            className="desktop"
                    style={{
                        width: "30rem",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        fontSize: "15rem",
                        fontWeight: 900,
                        // paddingInline: "2rem",
                        lineHeight: 0.8,
                        opacity: 0.18,
                        marginRight: "2rem",
                    }}
                >
                    <AnimatedComponent>
                        {index < 10 ? `0${index}` : index}
                    </AnimatedComponent>
                </div>

            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "flex-start",
                    gap: "0.8rem",
                }}
            >
                <AnimatedComponent>
                    <h2
                        style={{
                            fontSize: "Min(5vw, 2rem)",
                            fontFamily: "Monument-Extended",
                            textTransform: "uppercase",
                            lineHeight: "1.2",
                            width: "Min(24rem, 100%)",
                            marginBottom: "0rem",
                        }}
                    >
                        {title}
                    </h2>
                </AnimatedComponent>
                <AnimatedComponent>
                    <div
                        style={{
                            fontSize: "1rem",
                            fontWeight: 200,
                            opacity: 0.8,
                            lineHeight: 1.2,
                        }}
                    >
                        {text}
                    </div>
                </AnimatedComponent>
            </div>
        </div>
    );
};

export default NumberedSection;
