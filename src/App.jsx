import {useDispatch, useSelector} from "react-redux";
import {createContext, useContext, useEffect, useState} from "react";
import {fetchProducts} from "./store/productSlice.js";
import {fetchProductsCategories} from "./store/categoriesSlice.js";
import AppRoute from "./components/AppRoute.jsx";

const ListType = createContext(null);
function App() {
    const [isGridView, setIsGridView] = useState(true);
    const GridView = () => setIsGridView(true);
    const ListView = () => setIsGridView(false);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchProducts())
      dispatch(fetchProductsCategories())
  }, [dispatch]);
  return (
    <>
        <ListType.Provider value={{isGridView, GridView, ListView}}>
            <AppRoute />
        </ListType.Provider>
    </>
  )
}

export default App
export const useView = () => useContext(ListType)