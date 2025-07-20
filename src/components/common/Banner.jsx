import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 rounded-xl shadow-2xl overflow-hidden my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
          Ready to Upgrade Your Skills?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Join thousands of learners transforming their careers through quality education and hands-on experience.
        </p>
        <a
          href="/register"
          className="inline-block bg-white text-indigo-600 hover:text-white hover:bg-indigo-800 transition-all font-semibold px-6 py-3 rounded-full shadow-md"
        >
          🚀 Join Now
        </a>
      </div>

      {/* Decorative Floating Circles */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
    </section>
  );
};

export default Banner;
