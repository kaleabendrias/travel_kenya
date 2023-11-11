import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"


function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
