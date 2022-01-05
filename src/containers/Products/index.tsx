import ProductsList from "./components/ProductsList";
import NewList from "./components/NewList";
import Header from "../../components/Header";

const ProductsContainer = () =>{

  return(
    <>
    <Header />
    <ProductsList />
    <NewList />
    </>
  )
}

export default ProductsContainer;