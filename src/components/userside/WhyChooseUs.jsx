import React from "react";
import { Star, CheckCircle, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-indigo-600" />,
    title: "Industry-Relevant Curriculum",
    description: "Courses designed by experts to match current industry demands.",
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />,
    title: "Expert Mentors",
    description: "Learn from professionals with real-world experience and guidance.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
    title: "Secure & Trusted",
    description: "Thousands of learners trust us for safe and high-quality education.",
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />,
    title: "Supportive Community",
    description: "Join a growing network of learners, mentors, and career support groups.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">🚀 Why Choose Us?</h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
