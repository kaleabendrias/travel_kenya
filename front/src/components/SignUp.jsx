import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

    if (password === confirmPassword) {
      try {
        const response = await fetch('http://localhost:8080/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          // Handle successful sign-up, e.g., redirect to login or show a success message
          console.log('Sign-up successful');
          // Reset the form
          setEmail('');
          setPassword('');
          setConfirmPassword('');
          navigate('/signin')
        } else {
          // Handle sign-up failure, e.g., show an error message
          console.error('Sign-up failed');
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
      }
    } else {
      alert("Passwords don't match. Please try again.");
    }
  };

  return (
    <div className="container p-3 d-flex flex-column w-50">
      <div className='shadow-lg p-5 rounded-5 my-4'>
        <h2 className='lead display-4 d-flex justify-content-center mb-4'>Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="form1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="form1" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="form2" className="form-label">Password</label>
          <input type="password" className="form-control" id="form2" value={password} onChange={handlePasswordChange} />
        </div>

        <div className="mb-4">
          <label htmlFor="form2" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>

        <button className="btn btn-primary btn-lg btn-block mb-4" onClick={handleSubmit}>Sign Up</button>

        <div className="text-center">
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
            <button className='btn btn-outline-primary m-1' style={{ color: '#1266f1' }}>
              <FaFacebookF />
            </button>

            <button className='btn btn-outline-primary m-1' style={{ color: '#1266f1' }}>
              <FaTwitter />
            </button>

            <button className='btn btn-outline-primary m-1' style={{ color: '#1266f1' }}>
              <FaGoogle />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
