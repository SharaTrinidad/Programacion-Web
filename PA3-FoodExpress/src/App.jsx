import { useState } from "react";

import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CartPage from "./pages/CartPage";
import TrackingPage from "./pages/TrackingPage";

import CartService from "./services/CartService";

function App() {

  const [cart, setCart] = useState([]);

  const [orderStarted, setOrderStarted] =
    useState(false);

  const [orderId, setOrderId] = useState(0);

  const addToCart = (product) => {

    const updatedCart =
      CartService.addProduct(product);

    setCart([...updatedCart]);

    alert(`${product.title} agregado al carrito 🛒`);

  };

  const removeFromCart = (id) => {

    const updatedCart =
      CartService.removeProduct(id);

    setCart([...updatedCart]);

  };

  const confirmOrder = () => {

      if (cart.length === 0) {

        alert("Agrega productos al carrito");
        return;

      }

      setOrderId(prev => prev + 1);

      setOrderStarted(true);

      alert("Pedido confirmado 🚚");

      CartService.clearCart();
      setCart([]);

  };

  return (

    <>

      <Navbar cart={cart} />

      <div id="inicio">
        <Home />
      </div>

      <div id="menu">
        <Menu addToCart={addToCart} />
      </div>

      <div id="carrito">
        <CartPage
          cart={cart}
          removeFromCart={removeFromCart}
          subtotal={CartService.calculateSubtotal()}
          igv={CartService.calculateIGV()}
          total={CartService.calculateTotal()}
          confirmOrder={confirmOrder}
        />
      </div>

      {
        orderStarted &&
        <TrackingPage key={orderId} />
      }

    </>

  );

}

export default App;