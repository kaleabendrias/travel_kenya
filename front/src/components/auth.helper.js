import Cookies from "js-cookie";
import axios from "axios";

export async function isAuthenticated() {
  const token = localStorage.getItem("token") || null;
  const cookieToken = Cookies.get("session") || null;

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
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  return false;
}
