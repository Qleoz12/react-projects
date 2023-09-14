export const ProductList = ({ detail }) => {

  return (
    <div className="product-list">

      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="selectedProduct"
              value={detail.skuItemSeleccion}
            // onChange={(e) => handleProductChange(e)}
            />
            {detail.ItemSeleccion} <br /> ${detail.precioSeleccion}
          </label>
        </li>
      </ul>
    </div>
  );
}

