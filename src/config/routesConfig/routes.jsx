import { Layout } from "../../components/Layout/Layout";
import { CatalogPage  } from "../../pages/CatalogPage/CatalogPage";
import { FavoritePage } from "../../pages/FavoritePage/FavoritePage";
import { Home } from "../../pages/Home/Home";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";

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
                    element: <FavoritePage />,
                    path: "/favorite"
                },
                {
                    element: <NotFoundPage />,
                    path: "*"
                }
            ]
    }
]