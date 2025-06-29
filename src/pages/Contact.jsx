import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Contact() {
  return (
    <div className="pt-24 bg-[#f9f5f1] text-[#3a3a3a] px-6">
      {/* Header */}
      <section className="text-center py-16 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-4 text-[#545A56]"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg text-[#5A5A5A]"
          initial="hidden"
          whileInView="visible"
          custom={1}
          variants={fadeUp}
        >
          We’re happy to answer your questions and help guide your child’s
          Montessori journey. Use the form below or reach out directly.
        </motion.p>
      </section>

      {/* Contact Details */}
      <section className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto pb-20">
        <motion.div
          className="space-y-6 text-[#4a4a4a]"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-[#D88B3F] mb-4">
            School Info
          </h2>
          <p>
            <strong>Phone:</strong> +234 704 666 1973
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +234 201 290 4265
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +234 809 951 7000
          </p>
          <p>
            <strong>Email:</strong> offspringmontessorischool@gmail.com.
          </p>
          <p>
            <strong>Location:</strong> 23A, Olutoye Crescent, off Adeniyi Jones Avenue, Ikeja, Lagos.
          </p>
          <p>
            <strong>School Hours:</strong> Monday – Friday, 7:00am – 6:00pm.
          </p>
          <p>
            <strong>Pick-Up Time:</strong> Between 1:30pm and 2:00pm.
          </p>
          <p>
            <strong>Weekend Care:</strong> Saturdays available (enquire in
            advance).
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-xl p-8 shadow space-y-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          <h2 className="text-2xl font-semibold text-[#545A56]">
            Send Us a Message
          </h2>
          <div>
            <label className="block mb-1 font-medium text-sm">Full Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D88B3F]"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D88B3F]"
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">
              Your Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D88B3F]"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#D88B3F] text-white py-3 px-6 rounded-full hover:bg-[#C17830] transition"
          >
            Submit
          </button>
        </motion.form>
      </section>

      {/* Optional Map */}
      <section className="max-w-6xl mx-auto pb-20">
        <motion.h2
          className="text-center text-2xl font-semibold mb-6 text-[#545A56]"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
        >
          Visit Us
        </motion.h2>
        <div className="rounded-xl overflow-hidden shadow-lg max-w-full mx-auto my-8">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.221160237309!2d3.3444729000000004!3d6.619424899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93d0b70d64af%3A0xf09a8ad9daaacc4a!2s23%20Olutoye%20Cres%2C%20Ogba%2C%20Lagos%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1749460710639!5m2!1sen!2sng"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
