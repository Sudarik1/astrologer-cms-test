
import { NavLink } from "react-router-dom"

const LinkComponent = (props) => {
    const isLinkActive = ( { isActive } ) =>
        isActive
        ? 'bg-green-400'
        : 'bg-green-200'
    
    return ( 
        <NavLink to = {props.endpoint} className={isLinkActive}>{props.text}</NavLink>
    )
}

export default LinkComponent