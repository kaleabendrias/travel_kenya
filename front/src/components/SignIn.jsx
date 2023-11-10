import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-in logic here, such as calling an API or validating the data
    console.log('Form submitted:', { email, password, rememberMe });
    // Reset the form
    setEmail('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className="container p-3 d-flex flex-column w-50">
      <div className='shadow-lg p-5 rounded-5 my-4'>
        <h2 className='lead display-4 d-flex justify-content-center mb-4'>Sign In</h2>
        <div className="mb-4">
          <label htmlFor="form1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="form1" value={email} onChange={handleEmailChange} />
        </div>
        <div className="mb-4">
          <label htmlFor="form2" className="form-label">Password</label>
          <input type="password" className="form-control" id="form2" value={password} onChange={handlePasswordChange} />
        </div>

        <div className="d-flex justify-content-between mx-3 mb-4 align-items-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={rememberMe} id="flexCheckDefault" onChange={handleRememberMeChange} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <a href="!#">Forgot password?</a>
        </div>

        <button className="btn btn-primary btn-lg btn-block mb-4" onClick={handleSubmit}>Sign in</button>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
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

export default SignIn;
