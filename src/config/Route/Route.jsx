import { useRoutes } from "react-router-dom";
import { routes } from "../routesConfig/routes"; 

export const Routes = () => {
    const result = useRoutes(routes)
    return result
}