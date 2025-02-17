import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import CartModal from "./components/CartModal/CartModal";
import "./App.css"; // Importamos los estilos

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Agregar productos al carrito con conteo
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    // 👇 Abrimos el modal automáticamente
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <h1 className="title">🛍️ Tienda de Productos 
        Electronicos</h1>

      {/* Botón para abrir el carrito */}
      <button className="cart-button" onClick={() => setIsModalOpen(true)}>
        🛒 Ver Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)})
      </button>

      <ProductList addToCart={addToCart} />

      {/* Modal del carrito */}
      {isModalOpen && <CartModal cart={cart} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default App;
