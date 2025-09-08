import React from "react";
import MailForm from "../sub/MailForm";
import nodemailer from "nodemailer";
import { FormData } from "@/types/mail-form-type";
import mailFormSchema from "@/utils/mail-form";
import { getErrorMessage } from "@/utils/error";

const Contact = () => {
  const sendEmail = async (formData: FormData) => {
    "use server";
    try {
      mailFormSchema.parse(formData);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });
      const mailOptions = {
        from: formData.email,
        to: process.env.MAIL_RECEIVER_ADDRESS,
        subject: formData.subject,
        text: formData.message,
        html: "",
      };

      await transporter.sendMail(mailOptions);
      return {
        success: true,
        error: null,
      };
    } catch (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  };
  return (
    <div id="contact" className="px-6 md:px-0">
      <MailForm sendMail={sendEmail} />
    </div>
  );
};

export default Contact;
