import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface IProduct {
  id: string;
  name: string;
  image: { url: string };
}

type Props = {
  product: IProduct;
};

const ProductCard: FC<Props> = (props) => {
  return (
    <Link to={`/product/${props.product.id}`}>
      <div className="product-card">
        <div className="product-card__image">
          <img src={props.product.image.url} alt={props.product.name} />
        </div>
        <div className="product-card__title">{props.product.name}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
