"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Toast from "@/components/toast/toast";
import * as actions from "@/actions";
import { useFormState } from "react-dom";
import ContactFormButton from "./contact-form-button";

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

  const [toastVisibility, setToastVisibility] = useState(false);

  return (
    <div className="p-5 shadow-md w-[600px]">
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
          <ContactFormButton onClick={() => setToastVisibility(true)} />
        </form>
        {formState?.error?.email?.length !== 0 ? (
          <div className="text-red-400 mt-2 text-sm">
            {formState?.error?.email?.join(", ")}
          </div>
        ) : null}
      </div>
      {toastVisibility && formState.success.status ? (
        <Toast
          hideToast={() => setToastVisibility(false)}
          message={formState.success.message}
        />
      ) : null}
    </div>
  );
};

export default NewsLetterForm;
