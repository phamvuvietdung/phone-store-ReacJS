import './App.css';
import Header from './components/home/Header';
import Home from './pages/Home';
// dùng thư viện react-router-dom để chuyển trang
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import NoPage from './pages/NoPage'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <div className="cellphone-container">
      {/* Bọc các trang trong thẻ browser router để chuyển trang.
      hoặc Bọc toàn bộ thẻ app trong file index.js cũng được*/}
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/:product/:id" element={<ProductDetails/>}/>
            <Route path='/*' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
