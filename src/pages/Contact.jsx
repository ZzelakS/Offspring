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
       <a
  href="https://wa.me/2348099517000?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Montessori%20school.%20Could%20you%20please%20share%20some%20information%20about%20admissions%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-2 mb-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
>
  {/* WhatsApp Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12.003 1.998C6.474 2.006 2 6.48 2 12.007c0 2.113.619 4.084 1.67 5.74L2 22l4.34-1.646a9.978 9.978 0 005.66 1.646c5.528-.008 10.002-4.482 10.002-10.009C22.002 6.48 17.528 2.006 12.003 1.998zm-.002 17.973a7.946 7.946 0 01-4.12-1.14l-.294-.176-2.577.978.865-2.512-.191-.31a7.952 7.952 0 01-1.23-4.23c.005-4.404 3.594-7.994 8.003-7.994 2.14.004 4.153.837 5.664 2.35a7.933 7.933 0 012.343 5.662c-.005 4.408-3.595 7.997-8.003 7.997zm4.365-5.841c-.238-.119-1.4-.693-1.618-.773-.218-.08-.376-.119-.534.119-.158.238-.613.772-.75.93-.138.158-.277.178-.514.06-.238-.119-1.005-.37-1.914-1.179-.707-.63-1.185-1.409-1.323-1.648-.138-.238-.014-.366.104-.484.107-.107.238-.277.356-.415.119-.138.158-.237.238-.396.079-.158.04-.297-.02-.415-.06-.119-.533-1.287-.731-1.764-.192-.46-.388-.398-.534-.406-.137-.007-.297-.009-.456-.009-.158 0-.415.06-.633.297-.218.238-.832.813-.832 1.983s.852 2.302.97 2.46c.119.158 1.674 2.55 4.059 3.576.567.244 1.009.39 1.353.499.568.181 1.085.156 1.494.095.456-.068 1.4-.571 1.598-1.121.198-.55.198-1.021.139-1.12-.06-.099-.218-.158-.456-.277z" />
  </svg>
  Message us on WhatsApp
</a>

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
