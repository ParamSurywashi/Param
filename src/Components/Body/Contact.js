import React, { useState } from "react";
import {ImLocation2} from "react-icons/im";
import {MdEmail} from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import MyImg from "../../Assets/MyPic.JPG";
import "../../Styles/Contact.scss";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "param_service_001",
        "param_template_001",
        formData,
        "upMAsodLxUhycNT7l"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("Failed to send the message, please try again.");
          setLoading(false);
        }
      );
  };

  const fadeUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div>
        <div className="Magic_Box">
      <div>
        <img src={MyImg} alt="MyPic" className="MyImg" />
      </div>
      <div className="contact-page">
        <motion.h1
          className="contact-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Send me a message!
        </motion.h1>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          {...fadeUp}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {status && (
          <motion.p
            className="status-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {status}
          </motion.p>
        )}
      </div>
      </div>
      <div className="Icon_Box">
        <div className="Icon_container">
          <ImLocation2 className="Icon_logo" />
          <h2 className="Add_text">Mandsaur, Madhya Pradesh, India</h2>
        </div>
        <div className="Icon_container">
          <MdEmail className="Icon_logo" />
          <h2 className="Add_text">parmanandchared1997@gmail.com</h2>
        </div>
        <div className="Icon_container">
          <BiSolidPhoneCall className="Icon_logo" />
          <h2 className="Add_text">+91 9589962260</h2>
        </div>
        <div className="Icon_container">
          <RiWhatsappFill className="Icon_logo" />
          <h2 className="Add_text">+91 9589962260</h2>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
