import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import coverImg from "../../assets/lap-cover-image.avif"; // ✅ Adjust this path if needed

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
    <div className="relative w-full group">
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

const Login = () => {
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
    console.log("Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 via-white to-indigo-50 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
        {/* Left side - image */}
        <div className="hidden md:flex md:w-1/2 relative">
          <img
            src={coverImg}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-violet-700/50 backdrop-blur-sm" />
          <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center p-8">
            <h2 className="text-3xl font-semibold mb-2">Learn. Grow. Succeed.</h2>
            <p className="text-lg font-light max-w-sm">
              Empower your future, one click at a time.
            </p>
          </div>
        </div>

        {/* Right side - form */}
        <div className="w-full md:w-1/2 px-6 py-10 md:p-14 space-y-6 relative z-20">
          {/* Logo Centered */}
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3">
              <img src="/fevicon.svg" alt="Vector Icon" className="w-10 h-10" />
              <h3 className="text-3xl font-bold text-violet-700">Vector</h3>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Join Our Platform
            </h2>
            <p className="text-sm text-gray-500">
              Create your account and start your journey
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
           
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
            <button
              type="submit"
              className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition duration-300 shadow-md"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Don't Have an Account?{" "}
            <a
              href="/register"
              className="text-violet-600 font-medium hover:underline"
            >
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
