"use client";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import ContactToast from "./contact-toast";

type ContactFormButtonProp = {
  successStatus: boolean;
  toastMessage?: string;
};

const ContactFormButtonWithToast = ({
  successStatus,
  toastMessage = "Success",
}: ContactFormButtonProp) => {
  const [toastVisibility, setToastVisibility] = useState(successStatus);
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        type="submit"
        disabled={pending}
        onClick={() => setToastVisibility(true)}
      >
        Send
      </Button>
      {toastVisibility && successStatus && !pending ? (
        <ContactToast
          message={toastMessage}
          hideToast={() => setToastVisibility(false)}
        />
      ) : null}
    </>
  );
};

export default ContactFormButtonWithToast;
