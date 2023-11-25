import { BrowserRouter ,Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
// import NavBar from "./components/NavBar"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Map from "./components/Map"
import WeatherMap from "./components/Weather"
import MainLayOut from "./components/MainLayOut"
import Custom404 from "./components/Custom404"


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainLayOut><Body /></MainLayOut>} /> 
        <Route path="/about" element={<MainLayOut><About /></MainLayOut>} />
        <Route path="/contactus" element={<MainLayOut><ContactUs /></MainLayOut>} />
        <Route path="/signup" element={<MainLayOut><SignUp /></MainLayOut>} />
        <Route path="/signin" element={<MainLayOut><SignIn /></MainLayOut>} />
        <Route path="/map" element={<MainLayOut><Map /></MainLayOut>} />
        <Route path="/weather" element={<MainLayOut><WeatherMap /></MainLayOut>} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
