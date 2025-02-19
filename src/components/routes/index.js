import WelcomePage from "../pages/WelcomePage.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";
import ShopPage from "../pages/ShopPage/ShopPage.jsx";
import ProductItem from "../products/ProductItem.jsx";
import BasketPage from "../pages/Basket/BasketPage.jsx";

export const privateRoute = [
    {path: "/", component: WelcomePage, exact: true},
    {path: "/about", component: AboutPage, exact: true},
    {path: "/shop", component: ShopPage, exact: true},
    {path: "/blog", component: BlogPage, exact: true},
    {path: "/contact", component: ContactPage, exact: true},
    {path: "/shop/product/:id", component: ProductItem, exact: true},
    {path: "/basket", component: BasketPage, exact: true},
]

export const publicRoute = [
    {path: "/", component: LoginPage, exact: true},
]