import { lazy } from "react";

import { Layout } from "../../components/Layout/Layout";

// import { CatalogPage  } from "../../pages/CatalogPage/CatalogPage";
// import { FavoritePage } from "../../pages/FavoritePage/FavoritePage";
// import { Home } from "../../pages/Home/Home";
// import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
const CatalogPage = lazy(() =>
    import("../../pages/CatalogPage/CatalogPage").then(module => ({
      ...module,
      default: module.CatalogPage,
    }))
  );
const FavoritePage = lazy(() =>
    import("../../pages/FavoritePage/FavoritePage").then(module => ({
        ...module,
        default: module.FavoritePage,
    }))
    );
  const Home = lazy(() =>
    import("../../pages/Home/Home").then(module => ({
      ...module,
      default: module.Home,
    }))
  );
  const NotFoundPage = lazy(() =>
    import("../../pages/NotFoundPage/NotFoundPage").then(module => ({
      ...module,
      default: module.NotFoundPage,
    }))
  );


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