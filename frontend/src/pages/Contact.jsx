import React from "react";
import { useRef, useState } from "react";
import { slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);

    emailjs
      .send(
        "service_77rmlko",
        "template_dhylaua",
        {
          form_name: form.name,
          to_name: "Amar",
          from_mail: form.email,
          to_mail: "amartubic1@gmail.com",
          message: form.message,
        },
        "Ij4CafcQBdGeupbrW"
      )
      .then(
        () => {
          setloading(false);
          setForm({
            name: "",
            email: "",
            message: "",
          });
          alert("Message sent successfully");
        },
        (err) => {
          setloading(false);
          console.log(err);
          alert("Message failed to send");
        }
      );
  };

  return (
    <motion.div
      initial={{ x: -1000 }} // Početna pozicija s lijeva
      animate={{ x: 0 }} // Krajnja pozicija s desna
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="flex-[1] bg-black-100  rounded-xl p-8"
    >
      <p className="text-center font-light  ">Get in touch</p>
      <h3 className="text-center  font-bold   text-4xl">Contact.</h3>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex   mx-24  sm:mx-5 flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Full name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="bg-black-200 rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className="bg-black-200 rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={8}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="If you encounter any bugs, have questions about the website, or anything else is unclear, please feel free to reach out for any collaboration. We welcome your inquiries and communication in English. We are here to assist and enhance your experience."
            className="bg-black-200 rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          />
        </label>

        <button
          type="submit"
          className=" bg-blue-500 py-3 px-8 outline-none text-white font-bold   shadow-pr shadow-md rounded-lg p-4 text-white outline-none focus:ring-2 focus:ring-blue-500 font-medium"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
