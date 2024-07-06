import Navigation from "./components/navigation/Navigation"
import "../src/assets/App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Login from "./pages/login/Login.jsx"
import Cart from "./pages/Cart/Cart.jsx";
import Footer from "./components/footer/Footer.jsx";
const App=()=>

{
 
  return (
    <>
    <Navigation />
    <Routes>
    <Route path="/Signin" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Categories" element={<Categories/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
