import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { SetStateAction } from "react";

type ContactFormButtonProp = {
  onClick: () => void;
};

const ContactFormButton = ({ onClick }: ContactFormButtonProp) => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button type="submit" disabled={pending} onClick={onClick}>
        Send
      </Button>
    </>
  );
};

export default ContactFormButton;
