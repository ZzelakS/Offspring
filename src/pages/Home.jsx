import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoSwiper from '../components/LogoSwiper';

const heroImages = [
  '/Music Room.jpeg',
  '/Laboratory.jpg',
  '/Sick Bay.jpeg',
  '/Playroom.jpeg',
  '/Lounge.jpeg'
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f5f1] text-[#3a3a3a]">
      {/* Hero Section with Background Carousel */}
      <div className="relative h-[90vh] overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={heroImages[current]}
            src={heroImages[current]}
            alt="Montessori Background"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white drop-shadow-xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Offspring Montessori School
          </motion.h1>
          <motion.p
            className="mt-4 text-xl text-[#F6BE00] italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Uncovering the potentials in your child!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              to="/admissions"
              className="inline-block mt-6 px-8 py-3 bg-[#D88B3F] text-white text-lg rounded-full hover:bg-[#C17830] transition duration-300 shadow-lg"
            >
              Enrol
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Sections */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold mb-6 text-[#545A56]">
          Why Choose Montessori?
        </h2>
        <div className="prose prose-lg mx-auto mb-10 text-[#5A5A5A]">
          <p>
            Offspring Montessori nurtures the whole child by fostering independence, creativity, and a lifelong love for learning. With dedicated staff, a rich curriculum, and an environment that promotes growth, our children thrive academically, socially, and emotionally.
          </p>
        </div>
        <Link
          to="/about"
          className="text-[#D88B3F] font-medium underline hover:text-[#C17830] transition"
        >
          Learn More About Us
        </Link>
      </section>

      <section className="bg-[#f6f1ec] px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#545A56]">
          Our Core Programs
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Infant (3 - 12 months)",
              description:
                "Runs from 7:00am till 6:00pm with a 1:3 adult-to-child ratio. Offers a nurturing space that fosters early development and trust."
            },
            {
              title: "Toddler (1 - 3 years)",
              description:
                "Structured Montessori program with emphasis on independence, early language skills, and social interaction."
            },
            {
              title: "Early Childhood (3 - 6 years)",
              description:
                "Comprehensive Montessori curriculum including Practical Life, Sensorial, Math, Language, and Cultural activities."
            }
          ].map((program, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-8 rounded-2xl border-t-4 border-[#F6BE00] transform transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#545A56]">
                {program.title}
              </h3>
              <p className="text-[#5A5A5A]">{program.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/programs"
            className="px-8 py-3 bg-[#D88B3F] text-white rounded-full hover:bg-[#C17830] transition duration-300 shadow-lg"
          >
            Explore All Programs
          </Link>
        </div>
      </section>
          <section>
            <LogoSwiper/>
          </section>
      <section className="bg-white px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#545A56]">
          What Makes Us Special
        </h2>
        <div className="prose prose-lg max-w-5xl mx-auto text-[#5A5A5A] md:text-left text-center">
          <p>
            At Offspring Montessori, our mission is to create a dynamic, independent learning environment that is hands-on and student-driven. Children develop inner-discipline, creativity, and a love of learning. Our approach fosters self-motivation, emotional growth, and critical thinking.
          </p>
          <p>
            The curriculum is built around Dr. Maria Montessori’s proven method, offering enriched learning in Practical Life, Sensorial Work, Language, Math, and Cultural Studies. We believe in cultivating grace, courtesy, and a respect for others in every child.
          </p>
          <p>
            Our qualified staff are dedicated Montessori professionals and nurturing caregivers who partner with parents to create a safe, engaging, and inspiring learning environment.
          </p>
        </div>
      </section>

      <section className="bg-[#fff9f4] px-6 py-20">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#545A56]">
          What Parents Are Saying
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              name: "Mrs. Adebayo",
              quote:
                "Offspring Montessori transformed my daughter's learning journey. She's more confident, independent, and happy!"
            },
            {
              name: "Mr. Okoro",
              quote:
                "The staff is phenomenal and the environment is warm and secure. My son looks forward to school every day."
            },
            {
              name: "Mrs. Bello",
              quote:
                "From toddler to early childhood, we've seen nothing but growth and excellence. Highly recommended!"
            }
          ].map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-8 rounded-2xl border border-[#f6e0c7] transform transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl"
            >
              <p className="italic text-[#444]">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-[#D88B3F]">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-white">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#545A56]">
          Our Moments in Pictures
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={`/Gallery${num}.jpeg`}
                alt={`Gallery ${num}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="#"
            className="px-8 py-3 bg-[#D88B3F] text-white rounded-full hover:bg-[#C17830] transition duration-300 shadow-lg"
          >
            View Full Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
