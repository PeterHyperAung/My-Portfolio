"use server";
import { z } from "zod";
import { db } from "@/db";

type FormStateType = {
  error: {
    email?: string[];
  };
  success: {
    status: boolean;
    message: string;
  };
};

const newsLetterSchema = z.object({
  email: z.string().email({ message: "This should be an email" }),
});

export async function createNewsLetter(
  formState: FormStateType,
  formData: FormData
): Promise<FormStateType> {
  const formValidity = newsLetterSchema.safeParse({
    email: formData.get("email"),
  });

  if (!formValidity.success) {
    return {
      error: {
        ...formValidity.error.flatten().fieldErrors,
      },
      success: {
        status: false,
        message: "",
      },
    };
  } else {
    const newsLetterEmail = await db.newsLetterEmail.findFirst({
      where: {
        email: formValidity.data.email,
      },
    });
    if (newsLetterEmail?.email) {
      return {
        error: {
          email: [],
        },
        success: {
          status: true,
          message: "Your email is already subscribed.",
        },
      };
    }
    await db.newsLetterEmail.create({
      data: formValidity.data,
    });
    return {
      error: {
        email: [],
      },
      success: {
        status: true,
        message: "Thanks for subscribing.",
      },
    };
  }
}
