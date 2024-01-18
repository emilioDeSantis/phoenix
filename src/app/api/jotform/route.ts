import axios from 'axios';

const jotFormApiKey = process.env.JOTFORM_API_KEY;
const jotFormId = '240026222726042';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Constructing the URL-encoded data
    let jotFormData = `formID=${jotFormId}&q3_email=${encodeURIComponent(formData.email)}&simple_spc=${jotFormId}-${jotFormId}`;
    // Add other form fields in the same way

    console.log('encodeURIComponent(formData.email)', encodeURIComponent(formData.email));
    console.log('jotFormData', jotFormData);

    const jotFormResponse = await axios.post(
      `https://submit.jotform.com/submit/${jotFormId}`, 
      jotFormData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );

    return new Response(JSON.stringify(jotFormResponse.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error in API Route:', error);
    return new Response(JSON.stringify({ message: 'Error submitting form', error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
