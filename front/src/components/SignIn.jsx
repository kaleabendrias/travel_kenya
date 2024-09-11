import { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    emailError: "",
    passwordError: "",
  });

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setError({
      emailError: "",
      passwordError: "",
    });
    try {
      const response = await fetch(
        "https://travel-utnq.onrender.com/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem("token", token);
        navigate("/");
        console.log("Login successful");
        setLoading(false);
      } else {
        const errorData = await response.json();
        setError((prev) => ({
          ...prev,
          passwordError: errorData.message || "User or password is wrong",
        }));
        setLoading(false);
      }
    } catch (error) {
      setError((prev) => ({
        ...prev,
        passwordError: "An error occurred while processing your request.",
      }));
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-xl mx-auto shadow-md p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            {error.emailError && (
              <p className="text-red-500 text-sm mt-1">{error.emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
            {error.passwordError && (
              <p className="text-red-500 text-sm mt-1">{error.passwordError}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <Link to="/forgot" className="text-blue-500 text-sm">
              Forgot password?
            </Link>
          </div>
          <Button
            type="submit"
            className={
              loading
                ? "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 animate-spin"
                : "w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            }
          >
            Sign In
          </Button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm mb-2">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-500">
              Register
            </Link>
          </p>
          <p className="text-sm mb-4">or sign in with:</p>
          <div className="flex justify-center gap-8 flex-wrap">
            <a
              href="https://www.facebook.com"
              className="text-blue-600 hover:text-blue-700"
            >
              <FaFacebookF size={30} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://travel-utnq.onrender.com/login"
              className="text-red-500 hover:text-red-600"
            >
              <FaGoogle size={30} />
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
