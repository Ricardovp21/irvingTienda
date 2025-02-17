import ProductItem from "../ProductItem/ProductItem";
import PropTypes from "prop-types";
import "./ProductList.css"; 

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Teléfono", price: 500 },
  { id: 3, name: "Auriculares", price: 100 },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      <h2 className="title">Nuestros Productos</h2>
      <div className="products-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
