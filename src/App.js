import {Routes, Route} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import Register from "./pages/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Questions from "./pages/Questions/Questions";
import Brands from "./pages/Brands/Brands";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import {useContext} from "react";
import {CustomContext} from "./utils/Context";
import OneProduct from "./pages/OneProduct/OneProduct";
import Profile from "./pages/Profile/Profile";
import Orders from "./pages/Orders/Orders";

function App() {

    const {user} = useContext(CustomContext)


  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/products'} element={<Products/>}/>
            <Route path={'/product/:id'} element={<OneProduct/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/questions'} element={<Questions/>}/>
            <Route path={'/brands'} element={<Brands/>}/>
            <Route path={'/orders'} element={<Orders/>}/>
            <Route path={'/myprofile'} element={<Profile/>}/>

            {
                !user.email.length && <Route path={'/login'} element={<Login/>}/>
            }
            {
                !user.email.length &&  <Route path={'/register'} element={<Register/>}/>
            }

            <Route path={'*'} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
