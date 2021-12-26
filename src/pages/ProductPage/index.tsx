import { FC } from "react";
import cn from "classnames";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { connect } from "react-redux";
import { logoutUser } from "../../auth/actions/userActions";
import { useHistory, useParams } from "react-router-dom";
import { useAxiosGet } from "../../hooks/HttpRequests";
import { KEY_ITEMS } from "../../config/product_config";
import { ProductProps } from "../../types";

import "./styles.scss";

const Product: FC<ProductProps> = ({ logoutUser }) => {
  const history = useHistory();

  const { id } = useParams<{ id?: string }>();

  const {
    realName,
    placeOfBirth,
    groupAffiliation,
    publisher,
    firstAppearence,
    occupation,
    error,
  } = KEY_ITEMS;

  const url = `https://www.superheroapi.com/api.php/3113867145563590/${id}`;

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
              src={product.data["image"]["url"]}
              alt={product.data["name"]}
            />
          </div>
          <div className="product-content-text">
            <Title color="white" text={product.data["name"]} />
            <div className="product-content-text__large product-content-text__silver">
              <b>{realName}</b> {product.data["biography"]["full-name"]}
            </div>
            <div className="product-content-text__medium product-content-text__silver">
              <b>{placeOfBirth}</b>{" "}
              {product.data["biography"]["place-of-birth"]}
            </div>
            <div className="product-content-text__medium product-content-text__silver">
              <b>{groupAffiliation}</b>
              {product.data["connections"]["group-affiliation"]}
            </div>
            <div className="product-content-text__medium product-content-text__grey">
              <b>{publisher}</b> {product.data["biography"]["publisher"]}
            </div>
            <div className="product-content-text__medium product-content-text__grey">
              <b>{firstAppearence}</b>
              {product.data["biography"]["first-appearance"]}
            </div>
            <div className="product-content-text__large">
              <b>{occupation}</b> {product.data["work"]["occupation"]}
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

export default connect(null, { logoutUser })(Product);
