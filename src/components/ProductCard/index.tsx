import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces";

import "./styles.scss";

type Props = {
  product: IProduct;
};

const imageUrl = "https://image.tmdb.org/t/p/original/";

const ProductCard: FC<Props> = (props) => {
  return (
    <Link to={`/product/${props.product.id}`}>
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={imageUrl + props.product.backdrop_path}
            alt={props.product.original_title}
          />
        </div>
        <div className="product-card__title">
          {props.product.original_title}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
