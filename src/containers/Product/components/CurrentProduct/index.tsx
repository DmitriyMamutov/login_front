import { FC } from "react";
import cn from "classnames";
import Button from "../../../../components/Button";
import Title from "../../../../components/Title";
import { connect } from "react-redux";
import { logoutUser } from "../../../../auth/actions/userActions";
import { useHistory, useParams } from "react-router-dom";
import { useAxiosGet } from "../../../../hooks/HttpRequests";
import { KEY_ITEMS } from "../../../../config/product_config";
import { ProductProps } from "../../../../types";

import "./styles.scss";

const CurrentProduct: FC<ProductProps> = ({ logoutUser }) => {
  const history = useHistory();

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
      <div className={"product-wrapper-header"}>
        <Button variant="logout" onClick={() => logoutUser(history)} />
      </div>
      {content}
    </div>
  );
};

export default connect(null, { logoutUser })(CurrentProduct);
