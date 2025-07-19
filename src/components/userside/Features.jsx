import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaChalkboardTeacher size={40} className="text-violet-600" />,
    title: "Expert Instructors",
    desc: "Learn from experienced educators who simplify complex topics and guide you step-by-step.",
  },
  {
    icon: <FaLaptopCode size={40} className="text-violet-600" />,
    title: "Practical Courses",
    desc: "Hands-on learning with real-world examples and exercises to strengthen your skills.",
  },
  {
    icon: <FaUsers size={40} className="text-violet-600" />,
    title: "Community Support",
    desc: "Join a strong community of learners, share knowledge, and grow together.",
  },
  {
    icon: <FaClock size={40} className="text-violet-600" />,
    title: "Flexible Learning",
    desc: "Learn anytime, anywhere with courses designed for your busy schedule.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-violet-600">Vector</span>?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Empower your learning with expert guidance, hands-on practice, and a supportive community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
