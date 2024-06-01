import { mainNav } from "../../../helpers/navigation";
import * as SC from "./HeaderNav.styled"

export const HeaderNav = () => {
    return(
        <>
            <SC.List>
                <p>WanderWheels Rentals</p>
                {mainNav.map(({id, href, text}) => <SC.ListElements key={id}>
                    <SC.NavLinkStyled to={href}>
                        {text}
                    </SC.NavLinkStyled>
                </SC.ListElements>)}
            </SC.List>
        </>
    )
}