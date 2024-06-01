import { NavLink } from "react-router-dom";
import { catalogNav } from "../../../helpers/navigation";

export const CatalogNav = () => {
    return(
        <>
            <ul>
                {catalogNav.map(({id, href, text}) => <li key={id}>
                    <NavLink to={href}>
                        {text}
                    </NavLink>
                </li>)}
            </ul>
        </>

    )
}