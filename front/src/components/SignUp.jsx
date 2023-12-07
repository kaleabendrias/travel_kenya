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
    })
    

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
        })
        if (response.ok) {
          console.log('Sign-up successful');
          // Reset the form
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/signin');
        }
        else {
        // Handle sign-up failure
        console.log('Sign-up failed');
        const data = await response.json();
        console.log(data.message)

        if (data && data.message) {
          console.log("inside meeage")
          setError((prev) => ({
            ...prev,
            emailError: data.message.includes("Email") ? data.message : "",
            passwordError: data.message.includes("Password") ? data.message : "",
          }));
        }

      }
      
    } catch (error) {
      console.error('Error during sign-up:', error);
    }
  };
  useEffect(() => {
        console.log(error);
      }, [error]);

  return (
    <div className="container p-3 d-flex flex-column mw-50">
      <div className="shadow-lg p-5 rounded-5 my-4">
        <h2 className="lead display-4 d-flex justify-content-center mb-4">
          Sign Up
        </h2>
        <div className="mb-4">
          <label htmlFor="form1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="form1"
            value={email}
            onChange={handleEmailChange}
          />

          {error.emailError && (
            <div className="text-danger">{error.emailError}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="form2" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="form2"
            value={password}
            onChange={handlePasswordChange}
          />

          {error.passwordError && (
            <div className="text-danger">{error.passwordError}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="form2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />

          {error.confirmPasswordError && (
            <div className="text-danger">{error.confirmPasswordError}</div>
          )}
        </div>

        <button
          className="btn btn-primary btn-lg btn-block mb-4"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <div className="text-center">
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <button
              className="btn btn-outline-primary m-1"
              style={{ color: "#1266f1" }}
            >
              <FaFacebookF />
            </button>

            <button
              className="btn btn-outline-primary m-1"
              style={{ color: "#1266f1" }}
            >
              <FaTwitter />
            </button>

            <a href="https://travel-utnq.onrender.com/login">
              <button
                className="btn btn-outline-primary m-1"
                style={{ color: "#1266f1" }}
              >
                <FaGoogle />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
