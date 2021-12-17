import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const closeMobileMenu = () => {

    }
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-contaciner'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Travel Sri Lanka
                        <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                </div>

            </nav>
            <p>Lanka</p>


        </>
    )
}
