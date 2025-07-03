import React from "react";
import { motion, useAnimation } from "framer-motion";

const initialTestimonials = [
  {
    name: "Amit",
    message: "Muscle Force helped me track my progress and stay motivated!",
  },
  {
    name: "Priya",
    message: "The calorie calculator is super helpful and easy to use.",
  },
  {
    name: "Rahul",
    message: "Great UI and easy to navigate. I love the workout suggestions!",
  },
  {
    name: "Sneha",
    message: "Tracking my daily protein intake has never been easier.",
  },
  {
    name: "Vikram",
    message: "The progress charts keep me motivated every week.",
  },
  {
    name: "Anjali",
    message: "Simple, effective, and perfect for my fitness journey.",
  },
];

// Helper to duplicate testimonials for seamless looping
const marqueeTestimonials = [...initialTestimonials, ...initialTestimonials];

const Testimonials = () => {
  // Width of one testimonial card + gap (adjust if you change card width/gap)
  const cardWidth = 340; // px (min-w-[300px] + padding/gap)
  const gap = 24; // px (gap-6)
  const totalCards = marqueeTestimonials.length;
  const marqueeWidth = (cardWidth + gap) * totalCards;

  return (
    <div className=" py-8 px-4 rounded-lg my-8 overflow-hidden">
      <h2 className="text-5xl font-semibold text-center text-blue-700 my-20">
        What Our Users Say
      </h2>
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          style={{ width: marqueeWidth }}
          animate={{
            x: [0, -((cardWidth + gap) * initialTestimonials.length)],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          }}
        >
          {marqueeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-xs border rounded-lg shadow-md p-6 text-center flex-shrink-0"
            >
              <p className="text-lg italic text-gray-200">"{t.message}"</p>
              <p className="mt-2 font-semibold text-blue-600">- {t.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;