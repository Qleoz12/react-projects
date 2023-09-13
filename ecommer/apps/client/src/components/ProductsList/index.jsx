export const ProductList = ({ section, products, onProductChange }) => {
  //  const handleProductChange = (productId) => {
  //    onProductChange(productId);
  //  };

  return (
    <div className="product-list">
      <h2>{section}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.skuItemSeleccion}>
            <label>
              <input
                type="radio"
                name="selectedProduct"
                value={product.skuItemSeleccion}
                // onChange={(e) => handleProductChange(e)}
              />
              {product.ItemSeleccion} <br /> ${product.precioSeleccion}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

