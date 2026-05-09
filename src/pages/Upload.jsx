import { useState } from "react";
import { useLocation } from "react-router-dom";
import { verifyMission } from "../AI/openai";



export default function Upload() {

  const location = useLocation();

  const mission =
    location.state?.mission || "Unknown Mission";

  const [image, setImage] = useState(null);

  const [base64, setBase64] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState("");

  const handleImageUpload = (event) => {

    const file = event.target.files[0];

    if (!file) return;

    // limit image size
    if (file.size > 2000000) {

      alert(
        "Image too large. Please upload image under 2MB."
      );

      return;
    }

    // preview image
    setImage(
      URL.createObjectURL(file)
    );

    // convert image to base64
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {

      const base64String =
        reader.result.split(",")[1];

      setBase64(base64String);
    };
  };

  async function handleVerify() {

    try {

      setLoading(true);

      setResult("");

      const response =
        await verifyMission(
          base64,
          mission
        );

      console.log(response);

      setResult(response);

    } catch (error) {

      console.error(error);

      setResult(
        "INVALID - AI verification failed"
      );

    } finally {

      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* Heading */}

      <h1 className="text-6xl font-bold text-green-400">
        AI Verification
      </h1>

      <p className="mt-4 text-2xl text-zinc-300">

        Mission:
        {" "}

        <span className="text-green-400 font-bold">
          {mission}
        </span>

      </p>

      {/* Upload Button */}

      <div className="mt-10">

        <label className="cursor-pointer">

          <span className="bg-zinc-900 border border-zinc-700 px-6 py-4 rounded-2xl inline-block hover:border-green-400 transition">

            Choose Image

          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

        </label>

      </div>

      {/* Image Preview */}

      {image && (

        <div className="mt-10">

          <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-3xl inline-block">

            <img
              src={image}
              alt="Preview"
              className="w-[400px] rounded-3xl object-cover"
            />

          </div>

          {/* Verify Button */}

          <button
            onClick={handleVerify}
            disabled={loading}
            className="mt-8 bg-green-500 hover:bg-green-400 transition text-black px-8 py-4 rounded-2xl font-bold text-xl disabled:opacity-50"
          >

            {loading
              ? "Checking with ChatGPT AI..."
              : "Verify with AI"}

          </button>

        </div>

      )}

      {/* AI Result */}

      {result && (

        <div
          className={`mt-10 p-6 rounded-3xl text-2xl font-bold border

          ${
            result.includes("VALID")
              ? "bg-green-500/10 text-green-400 border-green-500"
              : "bg-red-500/10 text-red-400 border-red-500"
          }
          `}
        >

          AI Result:
          {" "}
          {result}

        </div>

      )}

    </div>
  );
}