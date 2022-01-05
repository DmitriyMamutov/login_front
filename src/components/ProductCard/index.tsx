import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces";

import "./styles.scss";

type Props = {
  product: IProduct;
};

const imageUrl = process.env.REACT_APP_IMAGE_COMPRESSED_URL;

const ProductCard: FC<Props> = (props) => {
  return (
    <div className="product-card-wrapper">
    <Link to={`/product/${props.product.id}`}>
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={imageUrl + props.product.poster_path}
            alt={props.product.original_title}
          />

        </div>
        <div className="product-card__title">
          {props.product.original_title}
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProductCard;
