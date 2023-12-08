import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")

    const handleForgotten = async () => {
        setError("")
        const response = await fetch(
          "https://travel-utnq.onrender.com/api/auth/forgot-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
          if (response.ok) {
            const data_j = await response.json();
            setData(data_j.message)
            console.log(data)
          } else {
            const errorData = await response.json();
            setError(errorData.message || "Something went wrong")
            console.log(error);
          }
    }
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
            <label className="form-label">Email input</label>
            <input
              type="email"
              id="typeEmail"
              className="form-control my-3"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {error && <div className="text-danger display-6">{error}</div>}
          {data && <div className="text-success display-8">{data}</div>}
          <Link onClick={handleForgotten} className="btn btn-primary w-100">
            Reset password
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
    </div>
  );
}

export default ForgotPassword