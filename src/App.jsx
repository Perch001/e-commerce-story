import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchProducts} from "./store/productSlice.js";
import ProductList from "./components/products/ProductList.jsx";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(fetchProducts())
  }, [dispatch]);
  return (
    <>
      <ProductList />
    </>
  )
}

export default App
