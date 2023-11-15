import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState({
    emailError: '',
    passwordError: ''
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
    e.preventDefault();
    setError({
      emailError: '',
      passwordError: ''
    })
    try {
    await fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then(data => {
      if (data.ok) {
        data.json().then(x => {
          console.log(x)
          const { token } = x;
          localStorage.setItem('token', token);
          navigate('/')
          console.log('Login successful');
        })
      } 
      // these are specific errors
      // if (data.status === 404) {
      //   data.json().then(x => setError(prev => ({...prev, emailError: x.message})))
      // }
      // if (data.status === 401) {
      //   data.json().then(x => setError(prev => ({...prev, passwordError: x.message})))
      // }

      //geneic error
      if (data.status !== 200) {
        data.json().then(setError(prev => ({...prev, passwordError: "user or pasword is wrong"})))
      }
    })
    // if (response.ok) {
    //   // Handle successful login, e.g., redirect to a dashboard
    //   const { token } = await response.json();
    //   localStorage.setItem('token', token);
    //   navigate('/')
    //   console.log('Login successful');
    // }
    // else {
      
    //   console.log('Login failed');
    // }
  } catch (error) {
    setError(error.message)
  }
};

console.log(error)
  return (
    <div className="container p-3 d-flex flex-column w-50">
      <div className='shadow-lg p-5 rounded-5 my-4'>
        <h2 className='lead display-4 d-flex justify-content-center mb-4'>Sign In</h2>
        <div className="mb-4">
          <label htmlFor="form1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="form1" value={email} onChange={handleEmailChange} />
          {error && <p className='mt-2 text-danger'>{error.emailError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="form2" className="form-label">Password</label>
          <input type="password" className="form-control" id="form2" value={password} onChange={handlePasswordChange} />
          {error && <p className='mt-2 text-danger'>{error.passwordError}</p>}
        </div>

        <div className="d-flex justify-content-between mx-3 mb-4 align-items-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value={rememberMe} id="flexCheckDefault" onChange={handleRememberMeChange} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <Link to={'#'}>Forgot password?</Link>
        </div>

        <button className="btn btn-primary btn-lg btn-block mb-4" onClick={handleSubmit}>Sign in</button>

        <div className="text-center">
          <p>Not a member? <Link to={'/signup'}>Register</Link></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
            <Link to={'https://www.facebook.com'} className='btn btn-outline-primary m-1' style={{ color: '#1266f1' }}>
              <FaFacebookF />
            </Link>

            <Link to={"https://www.twitter.com"} className='btn btn-outline-primary m-1' style={{ color: '#1266f1' }}>
              <FaTwitter />
            </Link>

            <Link to={'https://www.google.com'} className='btn btn-outline-primary m-1' style={{ color: '#1266f1' }}>
              <FaGoogle />
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
