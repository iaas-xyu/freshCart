import { Routes, Route } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useState, useEffect } from "react";

import NavigationBar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "../pages/home";
import Shop from "../pages/shop";
import About from "../pages/about";
import Service from "../pages/service";
import Contact from "../pages/contact";
import DetailProduct from "../pages/detailProduct";
import Halaman404 from "../pages/Halaman404";
import Cart from "../pages/cart";



function App() {
  const [cart, setCart] = useState([]);

  // menambah/mengupdate item di keranjang
  const handleAddToCart = (product, qty) => {
    console.log("Produk diterima:", product);
    console.log("Jumlah diterima:", qty);
    setCart((prevCart) => {
      // cek apakah item apakah yang ditambahkan ada di cart
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id,
      );

      if (existingIndex !== -1) {
        return prevCart.map((item) =>
          item.id === product.id ? {...item, quantity: item.quantity + qty,} : item,
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: qty,
          image: product.image,
        },
      ];
    });
  };
  useEffect(() => {
    console.log("Isi cart terbaru:", cart);
  }, [cart]);

  // Remove Item
  const handleRemoveItem = (id) => {
  setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Remove Cart
  const handleClearCart = (cart) =>{
    setCart([])
  }

  // Update Qty
  const handleUpdateQty = (id, newQty) => {
    if (newQty <= 0 ){
      haldleRemoveItem(id)
    } else if (newQty > 0 ) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQty } : item,
        ),
      );
    }
  };



  return (
    <div className="">
      <Navbar />
      <div className="mx-auto w-[90%] max-w-7xl mt-18">
        <NavigationBar cart={cart} />
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/Shop" element={<Shop onAddToCart={handleAddToCart} />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/DetailProduct/:id" element={<DetailProduct onAddToCart={handleAddToCart} />} />
          <Route path="/Cart" element={
              <Cart cart={cart} onUpdateQuantity={handleUpdateQty} onHandleRemoveItem={handleRemoveItem}  onHandleClear={handleClearCart}/>}
          />
          <Route path="*" element={<Halaman404 />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
