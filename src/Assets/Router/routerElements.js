import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../Pages/HomePage";
import { MainPage } from "../../Pages/MainPage";
import { CartPage } from "../../Pages/CartPage";
import { PageIsNotDefined } from "../../Pages/PageIsNotDefined";

export const routerElements = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
        errorElement:<PageIsNotDefined/>
    },
    {
        path:'/pizza-heaven/main',
        element:<MainPage/>
    },
    {
        path:'/pizza-heaven/main/cart',
        element:<CartPage/>
    }
])