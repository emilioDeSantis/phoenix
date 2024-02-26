import axios from "axios";

const jotFormApiKey = process.env.JOTFORM_API_KEY;
const partnerFormId = "240565118657057";
const applyFormId = "240565276850057";

export async function POST(request: Request) {
    try {
        const formData = await request.json();

        const jotFormId = formData.apply ? applyFormId : partnerFormId;

        let jotFormData = `formID=${jotFormId}`;
        jotFormData += `&q3_name=${encodeURIComponent(formData.name)}`;
        jotFormData += `&q7_company=${encodeURIComponent(formData.company)}`;
        jotFormData += `&q5_phoneNumber[full]=${encodeURIComponent(
            formData.phone
        )}`;
        jotFormData += `&q4_email=${encodeURIComponent(formData.email)}`;
        jotFormData += `&q6_message=${encodeURIComponent(formData.message)}`;

        jotFormData += `&simple_spc=${jotFormId}-${jotFormId}`;

        console.log(
            "encodeURIComponent(formData.email)",
            encodeURIComponent(formData.email)
        );
        console.log("jotFormData", jotFormData);

        const jotFormResponse = await axios.post(
            `https://submit.jotform.com/submit/${jotFormId}`,
            jotFormData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        return new Response(JSON.stringify(jotFormResponse.data), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("Error in API Route:", error);
        return new Response(
            JSON.stringify({ message: "Error submitting form" }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
