import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const NewPassword = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  

  const handleChange = async (e) => {
    e.preventDefault()
    const token = searchParams.get("token")
    console.log(typeof(token), token)
    setError("");
    if (password.trim() === "" || confirmPassword.trim() === "") {
        setError("Please enter a value")
        return;
    }
    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
    }
    const response = await fetch(
      "https://travel-utnq.onrender.com/api/auth/updatePassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, confirmPassword, token }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      console.log("Email verification sent");
    } else {
      const errorData = await response.json();
      setError(errorData.message || "Something went wrong");
      console.log(error);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card text-center shadow-lg"
        style={{
          width: "500px",
          height: "auto",
          margin: "10% 0",
          padding: "20px",
        }}
      >
        <div
          className="card-header h5 text-white h-full"
          style={{
            background:
              "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
            backgroundSize: "cover",
          }}
        >
          Password Reset
        </div>
        <div className="card-body px-5">
          <p className="card-text py-2">
            Enter your email address and we&apos;ll send you an email with
            instructions to reset your password.
          </p>
          <div className="form-outline">
            <label className="form-label">Password input</label>
            <input
              type="email"
              id="typeEmail"
              className="form-control my-3"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <label className="form-label">Confirm Password input</label>
            <input
              type="email"
              id="typeEmail"
              className="form-control my-3"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <div className="text-danger display-8">{error}</div>}
          <Link onClick={handleChange} className="btn btn-primary w-100">
            Change Password
          </Link>
          <div className="d-flex justify-content-between mt-4">
            <Link to={"/signin"} className="">
              Login
            </Link>
            <Link to={"/signup"} className="">
              Register
            </Link>
          </div>
        </div>
      </div>
  );
};

export default NewPassword;
