import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";
import AboutPage from "../pages/AboutPage/AboutPage.jsx";
import BlogPage from "../pages/BlogPage/BlogPage.jsx";
import ContactPage from "../pages/ContactPage/ContactPage.jsx";

export const privateRoute = [
    {path: "/", component: HomePage, exact: true},
    {path: "/about", component: AboutPage, exact: true},
    {path: "/home", component: HomePage, exact: true},
    {path: "/blog", component: BlogPage, exact: true},
    {path: "/contact", component: ContactPage, exact: true},
]

export const publicRoute = [
    {path: "/", component: LoginPage, exact: true},
]