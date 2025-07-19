import React from "react";

const courses = [
  {
    title: "Python Programming",
    description: "Learn the basics of Python programming and build real-world projects.",
    image: "https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg",
  },
  {
    title: "Data Science",
    description: "Explore data analysis, visualization, and machine learning techniques.",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Web Development",
    description: "Become a full-stack developer using HTML, CSS, JS, and React.",
    image: "https://i.ytimg.com/vi/2K6dj7vHdzA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBIrBzmY8wt86Wc6FmNyaQTi_WZeg",
  },
  {
    title: "AI & Machine Learning",
    description: "Master AI techniques and build intelligent systems using Python.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
];

const CoursePreview = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 to-purple-100 md:px-20  py-12 px-2 md:px-20 ">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">🌟 Our Top Courses</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePreview;
