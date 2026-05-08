import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebase";

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [otpArray, setOtpArray] = useState(new Array(6).fill(""));
  const [confirmation, setConfirmation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(45);

  const otpBoxRefs = useRef([]);

  // Timer logic for the "Resend OTP" countdown
  useEffect(() => {
    let interval;
    if (confirmation && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [confirmation, timer]);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        { size: "invisible" }
      );
    }
  };

  const sendOtp = async () => {
    if (!phone || phone.length < 10) return alert("Please enter a valid 10-digit phone number.");
    setIsLoading(true);
    
    try {
      setupRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, "+91" + phone, appVerifier);
      setConfirmation(result);
      setTimer(45); // Reset timer
      alert("OTP Sent 🚀");
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    const finalOtp = otpArray.join("");
    if (finalOtp.length !== 6) return alert("Please enter the full 6-digit OTP.");
    setIsLoading(true);

    try {
      await confirmation.confirm(finalOtp);
      alert("Login Successful 🚀");
      
      // Redirect to home page after successful login
      navigate("/home");
      
    } catch {
      alert("Invalid OTP");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle typing in the 6-box OTP grid
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;

    const newOtpArray = [...otpArray];
    newOtpArray[index] = element.value;
    setOtpArray(newOtpArray);

    // Auto-focus next input box if a number was typed
    if (element.value !== "" && index < 5) {
      otpBoxRefs.current[index + 1].focus();
    }
  };

  // Handle backspace to move focus to the previous box
  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      otpBoxRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="flex min-h-screen font-sans bg-white text-slate-800">
      
      {/* LEFT PANEL */}
      <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 overflow-hidden transition-colors duration-500" style={{ backgroundColor: confirmation ? '#D2E3D6' : '#EAF5EC' }}>
        
        {/* Brand/Logo (Always visible) */}
        <div className="flex items-center gap-3 z-20">
          <div className="w-8 h-8 bg-[#1E5631] text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-sm">
            K
          </div>
          <h1 className="text-xl font-bold text-[#1E5631] leading-tight">Kindra</h1>
        </div>

        {/* --- VIEW 1: PHONE INPUT GRAPHIC --- */}
        {!confirmation ? (
          <div className="animate-fade-in flex-1 flex flex-col justify-center relative mt-12 mb-20 z-10">
            <div className="absolute w-[450px] h-[450px] bg-[#7BA68B] rounded-full opacity-90 self-center"></div>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=500" 
              alt="Planting Tree" 
              className="w-[280px] h-[280px] object-cover rounded-2xl shadow-xl z-10 self-center"
            />
            {/* Stat Widgets */}
            <div className="absolute top-10 left-10 bg-white/95 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 z-20">
              <span className="text-xl">🌳</span><span className="text-xs font-bold text-slate-700">52,000 Trees Planted</span>
            </div>
            <div className="absolute bottom-24 right-10 bg-white/95 px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-3 z-20">
              <span className="text-xl">🌍</span><span className="text-xs font-bold text-slate-700">12,000 Civic Heroes Joined</span>
            </div>
            
            <div className="mt-32">
              <h2 className="text-5xl font-black text-[#1E5631] tracking-tight mb-2">Do Good.</h2>
              <h2 className="text-5xl font-black text-[#1E5631] tracking-tight">Earn Karma.</h2>
            </div>
          </div>
        ) : (
          
        /* --- VIEW 2: OTP VERIFICATION GRAPHIC --- */
          <div className="animate-fade-in absolute inset-0 flex flex-col justify-end p-12 overflow-hidden z-0">
            {/* CSS Architectural Archway */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[600px] bg-[#C1D6C7] rounded-t-[175px] shadow-inner z-0 border-b-0"></div>
            
            {/* Text Card overlaying the arch */}
            <div className="bg-white/95 backdrop-blur-md p-8 rounded-3xl w-full max-w-sm shadow-xl z-10 mb-10 border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">Doing good feels beautiful.</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Join a community of civic-minded individuals making a positive impact without the friction.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* RIGHT PANEL (Login Form) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white relative">
        <div className="w-full max-w-[420px]">
          
          {!confirmation ? (
            /* --- STEP 1: PHONE INPUT --- */
            <div className="animate-fade-in">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-2">Welcome Back 👋</h2>
                <p className="text-slate-500 text-sm">Login to continue your journey</p>
              </div>

              <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
                <label className="block text-xs font-bold text-slate-500 mb-2">Phone Number</label>
                <div className="flex border border-slate-200 rounded-xl overflow-hidden focus-within:border-[#22C55E] focus-within:ring-2 focus-within:ring-emerald-100 transition-all mb-6 bg-white">
                  <div className="flex items-center gap-2 px-4 border-r border-slate-200">
                    <span className="text-lg">🇮🇳</span>
                    <span className="text-sm font-semibold text-slate-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    maxLength={10}
                    className="flex-1 py-3.5 px-4 outline-none text-sm font-medium"
                  />
                </div>

                <button
                  onClick={sendOtp}
                  disabled={isLoading}
                  className="w-full bg-[#22C55E] hover:bg-[#1ea34d] text-white py-3.5 rounded-xl font-bold transition-colors flex justify-center items-center gap-2"
                >
                  {isLoading ? "Sending..." : "Send OTP →"}
                </button>

                <div className="flex items-center gap-4 my-8">
                  <div className="h-px bg-slate-100 flex-1"></div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">OR</span>
                  <div className="h-px bg-slate-100 flex-1"></div>
                </div>

                <button className="w-full bg-white border border-slate-200 text-slate-600 py-3.5 rounded-xl font-bold hover:bg-slate-50 transition-colors flex justify-center items-center gap-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </button>
              </div>
            </div>
          ) : (

            /* --- STEP 2: OTP VERIFICATION CARD --- */
            <div className="animate-fade-in w-full">
              <div className="bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 text-center relative">
                
                <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center justify-center gap-3">
                  Verify Your<br/>Number <span className="text-[#22C55E] text-xl pb-1">🔓</span>
                </h2>
                <p className="text-xs text-slate-500 mt-4">OTP sent to +91 {phone}</p>
                <button 
                  onClick={() => { setConfirmation(null); setOtpArray(new Array(6).fill("")); }}
                  className="text-xs text-[#22C55E] font-semibold mt-1 hover:underline"
                >
                  Change number
                </button>

                {/* 6 Individual OTP Boxes */}
                <div className="flex justify-center gap-2 sm:gap-3 mt-8 mb-6">
                  {otpArray.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength={1}
                      value={data}
                      ref={(el) => (otpBoxRefs.current[index] = el)}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onKeyDown={(e) => handleOtpKeyDown(e, index)}
                      onFocus={(e) => e.target.select()}
                      className={`w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold rounded-xl border-2 outline-none transition-all ${
                        data !== "" ? "border-[#22C55E] bg-emerald-50" : "border-slate-200 bg-slate-50 focus:border-[#22C55E]"
                      }`}
                    />
                  ))}
                </div>

                <div className="text-xs font-semibold text-slate-500 mb-6">
                  Resend OTP in <span className="text-[#22C55E]">0:{timer < 10 ? `0${timer}` : timer}</span>
                </div>

                <button
                  onClick={verifyOtp}
                  disabled={isLoading || otpArray.join("").length !== 6}
                  className="w-full bg-[#22C55E] hover:bg-[#1ea34d] disabled:bg-emerald-300 text-white py-4 rounded-xl font-bold transition-colors flex justify-center items-center gap-2 mb-6"
                >
                  {isLoading ? "Verifying..." : "Verify & Login →"}
                </button>

                <button 
                  onClick={() => { setConfirmation(null); setOtpArray(new Array(6).fill("")); }}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition flex items-center justify-center gap-2 w-full"
                >
                  &larr; Back to Login
                </button>
              </div>
            </div>
          )}

          {/* Footer Links (Only visible on Step 1) */}
          {!confirmation && (
            <div className="mt-8 text-center animate-fade-in">
              <p className="text-sm font-medium text-slate-500 mb-2">
                Don't have an account? <a href="#" className="text-[#22C55E] hover:underline font-bold">Sign Up</a>
              </p>
              <p className="text-sm font-medium text-slate-500 mb-12">
                Having trouble? <a href="#" className="text-slate-700 hover:underline">Get Help</a>
              </p>
              <p className="text-[10px] text-slate-400 leading-relaxed px-4">
                By continuing, you agree to Kindra's <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </div>
          )}

        </div>
      </div>

      {/* Invisible Recaptcha Container */}
      <div id="recaptcha-container"></div>
    </div>
  );
}