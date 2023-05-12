import { NavLink } from "@remix-run/react";
import { BoxLink } from "./style";

export default function ItemLink({ url, title }: any) {

    return(
        <BoxLink>
            <NavLink
            to={url}
            >
            {title}
            </NavLink>
        </BoxLink>
    )
}