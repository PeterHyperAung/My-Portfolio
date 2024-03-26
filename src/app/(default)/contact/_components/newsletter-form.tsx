"use client";
import { Input } from "@/components/ui/input";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import ContactFormButtonWithToast from "./contact-form-button-with-toast";

const NewsLetterForm = () => {
  const [formState, action] = useFormState(actions.createNewsLetter, {
    error: {
      email: [],
    },
    success: {
      status: false,
      message: "",
    },
  });

  return (
    <div className="border rounded-md p-5 shadow-md w-[600px]">
      <h3 className="text-xl font-bold mb-5">
        Subscribe email to join my newsletter
      </h3>
      <div>
        <form action={action} className="flex gap-2">
          <Input
            placeholder="Email"
            name="email"
            className={`${
              formState?.error?.email?.length !== 0
                ? "border-red-200 placeholder:text-red-400 text-red-400"
                : null
            }`}
          />
          <ContactFormButtonWithToast
            successStatus={formState.success.status}
            toastMessage={formState.success.message}
          />
        </form>
        {formState?.error?.email?.length !== 0 ? (
          <div className="text-red-400 mt-2 text-sm">
            {formState?.error?.email?.join(", ")}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NewsLetterForm;
