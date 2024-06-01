import { Layout } from "../../components/Layout/Layout";
import { CatalogPage  } from "../../pages/CatalogPage/CatalogPage";
import { Favorite } from "../../pages/Favorite/Favorite";
import { Home } from "../../pages/Home/Home";

export const routes = [
    {
        element: <Layout />,
        path: "/",
        children:
            [
                {
                    element: <Home />,
                    path: "/"
                },
                {
                    element: <CatalogPage />,
                    path: "/catalog"
                },
                {
                    element: <Favorite />,
                    path: "/favorite"
                }
            ]
    }
]