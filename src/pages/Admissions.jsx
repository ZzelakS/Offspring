import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const admissionSteps = [
  {
    title: "1. Visit or Inquire",
    description:
      "Schedule a visit or contact us to learn more about our programs, policies, and Montessori approach.",
  },
  {
    title: "2. Complete Application",
    description:
      "Fill out our Admission Form and submit required documents: immunization records, health check, contract, and handbook agreement.",
  },
  {
    title: "3. Parent Interview",
    description:
      "We conduct an informal meeting to understand your goals, answer questions, and assess program fit.",
  },
  {
    title: "4. Secure Enrollment",
    description:
      "Submit payment via bank draft, confirm class assignment, and prepare your child to begin their Montessori journey.",
  },
];

const requirements = [
  "Completed Admission Form",
  "Up-to-date immunization record",
  "Well-child check form from your doctor",
  "Signed contract and handbook agreement",
  "Bank draft for payment of fees",
];

const ageGroups = [
  { label: "Infant Centre", range: "3 – 12 months" },
  { label: "Toddler Class", range: "1 – 3 years" },
  { label: "Early Childhood", range: "3 – 6 years" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Admissions() {
  return (
    <div className="pt-24 bg-[#f9f5f1] text-[#3a3a3a]">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden mb-12">
        <img
          src="/Admissions.jpg"
          alt="Montessori Admission"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Admissions at Offspring Montessori
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <motion.p
          className="text-lg text-[#5A5A5A] max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          We welcome children from 3 months to 6 years. Our Montessori-inspired admission process is personal, thoughtful, and designed to ensure a great fit for every family.
        </motion.p>
      </section>

      {/* How to Enrol */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12 text-[#545A56]">How to Enrol</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {admissionSteps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-[#f6f1ec] p-6 rounded-xl shadow hover:-translate-y-1 hover:shadow-lg transition"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3 className="text-xl font-semibold text-[#D88B3F] mb-2">{step.title}</h3>
                <p className="text-[#4a4a4a]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🆕 Enrollment Process Section */}
      <section className="py-20 bg-[#fff9f4] px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-[#545A56] mb-6">Enrollment Process</h2>
        <motion.div
          className="text-[#5A5A5A] text-lg space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p>Offspring Montessori School accepts children for enrollment either in September or any time during the school year in the following order:</p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li>Current students</li>
            <li>Siblings</li>
            <li>New Enrollees</li>
          </ol>
          <p>Once we are at capacity, new applicants should fill out a form and will be placed on a waitlist.</p>
          <p><strong>Note:</strong> New Enrollees cannot begin their first day of school until a tour with at least one parent takes place and the following items have been submitted:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Completed Admission Form</li>
            <li>Completed Well Check form</li>
            <li>Copy of immunization records</li>
            <li>Signed Contract</li>
            <li>Signed Parent Handbook agreement form</li>
            <li>Signed Discipline Policy form</li>
            <li>Bank Draft, Transfer, or Bank Teller payment</li>
          </ul>
        </motion.div>
      </section>

      {/* Admission Requirements */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-[#545A56] mb-8">Admission Requirements</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-[#5A5A5A] text-lg">
          {requirements.map((item, index) => (
            <motion.li
              key={index}
              className="bg-[#f9f5f1] p-4 rounded-lg shadow hover:shadow-md hover:-translate-y-1 transition"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* What to Bring */}
      <section className="py-20 bg-white max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-[#545A56] mb-8">What to Bring on Your First Day</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-[#5A5A5A] text-lg">
          {[
            "Complete change of clothes including underwear (labeled) — see Clothing section",
            "Blanket every Monday if your child naps — see Naps and Rest Time",
            "Daily lunch — see Lunch and Lunch Bag section",
            "Label everything (especially clothing and blankets)",
            "At least five pairs of underwear and pants/shorts if toilet training is recent",
            "No pull-ups or diapers — toddlers must be in underwear",
            "Check cubby bags labeled with your child’s name for soiled clothes",
            "Ask for our toilet training guide if your child is starting soon"
          ].map((item, index) => (
            <motion.li
              key={index}
              className="bg-[#f6f1ec] p-4 rounded-lg shadow hover:shadow-md hover:-translate-y-1 transition"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Age Group Placement */}
      <section className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10 text-[#545A56]">Age Group Placement</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ageGroups.map((group, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition text-[#5A5A5A]"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h3 className="text-xl font-bold text-[#D88B3F]">{group.label}</h3>
              <p>{group.range}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-white">
        <h2 className="text-2xl font-semibold text-[#545A56] mb-4">Ready to Join Us?</h2>
        <p className="text-[#5A5A5A] mb-6">Start your child’s Montessori journey today. Reach out to schedule a visit or begin enrollment.</p>
        <a 
          href="https://wa.me/2348099517000?text=Hello%2C%20I%27d%20like%20to%20learn%20more%20about%20your%20Montessori%20school.%20Could%20you%20please%20share%20some%20information%20about%20admissions%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#D88B3F] text-white rounded-full hover:bg-[#C17830] transition duration-300 shadow"
        >
          Contact Admissions
        </a>
      </section>
    </div>
  );
}
