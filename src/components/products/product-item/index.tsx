import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@/store";
import { toggleFavProduct } from "@/store/reducers/user";
import type { ProductTypeList } from "@/types";

const ProductItem = ({
  images,
  id,
  category,
  name,
  company,
}: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      }),
    );
  };

  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart" />
        </button>
        <img src={images ? images[0] : ""} alt="product" />
      </div>
      <div className="product__description">
        <span className="product__category">{category}</span>
        <h3>{name}</h3>
        <div className="product__price">
          <h4>{company}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
