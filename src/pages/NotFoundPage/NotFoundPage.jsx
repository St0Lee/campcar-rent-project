import { Link } from "react-router-dom"

import * as SC from "./NotFoundPage.styled"

export const NotFoundPage = () => {
    return(
        <SC.Background>
            <SC.Content>
                <SC.Text>
                    <p>Page Not Found</p>
                </SC.Text>
                <Link to="/">
                    <SC.Button>To home page</SC.Button>
                </Link>
            </SC.Content>
        </SC.Background>
    )
}