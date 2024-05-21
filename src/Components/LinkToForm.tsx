import Link from "next/link";

interface LinkToFormProps {
    text: string;
}

const LinkToForm = ({ text }: LinkToFormProps) => {
    return (
        <Link
            href="/partner-form"
            style={{
                border: "1px solid #FF5D39",
                paddingBlock: "0.6rem",
                paddingInline: "1.6rem",
                borderRadius: "4px",
                color: "#FF5D39",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

            }}
        >
            {text + " →"}
        </Link>
    );
};

export default LinkToForm;
