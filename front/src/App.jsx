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
import Places from "./components/Places"
import Images from "./components/Images"
import ForgotPassword from "./components/ForgotPassword"
import NewPassword from "./components/NewPassword"
import Info from "./components/Info"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainLayOut>
                <Body />
              </MainLayOut>
            }
          />
          <Route
            path="/about"
            element={
              <MainLayOut>
                <About />
              </MainLayOut>
            }
          />
          <Route
            path="/contactus"
            element={
              <MainLayOut>
                <ContactUs />
              </MainLayOut>
            }
          />
          <Route
            path="/signup"
            element={
              <MainLayOut>
                <SignUp />
              </MainLayOut>
            }
          />
          <Route
            path="/signin"
            element={
              <MainLayOut>
                <SignIn />
              </MainLayOut>
            }
          />
          <Route
            path="/map"
            element={
              <MainLayOut>
                <Map />
              </MainLayOut>
            }
          />
          <Route
            path="/weather"
            element={
              <MainLayOut>
                <WeatherMap />
              </MainLayOut>
            }
          />
          <Route
            path="/places"
            element={
              <MainLayOut>
                <Places />
              </MainLayOut>
            }
          />
          <Route
            path="/place/:id"
            element={
              <MainLayOut>
                <Images />
              </MainLayOut>
            }
          />
          <Route
            path="/forgot"
            element={
              <MainLayOut>
                <ForgotPassword />
              </MainLayOut>
            }
          />
          <Route
            path="/forgot"
            element={
              <MainLayOut>
                <ForgotPassword />
              </MainLayOut>
            }
          />
          <Route
            path="/reset-password"
            element={
              <MainLayOut>
                <NewPassword />
              </MainLayOut>
            }
          />
          <Route path="/info" element={<MainLayOut><Info /></MainLayOut>} />
          <Route
            path="*"
            element={
              <MainLayOut>
                <Custom404 />
              </MainLayOut>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
