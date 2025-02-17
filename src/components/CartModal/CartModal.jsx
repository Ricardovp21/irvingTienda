import PropTypes from "prop-types";
import "./CartModal.css"; // Asegúrate de crear este archivo para los estilos

function CartModal({ cart, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>🛒 Carrito de Compras</h2>

        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price} x{product.quantity}
              </li>
            ))}
          </ul>
        )}

        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>


        
        <button className="pagar-button" onClick={onClose}>
          Pagar
        </button>
      </div>
    </div>
  );
}

CartModal.propTypes = {
  cart: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartModal;
