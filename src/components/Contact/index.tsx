import React from "react";
import "./style.scss";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contacts: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const form = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const serviceId = "service_9qqtewu"; // Replace with EmailJS Service ID
      const templateId = "template_w4f9g7s"; // Replace with EmailJS Template ID
      const publicKey = "ZRjisdXqRZOpACna_"; // Replace with EmailJS Public Key

      await emailjs.send(serviceId, templateId, data, publicKey);
      alert("Message sent successfully!");
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>michamav19@gmail.com</h5>
            <a href='mailto:michamav19@gmail.com'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className='form_section'>
            <input
              type='text'
              {...register("name", { required: "Name is required" })}
              placeholder='Your Full Name'
              required
            />{" "}
            {errors.name && <p className='error'>{errors.name.message}</p>}
          </div>
          {/* client side validation */}
          <div className='form_section'>
            <input
              type='email'
              {...register("email", { required: "Email is required" })}
              placeholder='Your Email'
              required
            />
            {errors.email && <p className='error'>{errors.email.message}</p>}
          </div>
          <div className='form_section'>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={7}
              placeholder='Your Message'
              required
            ></textarea>
            {errors.message && (
              <p className='error'>{errors.message.message}</p>
            )}
          </div>
          <button
            type='submit'
            className='btn btn-primary'
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
