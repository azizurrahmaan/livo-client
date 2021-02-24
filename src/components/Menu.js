import Link from 'next/link'
import { useRouter } from "next/router";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import StoreIcon from '@material-ui/icons/Store'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import ApartmentIcon from '@material-ui/icons/Apartment'
import PaymentIcon from '@material-ui/icons/Payment'
import SettingsIcon from '@material-ui/icons/Settings';
function Menu(props) {
    const router = useRouter()

    return (
        <aside className="menu">
            <ul className="menu-list">
                <li>
                    <Link href="/orders">
                        <a className={router.pathname === "/orders" ? "is-active" : ""}>
                            <span>
                                <span className="count">15</span>
                                <ShoppingCartIcon /> 
                                <p>Orders</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/pickups">
                        <a className={router.pathname === "/pickups" ? "is-active" : ""}> 
                            <span>
                                <StoreIcon />
                                <p>Pickups</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/transfers">
                        <a className={router.pathname === "/transfers" ? "is-active" : ""}> 
                            <span>
                                <LocalShippingIcon />  
                                <p>Transfers</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/inventory">
                        <a className={router.pathname === "/inventory" ? "is-active" : ""}> 
                            <span>
                                <ApartmentIcon />
                                <p>Inventory</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/payments">
                        <a className={router.pathname === "/payments" ? "is-active" : ""}> 
                            <span>
                                <PaymentIcon />
                                <p>Payments</p>
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/settings">
                        <a className={router.pathname === "/settings" ? "is-active" : ""}> 
                            <span>
                                <SettingsIcon />
                                <p>Settings</p>
                            </span>
                        </a>
                    </Link>
                </li>
            </ul>
            <div className="menu-bottom has-text-centered">
                <button className="button is-success is-rounded has-text-weight-bold px-5">HELP?</button>
            </div>
        </aside>
    );
}

export default Menu;