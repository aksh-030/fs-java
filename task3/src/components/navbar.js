import React , { useState }from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi';
import {IconContext} from 'react-icons';
import { navbarData } from './navbarData';
import './navbar.css';

function Navbar() {
    const [ sidenav, setSidenav ] = useState(false);
    const showSidenav = () => setSidenav (!sidenav);
    return (
    <div>
        <IconContext.Provider value={{color: '#ffffff'}}> 
        <div className='header'>
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidenav}/>
            </Link>
            <div className='logo'>
                <GiIcons.GiMusicSpell className="logo-icon"/>
                <h2>Poppify</h2>
            </div>
        </div>
        <div>
            <nav className={sidenav ? 'nav-menu active': 'nav-menu'}>
                <ul className='menu-items'>
                    <li className='toggle' onClick={showSidenav}>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {navbarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar