import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

function DefaultLayout({ children }) {
    return (
        <div>
            <Navbar/>
            <Sidebar/>
            <main className="page">{children}</main>
        </div>
    );
}

export default DefaultLayout;