import Cookies from "js-cookie";
export function isAuthenticated() {
  const token = localStorage.getItem("token") || null;
  const cookieToken = Cookies.get('session') || null;
  console.log(cookieToken);
  if (token || cookieToken) {
    return true;
  }
  return false;
}
