
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const PagesLayout = () => {
    return (
        <div className="flex gap-20">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default PagesLayout