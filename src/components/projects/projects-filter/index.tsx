import { useState } from "react";

import productsBrands from "../../../utils/data/products-colors";
import productsSizes from "../../../utils/data/products-sizes";
// data
import Checkbox from "./form-builder/checkbox";

const ProductsFilter = () => {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const addQueryParams = () => {
    // query params changes
  };

  return (
    <form className="products-filter" onChange={addQueryParams}>
      <button
        type="button"
        onClick={() => setFiltersOpen(!filtersOpen)}
        className={`products-filter__menu-btn ${filtersOpen ? "products-filter__menu-btn--active" : ""}`}
      >
        Add Filter <i className="icon-down-open" />
      </button>

      <div
        className={`products-filter__wrapper ${filtersOpen ? "products-filter__wrapper--open" : ""}`}
      >
        <div className="products-filter__block">
          <button type="button">Product type</button>
          <div className="products-filter__block__content">
            {productsBrands.map((type) => (
              <Checkbox key={type.id} name="product-type" label={type.name} />
            ))}
          </div>
        </div>
        <div className="products-filter__block">
          <button type="button">Supplier</button>
          <div className="products-filter__block__content">
            {productsSizes.map((type) => (
              <Checkbox key={type.id} name="product-type" label={type.label} />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductsFilter;
