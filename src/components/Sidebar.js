import { useRouter } from "next/router";
import Menu from './Menu'
function Sidebar(props) {
    const router = useRouter()

    return (
        <div className="sidebar-menu">
            <Menu />
        </div>
    );
}

export default Sidebar;