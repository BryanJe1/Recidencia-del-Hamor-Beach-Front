import PageHeader from "@/components/PageHeader"
import ContactForm from "@/components/ContactForm"
import GoogleMap from "@/components/GoogleMap"
import ContactInfo from "@/components/ContactInfo"

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="We'd love to hear from you. Reach out with any questions or inquiries."
        imagePath="/Contact.webp"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Our Location</h2>
            <GoogleMap />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}

