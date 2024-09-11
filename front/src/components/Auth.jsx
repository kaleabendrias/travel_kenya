import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AuthenticatedComponent = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // For loading state while checking auth

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem("token") || null;
      const cookieToken = Cookies.get("session") || null;

      // If token exists, make a request to backend to validate it
      if (token || cookieToken) {
        try {
          const response = await axios.get(
            "https://travel-utnq.onrender.com/checkSignin",
            {
              headers: {
                Authorization: `Bearer ${token || cookieToken}`,
              },
            }
          );

          if (response.status === 200) {
            setIsAuthenticated(true);
          }
        } catch (error) {
          console.error("Authentication check failed:", error);
          setIsAuthenticated(false);
        }
      }
      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Component /> : <Navigate to="/signin" />
};

export default AuthenticatedComponent;
