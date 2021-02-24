import Link from 'next/link'
import Menu from '../components/Menu'
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CommentIcon from '@material-ui/icons/Comment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { useState } from 'react';
import LivoButton from  './LivoButton'

function Navbar(props) {
    const [isActiveMenuClass, setIsActiveMenuClass] = useState('');
    const toggleMenu = () => {
        if(isActiveMenuClass){
            setIsActiveMenuClass('')
        }else{
            setIsActiveMenuClass('is-active')
        }
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <a role="button" className="hamburger" onClick={toggleMenu} >
                    <MenuIcon/>
                </a>
                <Link href="/">
                    <a className="navbar-item">
                        <img src="/livo-icon.png" />
                    </a>
                </Link>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <LivoButton type="default" text="3050" textType="success" subscript="MAD">
                        <span className="has-text-black">
                            <AccountBalanceWalletIcon/>
                        </span>
                    </LivoButton>
                    <LivoButton type="success">
                        <span className="has-text-white">
                            <CommentIcon/>
                        </span>
                    </LivoButton>
                    <LivoButton type="warning" number={45}>
                        <span className="has-text-white">
                            <NotificationsIcon/>
                        </span>
                    </LivoButton>
                    <LivoButton image="/profile-pic.png" />
                </div>
            </div>

            <div className={`navbar-menu is-hidden-desktop ${isActiveMenuClass}`} id="livo-navbar">
                <Menu />
            </div>
        </nav>
    );
}

export default Navbar;