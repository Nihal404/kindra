import { useState } from "react";

import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "../firebase";

export default function Login() {

  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");

  const [confirmation, setConfirmation] =
    useState(null);

  const setupRecaptcha = () => {

    window.recaptchaVerifier =
      new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
  };

  const sendOtp = async () => {

    try {

      setupRecaptcha();

      const appVerifier =
        window.recaptchaVerifier;

      const result =
        await signInWithPhoneNumber(
          auth,
          "+91" + phone,
          appVerifier
        );

      setConfirmation(result);

      alert("OTP Sent 🚀");

    } catch (error) {

      console.log(error);

      alert(error.message);
    }
  };

  const verifyOtp = async () => {

    try {

      await confirmation.confirm(otp);

      alert("Login Successful 🚀");

      window.location.href = "/home";

    } catch {

      alert("Invalid OTP");
    }
  };

  return (

    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold text-green-400">
        Kindra
      </h1>

      <p className="text-zinc-400 mt-4">
        Phone OTP Login
      </p>

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
        className="mt-10 w-full max-w-sm p-4 rounded-2xl bg-zinc-900 border border-zinc-700 outline-none"
      />

      <button
        onClick={sendOtp}
        className="mt-5 w-full max-w-sm bg-green-500 text-black p-4 rounded-2xl font-bold"
      >
        Send OTP
      </button>

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) =>
          setOtp(e.target.value)
        }
        className="mt-5 w-full max-w-sm p-4 rounded-2xl bg-zinc-900 border border-zinc-700 outline-none"
      />

      <button
        onClick={verifyOtp}
        className="mt-5 w-full max-w-sm bg-green-500 text-black p-4 rounded-2xl font-bold"
      >
        Verify OTP
      </button>

      <div id="recaptcha-container"></div>

    </div>
  );
}