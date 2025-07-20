import React, { useState, useEffect, useRef } from "react";

const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (resendTimer > 0) {
      const interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [resendTimer]);

  const handleResend = () => {
    setResendTimer(30);
    setOtp(["", "", "", ""]);
  };

  const handleSubmit = () => {
    console.log("Entered OTP:", otp.join(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EAE6FF] to-[#F4F2FC] px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl px-8 py-10 animate-fade-in">
        <div className="flex flex-col items-center mb-6">
           <img src="/fevicon.svg" alt="Vector Icon" className="w-10 h-10" />
          <h1 className="text-2xl font-extrabold text-violet-700">Vector</h1>
        </div>

        <h2 className="text-lg font-semibold text-violet-600 text-center mb-2">
          OTP Verification
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Please enter the 4-digit code sent to your email/phone
        </p>

        <div className="flex justify-center space-x-3 mb-5">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-2xl text-center border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all duration-200 bg-white shadow-sm"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2.5 rounded-xl shadow-md transition"
        >
          Verify OTP
        </button>

        <div className="mt-4 text-center text-sm text-gray-600">
          {resendTimer > 0 ? (
            <span>Resend OTP in {resendTimer}s</span>
          ) : (
            <button
              onClick={handleResend}
              className="text-violet-600 hover:underline font-medium"
            >
              Resend OTP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
