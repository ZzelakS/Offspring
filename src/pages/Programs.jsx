import { motion } from "framer-motion";

const programs = [
  {
    title: "Infant Centre (3 – 18 months)",
    time: "7:00am – 6:00pm",
    ratio: "1:3 adult-to-child",
    description: "Provides a nurturing, homely environment that supports early sensory, physical, and emotional development through responsive care and Montessori-aligned routines."
  },
  {
    title: "Toddler Class (18 – 36 months)",
    time: "8:30am – 1:30pm",
    ratio: "1:4 adult-to-child",
    description: "Introduces structured learning with emphasis on independence, communication, movement, and gentle social development in a Montessori-prepared space."
  },
  {
    title: "Early Childhood (3 – 6 years)",
    time: "8:30am – 2:00pm",
    ratio: "1:8 adult-to-child",
    description: "Delivers a full Montessori curriculum—Practical Life, Sensorial, Math, Language, and Culture—promoting cognitive growth, creativity, and confidence."
  },
  {
    title: "Before & After-School Care (15 months – 10 years)",
    description: "Flexible care outside of school hours with activities like craft, games, and relaxation. Homework help is available on request."
  },
  {
    title: "Weekend Care (3 months – 10 years)",
    description: "Offered on Saturdays with supervised activities. Meals can be arranged. Ideal for parents with weekend commitments."
  }
];

const enrichmentPrograms = [
  {
    title: "Swimming",
    description: "Builds balance, fitness, and confidence in water. A vital life skill delivered in a fun, safe setting.",
  },
  {
    title: "Ballet",
    description: "Encourages grace, posture, and creative movement. A favorite among our young girls.",
  },
  {
    title: "Music",
    description: "Students explore instruments like piano, violin, and drums, alongside basic theory and rhythm training.",
  },
  {
    title: "French",
    description: "Introduced early to take advantage of children’s sensitive period for language development (0–6 years)."
  }
];

const curriculumAreas = [
  {
    title: "Practical Life",
    description:
      "Fosters independence through activities like pouring, sweeping, and dressing. Builds order, concentration, and responsibility."
  },
  {
    title: "Sensorial",
    description:
      "Sharpens senses through engaging materials that explore color, shape, size, texture, sound, and smell. Forms the basis for math and science learning."
  },
  {
    title: "Mathematics",
    description:
      "Hands-on materials turn abstract concepts into concrete understanding—building number sense, patterns, and early operations."
  },
  {
    title: "Language",
    description:
      "Promotes phonics-based reading and expressive writing. Focuses on vocabulary, sound recognition, and fine motor skills for writing."
  },
  {
    title: "Cultural Work",
    description:
      "Covers geography, science, botany, zoology, and art. Children use maps, charts, and real-world objects to build global awareness and curiosity."
  }
];

const SectionCard = ({ title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
  >
    <h3 className="text-xl font-semibold text-[#D88B3F] mb-2">{title}</h3>
    <p className="text-[#4a4a4a]">{description}</p>
  </motion.div>
);

export default function Programs() {
  return (
    <div className="bg-[#f9f5f1] pt-24 px-6 text-[#3a3a3a]">
      {/* Main Program Sections */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#545A56] mb-12">Our Montessori Programs</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <SectionCard key={index} {...program} index={index} />
          ))}
        </div>
      </section>

      {/* Enrichment */}
      <section className="bg-[#fff9f4] py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-[#545A56] mb-12">Enrichment Activities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {enrichmentPrograms.map((item, idx) => (
            <SectionCard key={idx} {...item} index={idx} />
          ))}
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#545A56] mb-12">Montessori Curriculum Areas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {curriculumAreas.map((item, i) => (
            <SectionCard key={i} {...item} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
