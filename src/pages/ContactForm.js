import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      );
  };

  return (
    <div className="mx-5 flex h-screen items-center justify-center bg-teal-50 text-center font-roboto text-3xl font-extrabold shadow-2xl md:mx-20 lg:mx-60">
      <form
        className="lg:pt-30 h-5/6 w-3/4 rounded-lg bg-white px-5 pt-10 shadow-xl md:px-8 md:pt-20 lg:px-20 "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-10 flex flex-col  justify-center">
          <label className="mb-5">Subject</label>
          <input
            className="bg-gray-200"
            type="text"
            name="user_name"
            placeholder=""
          />
        </div>
        <div className="mb-10 flex flex-col  justify-center">
          <label className="mb-5">Email</label>
          <input
            className="bg-gray-200"
            type="email"
            name="user_email"
            placeholder="e.g 123@gmail.com"
          />
        </div>
        <div className="mb-10 flex flex-col justify-center">
          <label className="mb-5">Message</label>
          <textarea className="h-30 bg-gray-200" name="message" />
        </div>

        <button
          class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          type="submit"
          value="Send"
        >
          Send
        </button>
      </form>
    </div>
  );
}
