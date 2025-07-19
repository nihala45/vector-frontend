import React from "react";

const testimonials = [
  {
    name: "Anjali R.",
    role: "Frontend Developer",
    feedback: "This course platform transformed my career. The content is top-notch!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul P.",
    role: "Data Analyst",
    feedback: "Excellent explanation and real-world examples. Truly recommend it!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Priya M.",
    role: "Machine Learning Enthusiast",
    feedback: "Loved the way concepts were broken down and explained.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">💬 What Our Learners Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <span className="text-sm text-gray-600">{testimonial.role}</span>
              </div>
            </div>
            <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
