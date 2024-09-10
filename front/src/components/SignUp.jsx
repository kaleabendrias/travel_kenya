import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    });

    if (password !== confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPasswordError: "Passwords don't match. Please try again.",
      }));
      return;
    }

    if (!email || !password || !confirmPassword) {
      setError((prev) => ({
        ...prev,
        emailError: "Email is required!",
        passwordError: "Password is required!",
      }));
      return;
    }

    try {
      const response = await fetch('https://travel-utnq.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        console.log('Sign-up successful');
        // Reset the form
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        navigate('/signin');
      } else {
        const data = await response.json();
        setError((prev) => ({
          ...prev,
          emailError: data.message.includes("Email") ? data.message : "",
          passwordError: data.message.includes("Password") ? data.message : "",
        }));
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-xl mx-auto shadow-md p-6 bg-white rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
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
            <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-1 text-sm font-semibold text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
            />
            {error.confirmPasswordError && (
              <p className="text-red-500 text-sm mt-1">{error.confirmPasswordError}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm mb-2">or sign up with:</p>
          <div className="flex justify-center gap-4 flex-wrap">
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
      </div>
    </div>
  );
};

export default SignUp;
