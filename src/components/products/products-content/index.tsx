import { useState } from "react";

import productsTypes from "../../../utils/data/products-types";
import List from "./list";

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);

  return (
    <section className="products-content">
      <div className="products-content__intro">
        <h2>Products</h2>
        <button
          type="button"
          onClick={() => setOrderProductsOpen(!orderProductsOpen)}
          className="products-filter-btn"
        >
          <i className="icon-filters" />
        </button>
        <form
          className={`products-content__filter ${orderProductsOpen ? "products-order-open" : ""}`}
        >
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                {productsTypes.map((type) => (
                  <option key={type.id} label={type.name} />
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>

      <List />
    </section>
  );
};

export default ProductsContent;
