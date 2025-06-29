import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Is Montessori just for special learners such as the gifted or those with learning difficulties?",
    answer:
      "Maria Montessori started her research and methods with children experiencing learning difficulties. Because her methods were so successful, they were extended to a wide range of children. The environment and methods used in the Montessori classroom are designed to ensure the holistic development and success of all children."
  },
  {
    question: "Do Montessori classrooms push children too far?",
    answer:
      "Central to the Montessori philosophy is the idea of allowing each child to develop at her own individual pace. Montessori children who are advanced compared to traditional expectations for their age level do not reflect artificial acceleration or pressured instruction. Rather, they reflect the vast possibilities and potential when children are allowed to learn at their own pace and pursue what is interesting to them during their sensitive periods of learning in a scientifically prepared environment."
  },
  {
    question: "Is Montessori just for preschool children?",
    answer:
      "Montessori is a philosophy of education that starts at birth and continues through adulthood. The majority of the Montessori programmes offered are preschools (ages 3-6) but there is a growing number of infant and toddler programmes as well as 6-9, 9-12, and 12-15 programmes."
  },
  {
    question: "Is Montessori out of date?",
    answer:
      "Quite the contrary actually. Dr. Maria Montessori was a woman ahead of her time and the insights she discovered and observed about children in the early 1900s are just now being confirmed and praised by contemporary research and evaluation. Traditional educators are adopting some of the Montessori practices in their everyday curriculum. Some adaptations to the original Montessori curriculum have been updated (e.g., modifications to the Practical Life exercises) to keep it culturally relevant, but the basic pedagogy has not changed much since Dr. Montessori's lifetime because the developmental stages of humans have not changed."
  },
  {
    question: "Are Montessori schools religious?",
    answer:
      "The Montessori philosophy itself is not religiously oriented. Many schools follow the principle of celebrating and learning about every religion from a cultural viewpoint. Diversity is an integral part of learning about the world and its happenings. Montessori schools also work to respect the specific religious needs and desires of each member of the classroom. Offspring Montessori School has a Christian orientation but honours and respects all religions."
  },
  {
    question: "What about transition to traditional schools?",
    answer:
      "A Montessori environment naturally fosters inner discipline, self motivation, love of learning and a sense of order, the skills necessary for successful learning. These skills accompany them throughout their academic journey in any environment. A child’s first educational experiences affect the type of learner they will be throughout their lives. Good communication in the transition of a child to any new environment is essential. Both parents and a child’s former teacher must help facilitate a transition through realistic communication of a child’s development and skills."
  },
  {
    question: "Why does my child hardily bring homework?",
    answer:
      "New parents are often surprised when their child does not bring much work home from school. The following will explain why: In the Montessori classroom, a child’s work is very manipulative (hands on). The nature of our learning materials is such that the actual learning takes place as the child works with the materials. For this reason, there is very little need for paperwork. In Montessori education, paperwork is always an extension of the manipulative work done with the learning apparatus. Some children enjoy and benefit from this type of extension, for others, it is tedious and unnecessary. Because we carefully observe and note the progress of the individual child, we are aware and sensitive to each child’s academic preferences and needs. Paperwork is available to your child, but our curriculum is not based on it nor is the child unnecessarily encouraged to do it. For these reasons, your child will bring home very little work throughout the school year. It is important to the learning process that the parents understands the rationale behind this and do not place unnecessary expectation on a child to bring work home. Adults in our society tend to place high value on tangible evidence of work. We work for the product - the end result. Young children have very different motivations. Children will naturally work for the sheer enjoyment of the process. If you observe a class in session, you will see this phenomenon. It is truly amazing. Children love to work and will go about it diligently - with only the purpose of work itself. It is this love for work that brings the child so far in the Montessori classroom. Because of it, the child becomes self- motivated and self-directed. Because of it, the child knows he can do anything. No goal is too high."
  }
];

export default function Faq() {
  return (
    <div className="min-h-screen bg-[#f9f5f1] px-6 py-20 text-[#3a3a3a]">
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-[#545A56]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#F6BE00]"
          >
            <h2 className="text-xl font-semibold text-[#D88B3F] mb-2">
              {faq.question}
            </h2>
            <p className="text-[#5A5A5A]">{faq.answer}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          to="/contact"
          className="px-8 py-3 bg-[#D88B3F] text-white rounded-full hover:bg-[#C17830] transition duration-300 shadow-lg"
        >
          Contact Us for More Questions
        </Link>
      </div>
    </div>
  );
}
