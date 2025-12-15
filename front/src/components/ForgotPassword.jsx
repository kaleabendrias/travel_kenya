import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotten = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://travel-utnq.onrender.com/api/auth/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border">
        <div className="px-6 py-5 border-b">
          <h1 className="text-xl font-semibold text-gray-900">
            Reset your password
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Enter your email and we’ll send you reset instructions.
          </p>
        </div>

        <form onSubmit={handleForgotten} className="px-6 py-6 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-2">
              {error}
            </div>
          )}

          {message && (
            <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-2">
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black text-white py-2 text-sm font-medium hover:bg-gray-900 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        <div className="px-6 py-4 border-t text-center text-sm text-gray-600">
          <div className="flex justify-center gap-4">
            <Link to="/signin" className="text-black hover:underline">
              Login
            </Link>
            <Link to="/signup" className="text-black hover:underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
