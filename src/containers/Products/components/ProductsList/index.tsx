import React from "react";
import Title from "../../../../components/Title";
import ProductCard from "../../../../components/ProductCard";
import cn from "classnames";
import { useAxiosGet } from "../../../../hooks/HttpRequests";
import { KEY_ITEMS } from "../../../../config/product_config";
import { IProduct } from "../../../../interfaces";

import "./styles.scss";

interface IProducts {
  error: boolean;
  data: any;
}

const ProductsList = () => {
  const limit = null;

  const { error } = KEY_ITEMS;

  const url = `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  const products: IProducts = useAxiosGet(url);

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
      <div className="container">

        <div className={"products-wrapper-header"}>
          <Title color="white" text="Popular Movies" />
        </div>
        {content}
      </div>
      </div>
    </div>
  );
};

export default ProductsList;
