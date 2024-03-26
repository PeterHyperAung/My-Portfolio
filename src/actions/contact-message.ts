"use server";
import { db } from "@/db";

import { z } from "zod";

export type FormState = {
  error: {
    name?: string[];
    message?: string[];
    email?: string[];
  };
  success: {
    status: boolean;
    message?: string;
  };
};

const contactMessageSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be longer than 3 characters." })
    .max(100, { message: "Name must be shorter than 100 characters." }),
  email: z.string().email({ message: "This should be an email." }),
  message: z
    .string()
    .min(3, { message: "Message must be longer than 3 characters." })
    .max(10000, { message: "Message must be shorter than 10000 characters." }),
});

export const createContactMessageAction = async (
  formState: FormState,
  formData: FormData
): Promise<FormState> => {
  const formValidity = contactMessageSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!formValidity.success) {
    return {
      error: formValidity.error.flatten().fieldErrors,
      success: {
        status: false,
      },
    };
  } else {
    // save data here
    const data = await db.contactMessage.findFirst({
      where: {
        ...formValidity.data,
      },
    });

    if (data?.name || data?.email || data?.message) {
      return {
        error: {},
        success: {
          status: true,
          message: "Message already sent!",
        },
      };
    } else {
      await db.contactMessage.create({
        data: formValidity.data,
      });

      return {
        error: {},
        success: {
          status: true,
          message: "Message successfully sent!",
        },
      };
    }
  }
};
