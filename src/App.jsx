import Navigation from "./components/navigation/Navigation"
import "../src/assets/App.css";
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Categories from "./pages/Categories/Categories.jsx";
import Account from "./pages/Account/Account.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Footer from "./components/footer/Footer.jsx";
const App=()=>

{
 
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Categories" element={<Categories/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Account" element={<Account/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
