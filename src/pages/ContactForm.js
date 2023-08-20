import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContactForm() {
  const form = useRef();
  const notifySent = () =>
    toast("Email Sent! I will check it out momentarily.");
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
    <div className="mx-5 flex h-screen items-center justify-center bg-teal-50 text-center font-roboto text-xl font-medium shadow-2xl transition-all ease-in-out md:mx-20 md:px-20 ">
      <form
        className="lg:pt-30 flex h-5/6 w-3/4 flex-col justify-start rounded-lg bg-white px-5 pt-10 shadow-xl md:px-8  md:pt-20  "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-10 flex flex-col  items-start justify-start">
          <label className="mb-5">Subject</label>
          <input
            className="h-10 w-full  bg-gray-200"
            type="text"
            name="user_name"
            placeholder="Your Subject"
            required
          />
        </div>
        <div className="mb-10 flex flex-col  items-start justify-start">
          <label className="mb-5">Email</label>
          <input
            className="h-10 w-full bg-gray-200"
            type="email"
            name="user_email"
            placeholder="e.g 123@gmail.com"
            required
          />
        </div>
        <div className="mb-10 flex flex-col items-start justify-start">
          <label className="mb-5 ">Message</label>
          <textarea
            className="h-16 w-full bg-gray-200  lg:h-24"
            name="message"
            required
          />
        </div>

        <button
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
          value="Send"
        >
          Send
        </button>
        <ToastContainer position="top-center" />
      </form>
    </div>
  );
}
