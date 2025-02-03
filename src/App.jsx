import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "./store/productSlice.js";
import ProductList from "./components/products/ProductList.jsx";
import SideBar from "./components/products/SideBar.jsx";
import {fetchProductsCategories} from "./store/categoriesSlice.js";
import ProductItem from "./components/products/ProductItem.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProducts())
      dispatch(fetchProductsCategories())
  }, [dispatch]);
  return (
    <>
        <ProductItem />
        {/*<div className="flex">*/}
        {/*    <SideBar />*/}
        {/*    <ProductList />*/}
        {/*</div>*/}
    </>
  )
}

export default App
