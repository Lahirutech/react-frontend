import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


export default function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)
    const closeMobileMenu = () => {

    }
    const handleClick = () => {

    }

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
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
                    <ul>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Resturants
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Leasure
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Spa
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}
