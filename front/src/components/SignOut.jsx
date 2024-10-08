import Cookies from "js-cookie";

const SignOut = () => {
  function handleSubmit() {
    localStorage.removeItem("token");

    const cookies = Object.keys(Cookies.get());
    cookies.forEach((cookie) => Cookies.remove(cookie));
    window.location.href = "/signin";
  }

  return (
    <button
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={handleSubmit}
    >
      SignOut
    </button>
  );
};

export default SignOut;
