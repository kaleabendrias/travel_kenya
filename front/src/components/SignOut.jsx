import { useNavigate } from "react-router-dom";
const SignOut = () => {
    const navigate = useNavigate();
    function handleSubmit () {
        localStorage.removeItem('token');
        navigate('/signin')
    }
  return (
    <button className="nav-link text-white justify" onClick={handleSubmit}>SignOut</button>
  )
}

export default SignOut;