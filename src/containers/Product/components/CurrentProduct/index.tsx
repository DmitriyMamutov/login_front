import cn from "classnames";
import Title from "../../../../components/Title";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../../../../hooks/HttpRequests";
import { KEY_ITEMS } from "../../../../config/product_config";

import "./styles.scss";

const CurrentProduct = () => {

  const { id } = useParams<{ id?: string }>();

  const { error } = KEY_ITEMS;

  const url = `${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;

  const imageUrl = process.env.REACT_APP_IMAGE_ORIGINAL_URL;

  const product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    content = <p>{error}</p>;
  }

  if (product.data) {
    content = (
      <>
        <div className="product-content">
          <div className="product-content__image">
            <img
              width={200}
              src={imageUrl + product.data["backdrop_path"]}
              alt={product.data["original_title"]}
            />
          </div>
          <div className="product-content-text">
            <Title color="white" text={product.data["original_title"]} />
            <div className="product-content-text__large product-content-text__silver">
              <b>Overview</b> {product.data["overview"]}
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={cn("page-wrapper", "product-wrapper")}>
      <div className="container">
      {content}
    </div>
    </div>
  );
};

export default CurrentProduct;
