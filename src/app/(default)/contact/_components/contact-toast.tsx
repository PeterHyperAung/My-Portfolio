"use client";
import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";

type ToastProps = {
  message?: string;
  hideToast: () => void;
};

const ContactToast = ({ message = "Success!", hideToast }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [hideToast]);

  return (
    <div className="fixed flex justify-center items-center gap-2 top-5 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md drop-shadow-md shadow-md z-50 bg-white">
      <FiCheckCircle size="18" />
      {message}
    </div>
  );
};

export default ContactToast;
