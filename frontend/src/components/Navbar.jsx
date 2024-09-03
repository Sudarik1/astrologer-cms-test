
import LinkComponent from "./LinkComponent"

const Navbar = () => {
    return (
        <nav className="flex flex-col">
            <LinkComponent endpoint ="/" text="Main"/>
            <LinkComponent endpoint ="/pages" text="Pages"/>
            <LinkComponent endpoint ="/notes" text="Notes"/>
            <LinkComponent endpoint ="/comments" text="Comments"/>
            <LinkComponent endpoint ="/motto" text="Motto"/>
        </nav>
    )
}

export default Navbar