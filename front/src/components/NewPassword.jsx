import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FaSpinner } from "react-icons/fa";

const NewPassword = () => {
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    e.preventDefault();
    const token = searchParams.get("token");
    console.log(typeof token, token);
    setError("");
    if (password.trim() === "" || confirmPassword.trim() === "") {
      setError("Please enter a value");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      setLoading(true);
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
        setLoading(false);
        console.log(data);
        console.log("Password updated successfully");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Card className="mx-auto w-full max-w-xl shadow-md p-6 rounded-lg">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">Password Reset</h2>
        </CardHeader>
        <CardContent>
          <p className=" mb-6 text-center">
            Enter your new password and confirm it to reset your account password.
          </p>
          <form onSubmit={handleChange}>
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter new password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {loading ? (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              <FaSpinner size={25} className="animate-spin flex justify-center w-full"/>
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Change Password
            </button>
          )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/signin" className="text-sm">
            Login
          </Link>
          <Link to="/signup" className="text-sm">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewPassword;