"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form";
import { renderAsync } from "@react-email/render";

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  const resend = new Resend(process.env.RESEND_API_KEY);
  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  const html = await renderAsync(
    React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    })
  )

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "mfa011096@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      html: html,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};