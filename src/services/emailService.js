import emailjs from '@emailjs/browser'

// Remplace par tes identifiants EmailJS
const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export const sendEmail = async (formData) => {
  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Smart Design',
      },
      PUBLIC_KEY
    )

    return { success: true, data: response }
  } catch (error) {
    return { success: false, error: error.text }
  }
}