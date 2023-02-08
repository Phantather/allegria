import {Routes, Route} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import Register from "./pages/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
