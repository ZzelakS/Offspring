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
  { src: '/Gallery1.jpeg', alt: 'Gallery Image 1' },
  { src: '/Gallery2.jpeg', alt: 'Gallery Image 2' },
  { src: '/Gallery3.jpeg', alt: 'Gallery Image 3' },
  { src: '/Gallery4.jpeg', alt: 'Gallery Image 4' },
  { src: '/Gallery5.jpeg', alt: 'Gallery Image 5' },
  { src: '/Gallery6.jpeg', alt: 'Gallery Image 6' },
  { src: '/Admissions.jpg', alt: 'Gallery Image 1' },
  { src: '/Daycare2.jpeg', alt: 'Gallery Image 2' },
  { src: '/Laboratory.jpg', alt: 'Gallery Image 3' },
  { src: '/Music Room.jpeg', alt: 'Gallery Image 4' },
  { src: '/Playroom.jpeg', alt: 'Gallery Image 5' },
  { src: '/Gallery6.jpeg', alt: 'Gallery Image 6' },
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
        {images.map(({ src, alt }, i) => (
          <motion.div
            key={src}
            className="overflow-hidden rounded-xl shadow-lg break-inside-avoid cursor-pointer"
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
          </motion.div>
        ))}
      </div>
    </section>
  );
}
