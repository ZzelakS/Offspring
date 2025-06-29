import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <div className="bg-[#f9f5f1] text-[#3a3a3a] pt-24">
      {/* Mission Section */}
      <section className="px-6 py-20 bg-white grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-semibold mb-4 text-[#545A56]">Our Mission</h2>
          <p className="text-lg text-[#5A5A5A] leading-relaxed">
            Offspring Montessori School' mission is to provide a dynamic, independent learning environment that is hands-on and student-driven for children ages' 3 months to 6 years old (Infant, Toddler to Early childhood). Children develop inner-discipline, a love of learning, and learn at their own pace guided by the Montessori technique, which promotes individual initiative and creativity.
          </p>
        </motion.div>
        <motion.img
          src="/Mission.jpg"
          alt="Mission"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </section>

      {/* History + Philosophy */}
      <section className="px-6 py-20 bg-[#f6f1ec] grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.img
          src="/Philosophy.jpg"
          alt="Philosophy"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-semibold mb-4 text-[#545A56]">A Montessori Legacy</h2>
          <p className="text-lg text-[#5A5A5A] leading-relaxed">
            Offspring Montessori School was created in January of 2014 but finally opened its doors on October 1st 2024 by Adesola Medayese, a veteran of Montessori philosophy and a parent of two. She created what she could not find for her own children: a friendly and open Montessori school where smiles are infectious. Teachers and Directors are happy and excellent at what they do, and the school is clean and inviting.
We want our students to experience such a positive impact on their learning that our parents would never consider having them attend school anywhere else!
Vision Statement
Uncovering the potential in your child!
          </p>
        </motion.div>
      </section>

      {/* Curriculum Overview */}
      <section className="px-6 py-20 bg-white max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-6 text-[#545A56]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          The Montessori Curriculum
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto mb-10 text-lg text-[#5A5A5A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Our comprehensive curriculum helps children grow through exploration and purposeful work. Every child learns through discovery in the areas below.
        </motion.p>
        <div className="grid md:grid-cols-5 gap-6">
          {['Practical Life', 'Sensorial', 'Mathematics', 'Language', 'Cultural Work'].map((item, i) => (
            <motion.div
              key={item}
              className="bg-[#f6f1ec] p-5 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2 text-[#5A5A5A] font-medium"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enrichment + Facilities */}
      <section className="px-6 py-20 bg-[#f6f1ec] grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-4xl font-semibold mb-4 text-[#545A56]">Beyond the Classroom</h2>
          <p className="text-lg text-[#5A5A5A] leading-relaxed">
            We offer more than academics — ballet, swimming, music, and French are integrated to help children thrive. Our secure, well-equipped environment includes a sick bay, CCTV, air-conditioned transport, and spacious learning zones.
          </p>
        </motion.div>
        <motion.img
          src="/Music Room.jpeg"
          alt="Enrichment"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </section>

      {/* Core Values */}
      <section className="px-6 py-20 bg-white max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-semibold mb-6 text-[#545A56]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Core Values
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto mb-10 text-lg text-[#5A5A5A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          We cultivate a culture of curiosity, responsibility, and respect — empowering each child to lead with confidence and empathy.
        </motion.p>
        <div className="grid md:grid-cols-4 gap-6">
          {['Respect', 'Independence', 'Creativity', 'Community'].map((value, i) => (
            <motion.div
              key={value}
              className="bg-[#f6f1ec] p-5 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-2 text-[#5A5A5A] font-medium"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {value}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-[#fff9f4] text-center">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-[#545A56]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Experience Montessori Excellence
        </motion.h2>
        <motion.p
          className="text-lg max-w-2xl mx-auto mb-6 text-[#5A5A5A]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Book a personalized tour and explore how we inspire growth, independence, and joyful learning for your child.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <Link
            to="/contact"
            className="px-8 py-3 bg-[#D88B3F] text-white rounded-full hover:bg-[#C17830] transition duration-300 shadow-lg"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
