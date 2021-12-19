import { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { isBrowser } from "react-device-detect";

import "./styles.scss";

function ProductCard(props) {
  const [OverlayContentShown, SetOverlayContentShown] = useState(false);

  const handleOverlayContentShow = () => {
    SetOverlayContentShown((prevState) => ({
      isOverlayContentShown: !prevState.isOverlayContentShown,
    }));
  };

  const cardClass = cn({
    "product-card": true,
    "product-card--active": OverlayContentShown.isOverlayContentShown,
  });

  return (
    <Link to={`/product/${props.product.id}`}>
      <div
        onMouseEnter={isBrowser ? handleOverlayContentShow : null}
        onMouseLeave={isBrowser ? handleOverlayContentShow : null}
        className={cardClass}
      >
        <div className="product-card__image">
          <img src={props.product.image.url} alt={props.product.name} />
        </div>
        <div className="product-card__title">{props.product.name}</div>
      </div>
    </Link>
  );
}

export default ProductCard;
