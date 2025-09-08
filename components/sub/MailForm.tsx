"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import mailFormSchema from "@/utils/mail-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/types/mail-form-type";

const MailForm = ({
  sendMail,
}: {
  sendMail: (
    formData: FormData
  ) => Promise<{ success: boolean; error: string | null }>;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // 👈 used to manually clear fields
  } = useForm<FormData>({
    resolver: zodResolver(mailFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    toast.info("Sending Email...");

    try {
      const result = await sendMail(data);

      if (!result.success) {
        throw new Error(result.error || "Failed to send email");
      }

      console.log("Form data:", data);

      setIsSubmitted(true);

      // ✅ Manually clear subject & message only
      setValue("subject", "");
      setValue("message", "");

      toast.success("Email Sent ✅");

      // Reset success message after 6 seconds
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        (error as any)?.response?.data?.message ||
          (error as Error)?.message ||
          "Something went wrong"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#8B5CF6",
      boxShadow: "0 0 0 3px rgba(139, 92, 246, 0.1)",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-[#0f0728] to-[#190a3e] rounded-2xl border border-[#2A0E61] shadow-2xl"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">
          Get In Touch
        </h2>
        <p className="text-gray-400">
          Let&apos;s discuss your next project or collaboration
        </p>
      </motion.div>

      {/* Success Message */}
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
        >
          ✨ Message sent successfully! I&apos;ll get back to you soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className="w-full px-4 py-3 bg-[#1a0b3a]/50 border border-[#2A0E61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
              placeholder="Your name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.name.message}
              </motion.p>
            )}
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <motion.input
              variants={inputVariants}
              whileFocus="focus"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className="w-full px-4 py-3 bg-[#1a0b3a]/50 border border-[#2A0E61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.email.message}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Subject Input */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Subject
          </label>
          <motion.input
            variants={inputVariants}
            whileFocus="focus"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 5,
                message: "Subject must be at least 5 characters",
              },
            })}
            className="w-full px-4 py-3 bg-[#1a0b3a]/50 border border-[#2A0E61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300"
            placeholder="What's this about?"
          />
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.subject.message}
            </motion.p>
          )}
        </motion.div>

        {/* Message Textarea */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <motion.textarea
            variants={inputVariants}
            whileFocus="focus"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
            rows={6}
            className="w-full px-4 py-3 bg-[#1a0b3a]/50 border border-[#2A0E61] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-all duration-300 resize-none"
            placeholder="Tell me about your project, ideas, or just say hello..."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm mt-1"
            >
              {errors.message.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={itemVariants}>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="relative w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={
              !isSubmitting
                ? {
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                    background: "linear-gradient(to right, #8B5CF6, #06B6D4)",
                  }
                : {}
            }
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            transition={{ duration: 0.2 }}
          >
            {/* Shimmer effect */}
            {!isSubmitting && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{
                  x: "200%",
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
              />
            )}

            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <motion.div
                    whileHover={{ x: 4, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </motion.div>
                </>
              )}
            </span>

            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-0 -z-10"
              whileHover={!isSubmitting ? { opacity: 0.3 } : {}}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default MailForm;
