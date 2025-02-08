import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";

export const privateRoute = [
    {path: "/", component: HomePage, exact: true},
]

export const publicRoute = [
    {path: "/", component: LoginPage, exact: true},
]