"use client";
import React, { useState } from "react";
import Image from "next/image";
import chair from "../../image/chair1.jpg";

function ForgotPassword() {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(".........................", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send reset email");
      }

      setEmailSent(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6">
        <div className="flex items-center justify-center">
          <Image
            src={chair}
            alt="Chair"
            width={500}
            height={400}
            className="rounded"
          />
        </div>

        <div>
          {emailSent ? (
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-4">Check your email</h1>
              <p className="text-gray-500 mb-6">
                We have sent a password reset link to{" "}
                <span className="font-semibold">{email}</span>
              </p>
              <button
                onClick={() => setEmailSent(false)}
                className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none hover:bg-gray-800 transition"
              >
                Resend Email
              </button>
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-4">Forgot Password</h1>
              <p className="text-gray-500 mb-6">
                Enter your email to reset your password.
              </p>

              {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-3 py-2 p-2 rounded outline-none focus:outline-none border border-gray-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none hover:bg-gray-800 transition disabled:bg-gray-400"
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
