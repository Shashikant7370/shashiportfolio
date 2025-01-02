import React, { useRef, useState } from "react";
// import "./Contact.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const handleEmail = (e) => {
    e.preventDefault();
    let tempParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    console.log(tempParams);
    emailjs
      .sendForm("service_c0q5ccf", "template_akq6lwj", form.current, {
        publicKey: "yVWClLE4F1F-rvBZA",
      })
      .then(
        () => {
          alert("Thank you for contacting me, I will get back to you soon.");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col m-auto justify-center items-center bg-[rgb(11,26,51)]"
    >
      <h2 className="text-white text-4xl font-semibold ">Contact Me</h2>
      <form
        method="post"
        ref={form}
        onSubmit={handleEmail}
        className="flex flex-col w-full sm:w-[400px] bg-slate-600 p-2 rounded-sm "
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full outline-none p-2 border-2  mb-4 rounded-sm "
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-none p-2 border-2  mb-4 rounded-sm"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Your subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full outline-none p-2 border-2  mb-4 rounded-sm"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          name="message"
          className="w-full outline-none p-2 border-2  mb-4 rounded-sm"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="submit"
          // onClick={handleEmail}
          className="bg-orange-400 py-2 sm:py-3 text-xl text-white"
          value={"Send Mail"}
        />
      </form>

      <footer className="flex gap-5 mt-10">
        <a
          href="https://github.com/Shashikant7370/"
          className="text-4xl text-white"
        >
          <FaGithub className="" />
        </a>
        <a
          href="https://www.linkedin.com/in/shashikant-kumar-b646782a5"
          className="text-4xl text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/shashikantkushwaha731/"
          className="text-4xl text-purple-600"
        >
          <FiInstagram />
        </a>
      </footer>
    </section>
  );
}

export default Contact;
