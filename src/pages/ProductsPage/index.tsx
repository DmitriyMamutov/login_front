import React, { FC } from "react";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { connect } from "react-redux";
import { logoutUser } from "../../auth/actions/userActions";
import { useHistory } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import cn from "classnames";
import { useAxiosGet } from "../../hooks/HttpRequests";
import { KEY_ITEMS } from "../../config/product_config";

import "./styles.scss";

type Props = {
  logoutUser: any;
};

type Products = {
  error: boolean;
  data: any;
};


interface IProduct {
  id: string;
  name: string;
  image: { url: string };
}

const ProductsPage: FC<Props> = ({ logoutUser }) => {
  const limit = 21;

  const history = useHistory();
  const { error } = KEY_ITEMS;

  const url = `https://www.superheroapi.com/api.php/3113867145563590/search/man`;

  const products: Products = useAxiosGet(url);

  let content = null;

  if (products.error) {
    content = <p>{error}</p>;
  }

  if (products.data) {
    content = (
      <div className="products-list">
        {products.data.results
          .slice(0, limit ? limit : products.data.results.length)
          .map((product: IProduct) => {
            return (
              <React.Fragment key={product.id}>
                <ProductCard product={product} />
              </React.Fragment>
            );
          })}
      </div>
    );
  }
  return (
    <div>
      <div className={cn("page-wrapper", "products-wrapper")}>
        <div className={"products-wrapper-header"}>
          <Title color="white" text="Superheroes" />
          <Button variant="logout" onClick={() => logoutUser(history)} />
        </div>
        {content}
      </div>
    </div>
  );
};

export default connect(null, { logoutUser })(ProductsPage);
