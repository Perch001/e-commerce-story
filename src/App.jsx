import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "./store/productSlice.js";
import ProductList from "./components/products/ProductList.jsx";
import SideBar from "./components/products/SideBar.jsx";
import {fetchProductsCategories} from "./store/categoriesSlice.js";
import ProductItem from "./components/products/ProductItem.jsx";
import HomePage from "./components/pages/HomePage.jsx";
import AppRoute from "./components/AppRoute.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProducts())
      dispatch(fetchProductsCategories())
  }, [dispatch]);
  const selectUser = false
  return (
    <>
        <AppRoute />
        {/*<ProductItem />*/}
        {/*<div className="flex">*/}
        {/*    <SideBar />*/}
        {/*    <ProductList />*/}
        {/*</div>*/}
    </>
  )
}

export default App
