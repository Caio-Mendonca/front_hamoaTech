import { NavLink } from "@remix-run/react"
import { BoxLogo } from "./style"


const LogoLink  = () => {
    return (
        <BoxLogo>
            <NavLink
            to={'/'}
            >
                <img 
                alt="logo"
                src="./logo.png"
                style={{
                    width: '85px',
                    height: '35px',
                }}
                />
            </NavLink>
        </BoxLogo>
    )
}
export default LogoLink