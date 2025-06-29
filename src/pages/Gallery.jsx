import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const images = [
  { src: '/Music Room.jpeg', label: 'Music Room' },
  { src: '/Gallery3.jpeg', label: 'After School Multipurpose Room' },
  { src: '/Sick Bay.jpeg', label: 'Sick Bay' },
  { src: '/Daycare3.jpeg', label: 'Crèche( 3-12month) Feeding and Sleeping area' },
  { src: '/Lounge.jpeg', label: 'After School/Indoor Play Room' },
  { src: '/Toilet.jpeg', label: 'Child Size Toilet' },
  { src: '/Playground.jpeg', label: 'Outdoor Play Area' },
  { src: '/Our Reception.jpeg', label: 'Our Reception' },
  { src: '/Crèche kitchenette.jpeg', label: 'Crèche Kitchenette' },
  { src: '/Art room.jpeg', label: 'Art Room' },
  { src: '/Montessori early childhood class (3 -6 years ).jpeg', label: 'Montessori Early Childhood Class (3-6 years)' },
  { src: '/Montessori Crèche class (3 -12 months).jpeg', label: 'Montessori Crèche Class (3-12 months)' },
  { src: '/Afterschool Sleeping Room.jpeg', label: 'Afterschool Sleeping Room' },
  { src: '/Gallery1.jpeg', alt: 'Gallery Image 1', label: 'Montessori Early Childhood Class (3-6 years)' },
  { src: '/Gallery4.jpeg', alt: 'Gallery Image 4', label: 'Crèche( 3-12month)' },
  { src: '/Daycare2.jpeg', alt: 'Daycare', label: 'Crèche( 3-12month) Feeding and Sleeping area (Alternate)' },
  { src: '/Laboratory.jpg', alt: 'Laboratory', label: 'Laboratory' },
  { src: '/Playroom.jpeg', alt: 'Playroom', label: 'Playroom' },
];

export default function Gallery() {
  return (
    <section className="bg-[#f6f1ec] pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-semibold mb-10 text-[#545A56] text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Our Gallery
      </motion.h2>

      {/* Brickwork/Masonry Style */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map(({ src, alt, label }, i) => (
          <motion.div
            key={src + i}
            className="relative overflow-hidden rounded-xl shadow-lg break-inside-avoid cursor-pointer group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <img
              src={src}
              alt={alt}
              className="w-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm md:text-base px-3 py-2 text-center opacity-100">
              {label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
