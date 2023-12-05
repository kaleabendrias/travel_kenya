import Cookies from "js-cookie";
export function isAuthenticated() {
  const token = localStorage.getItem("token");
  const cookieToken = Cookies.get('session')
  console.log(cookieToken);
  if (token || cookieToken) {
    return true;
  }
  return false;
}
