"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import toast, { Toaster } from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactForm() {
  const form = useRef();
  // const notifySent = () => toast.success("Successfully toasted!");
  const notifySending = () => toast("Sending......");
  const sendEmail = (e) => {
    e.preventDefault();
    toast.promise(
      emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          form.current,
          "jmRlYBf0ZIu_Cu_-x",
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          },
        ),
      {
        pending: "Sending.....",
        success: "Email sent!👌 I will check it momentarily",
        error: "Woops...Email failed to send.. I will check the bug later.. 🤯",
      },
    );
  };

  return (
    <>
      <ToastContainer className="fixed" position="bottom-center" />
      <div className="font-roboto  flex h-auto items-center justify-center pb-5 text-center text-xl font-medium transition-all ease-in-out md:px-5">
        <form
          className="lg:pt-30 flex h-5/6 w-4/5 flex-col justify-start rounded-lg bg-white px-5 pb-5 pt-10 shadow-xl md:w-2/3  md:px-8 md:pt-20 xl:w-1/3 "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mb-10 flex flex-col  justify-center text-sm md:text-base">
            <label className="mb-5">Name</label>
            <input
              className="h-10 w-full  bg-gray-200"
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-10 flex flex-col  justify-center text-sm md:text-base">
            <label className="mb-5">Email</label>
            <input
              className="h-10 w-full bg-gray-200"
              type="email"
              name="user_email"
              placeholder="e.g 123@gmail.com"
              required
            />
          </div>
          <div className="mb-10 flex flex-col justify-center text-sm md:text-base ">
            <label className="mb-5">Message</label>
            <textarea className="h-60 bg-gray-200" name="message" required />
          </div>

          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
            value="Send"
            // onClick={notifySent}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
