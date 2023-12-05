import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignOut = () => {
  const navigate = useNavigate();

  function handleSubmit() {
    // Remove token from local storage
    localStorage.removeItem('token');

    // Clear cookies
    const cookies = Object.keys(Cookies.get());
    cookies.forEach(cookie => Cookies.remove(cookie));
    navigate('/signin');
  }

  return (
    <button className="nav-link text-white justify" onClick={handleSubmit}>
      SignOut
    </button>
  );
}

export default SignOut;
