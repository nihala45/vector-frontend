import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import coverImg from "../../assets/lap-cover-image.avif"; // E-learning image


const FloatingInput = ({
  icon: Icon,
  type,
  placeholder,
  value,
  onChange,
  name,
  autoComplete,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative z-0 w-full group">
      <Icon
        className={`absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 transition-all duration-300 ${
          focused ? "text-violet-700 scale-110" : ""
        }`}
        size={20}
      />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        autoComplete={autoComplete}
        className="peer w-full pl-12 pr-4 py-3 text-sm bg-transparent border-b border-gray-300 text-gray-900 focus:outline-none focus:border-violet-700 transition-all"
        required
      />
      <label className="absolute left-12 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-sm peer-focus:text-violet-700 pointer-events-none">
        {placeholder}
      </label>
    </div>
  );
};

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // You can add backend integration here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-200 to-white relative overflow-hidden">
      {/* Top Left Logo */}
      <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
        <img src='./fevicon.svg' alt="Vector Icon" className="w-10 h-10" />
        <h3 className="text-2xl font-bold text-violet-700">Vector</h3>
      </div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl max-h-300 shadow-2xl rounded-3xl overflow-hidden z-20 bg-white">
        {/* Left Side Image with Overlay Text */}
        <div className="hidden md:flex md:w-1/2 relative">
          <img
            src={coverImg}
            alt="E-learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-violet-700/60 backdrop-blur-sm" />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Learn. Grow. Succeed.</h2>
            <p className="text-lg font-light">
              Empower your future, one click at a time.
            </p>
          </div>
        </div>

        {/* Right Side Register Form */}
        <div className="w-full md:w-1/2 p-6 md:p-14 space-y-6 bg-white relative z-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-violet-800">
              Join Our Platform
            </h2>
            <p className="text-sm text-gray-500">
              Create your account and start your journey
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <FloatingInput
              icon={User}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
            />
            <FloatingInput
              icon={Mail}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <FloatingInput
              icon={Lock}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
            <button
              type="submit"
              className="w-full py-3 bg-violet-700 hover:bg-violet-800 text-white font-semibold rounded-xl transition duration-300 shadow-md"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-violet-700 font-medium hover:underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
