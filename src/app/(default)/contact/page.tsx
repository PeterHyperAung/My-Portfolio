import ContactForm from "./_components/contact-form";
import NewsLetterForm from "./_components/newsletter-form";
import SocialInfoCard from "./_components/social-info";
import { db } from "@/db";

export default async function ContactPage() {
  return (
    <div className="py-10 px-10 h-[90vh]">
      <h2 className="text-2xl font-bold text-center mb-10">Contact Me</h2>
      <div className="flex justify-center flex-wrap gap-10">
        <div className="col-span-1 justify-self-end">
          <div className="mb-10">
            <SocialInfoCard />
          </div>
          <NewsLetterForm />
        </div>
        <div className="flex justify-start items-center col-span-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
