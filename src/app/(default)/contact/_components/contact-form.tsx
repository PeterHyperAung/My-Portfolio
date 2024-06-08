"use client";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import ContactFormButtonWithToast from "./contact-form-button-with-toast";

export default function ContactForm() {
  const [formState, action] = useFormState(actions.createContactMessageAction, {
    error: {
      name: [],
      email: [],
      message: [],
    },
    success: {
      status: false,
      message: "",
    },
  });

  return (
    <>
      <form
        action={action}
        className="border rounded-md shadow lg:w-[600px] md:w-[450px] sm:w-[400px] w-[90vw] min-w-[320px] p-5 mb-5"
      >
        <div className="mb-3 text-center">
          <h3 className="font-bold text-xl">Message Form</h3>
        </div>
        <div className="my-6">
          <label htmlFor="name" className="">
            Full name
          </label>
          <Input
            placeholder="Name"
            name="name"
            className={`mt-2 ${
              formState?.error?.name?.length &&
              "border border-red-300 text-red-400 placeholder:text-red-400 foucs-visible:outline-none"
            }`}
          />
          <div className="text-sm text-red-400 my-2">
            {formState?.error?.name?.length
              ? formState?.error?.name?.join(", ")
              : null}
          </div>
        </div>

        <div className="my-6">
          <label htmlFor="email" className="">
            Email
          </label>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            className={`mt-2 ${
              formState?.error?.email?.length &&
              "border border-red-300 text-red-400 placeholder:text-red-400 foucs-visible:outline-none"
            }`}
          />

          <div className="text-sm text-red-400 my-2">
            {formState?.error?.email?.length
              ? formState?.error?.email?.join(", ")
              : null}
          </div>
        </div>

        <div className="my-6">
          <label htmlFor="message" className="">
            Message
          </label>
          <Textarea
            placeholder="Message..."
            name="message"
            className={`mt-2 resize-none h-40 ${
              formState?.error?.message?.length &&
              "border border-red-300 text-red-400 placeholder:text-red-400 foucs-visible:outline-none"
            }`}
          />
          <div className="text-sm text-red-400 my-2">
            {formState?.error?.message?.length
              ? formState?.error?.message?.join(", ")
              : null}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <ContactFormButtonWithToast
            successStatus={formState.success.status}
            toastMessage={formState.success.message}
          />
        </div>
      </form>
    </>
  );
}
