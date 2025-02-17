
import PropTypes from 'prop-types';


function Cart({ cart }) {
    return (
      <div>
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? <p>El carrito está vacío</p> : null}
        {cart.map((product, index) => (
          <div key={index}>
            <p>{product.name} - ${product.price}</p>
          </div>
        ))}
      </div>
    );
  }
  Cart.propTypes = {
    cart: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

  export default Cart;

  