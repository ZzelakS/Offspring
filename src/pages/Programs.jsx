import { motion } from "framer-motion";

const programs = [
  {
    title: "Infant Centre (3 – 12 months)",
    time: "7:00am – 6:00pm",
    ratio: "1:3 adult-to-child",
    description:
      "For children between the ages of 3 months to 12 months which runs from 7:00 am till 6pm, adult to child ratio is 1:5.",
  },
  {
    title: "Toddler Class (1 – 3 years)",
    time: "8:30am – 1:30pm",
    ratio: "1:4 adult-to-child",
    description:
      "Montessori program for children 18 to 36 months of age that runs from 8:30am - 1:30pm.",
  },
  {
    title: "Early Childhood (3 – 6 years)",
    time: "8:30am – 2:00pm",
    ratio: "1:8 adult-to-child",
    description:
      "Montessori Curriculum for children aged 3 to 6 years of age. The section runs from 8:30am to 1:30pm",
  },
  {
    title: "Before & After-School Care (5 – 10 years)",
    description:
      "After School Care is offered on a when-needed basis at an accommodative cost per day or monthly.",
  },
  {
    title: "Weekend Care (3 months – 10 years)",
    description:
      "Weekend care is available to children ages 6 months to 10 years. It begins from 10am and ends at 4:00pm. Lunch could be arranged as at when necessary for a fee. We do appreciate having as much notice as possible if your child will be attending ,so we may arrange staffing.",
  },
];

const enrichmentPrograms = [
  {
    title: "Swimming",
    description:
      "Learning to swim is so important for children because it helps them to keep safe around water and keeps them fit and healthy. The children learn balance, stability and concentration. It is also a social skill that keeps with them throughout life. The children are expected to come in with their swimwear, floaters, arm bands, towel, slippers and extra clothing. Children without all these will be not allowed to take the class.",
  },
  {
    title: "Ballet",
    description:
      "This activity develops in our little girls grace, elegance and poise. Their angelic faces, happy and excited as they dance in their lovely tutus would make your day. This is our most common programme amongst the girls.",
  },
  {
    title: "Music",
    description:
      "Music is a creative ensemble that seeks to engage the senses and fosters team spirit. This class the children are taught how to play musical instruments like the Piano, Violin, Guitars,Recorders, Drums and Maracas. They are also taught theoretical music.",
  },
  {
    title: "French",
    description:
      "It’s never too early to introduce the child to language. Children are most sensitive to language acquisition between the ages of birth to 6 years.",
  },
];

const curriculumAreas = [
  {
    title: "Practical Life",
    image: "/Laboratory.jpg",
    description:
      "This area of the curriculum is designed to invite the young learner to act and work on real life tasks that foster independence, coordination, order and concentration. It is in a sense the doorway to the Montessori curriculum. This is the area where the child may first choose independent work. The practical life area contains many attractively displayed objects familiar to the child, including a variety of items commonly used in the tasks of daily living, like eating, dressing and cleaning. They offer the child meaningful, non-threatening modes of activity. The materials are also carefully designed and demonstrated to help teach skills involved with caring for the environment and the self, to encourage responsibility, autonomy and to promote high self-esteem.",
  },
  {
    title: "Sensorial",
    image: "/Sensorial Area.jpeg",
    description:
      "Dr. Montessori saw the senses as the 'doorway to the mind'. She considered sensory and manipulation not only an aid to the development of maturing sense organs (eyes, ears, nose, tongue and skin) but a starting point for intellectual growth. She believed that by helping children to order, compare and classify sensory stimulation, their intellectual development would be greatly assisted and future learning would be more meaningful and useful. The basic sensorial exercise inspires careful observation and calls attention to specific qualities requiring identification of similarities and contrasts. The mind must judge, compare, classify and draw conclusions. These exercises tend to fascinate children because they are difficult enough to represent a real and meaningful challenge. They are then better prepared for future learning in math, language, and science and making sense of life's experiences and information in general.",
  },
  {
    title: "Mathematics",
    image: "/Mathematics.jpeg",
    description:
      "The central purpose of the Math materials in the early years is to lay the foundation for later cognitive development and to prepare for the gradual transition to abstract thinking. The primary values of these earlier activities in mathematics are found in the way they transform ideas into actions on concrete materials. Students who learn math by rote method often have no real understanding or ability to put their skills to use in everyday life. Montessori students use hands-on learning materials that make abstract concepts clear and concrete.",
  },
  {
    title: "Language",
    image: "/Language.jpeg",
    description:
      "Language development is a concern of the entire Montessori classroom. Many activities in other areas, as well as with a large group, foster vocabulary development, communication skills, writing and reading readiness. In the language area we will find a large variety of reading readiness materials, including materials for phonetic analysis, word attack skills and reading, as well as materials for the refinement of motor control for writing. In the Montessori method, writing precedes reading, as the children explore with drawing and forming letters. The process of learning how to read should be as painless and simple as learning how to speak. The child begins by exploring the sounds that compose words and by relating them to the letters of the alphabet. He can soon produce words and sentences free of all other mechanical difficulties. In the meantime he trains his hand to become precise and sure for the writing movements. Reading is prepared indirectly from writing. The child starts from what he knows about the letters and the sounds. Then we give him the key to read all the words he can encounter. Reading skills normally develop so smoothly in Montessori classrooms that students tend to exhibit a sudden 'reading explosion' which leaves the children and their families beaming with pride. Dr. Montessori's research confirmed what observant parents have always known: children learn best by touch and manipulation, not by repeating what they are told. Her manipulative approach to teaching children how to read phonetically is nothing short of brilliance and should have long ago become a basic element in every Early-childhood classroom around the world.",
  },
  {
    title: "Cultural Work",
    image: "/Cultural.jpeg",
    description:
      "Science is an integral element of the Montessori curriculum. Among other things, it represents a way of life: a clear thinking approach to gathering information and problem solving. The scope of the Montessori science curriculum includes a sound introduction to botany, zoology, chemistry, physics, geology and astronomy. The Montessori approach to science cultivates children's fascination with the universe and helps them develop a lifelong interest in observing nature and discovering more about the world in which we live. Our teachers introduce history and geography as early as age three. The youngest students work with specially designed maps and begin to learn the names of the world's continents and countries. They learn to treasure the richness of their own cultural heritage and those of their friends. Music and movement education will also be important parts of the curriculum as well as the Arts. They offer children ways to express themselves, their feelings, experiences and ideas. Montessori schools are very interested in helping children develop control of their fine and gross-motor movement.",
  },
];

const SectionCard = ({ title, description, index, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
  >
    {image && (
      <img
        src={image}
        alt={title}
        className="w-full h-50 object-fit rounded-md mb-4 aspect-square"
      />
    )}
    <h3 className="text-xl font-semibold text-[#D88B3F] mb-2">{title}</h3>
    <p className="text-[#4a4a4a]">{description}</p>
  </motion.div>
);

export default function Programs() {
  return (
    <div className="bg-[#f9f5f1] pt-24 px-6 text-[#3a3a3a]">
      {/* Main Program Sections */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#545A56] mb-12">
          Our Montessori Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {programs.map((program, index) => (
            <SectionCard key={index} {...program} index={index} />
          ))}
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#545A56] mb-12">
          Montessori Curriculum Areas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {curriculumAreas.map((item, i) => (
            <SectionCard key={i} {...item} index={i} />
          ))}
        </div>
      </section>

      {/* Enrichment */}
      <section className="bg-[#fff9f4] py-20 px-4">
        <h2 className="text-4xl font-bold text-center text-[#545A56] mb-12">
          Enrichment Activities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {enrichmentPrograms.map((item, idx) => (
            <SectionCard key={idx} {...item} index={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}
