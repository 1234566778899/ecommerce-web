import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../contexts/MainContextApp';
import { PopCartApp } from './PopCartApp';

export const NavbarApp = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [fade, setFade] = useState(true);
    const { cart, setVisibleCart } = useContext(MainContext);
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    const messages = ['Envios a todo Lima Metropolitana', 'Envio gratis al instante! Paga al recibir']
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentMessage((prev) => (prev + 1) % messages.length);
                setFade(true);
            }, 1000);
        }, 6000);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (menuVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuVisible]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='nav-menu'>
            <div className={`flag ${fade ? 'fade-in' : 'fade-out'}`}>
                <div className="container">
                    {messages[currentMessage]}
                </div>
            </div>
            <div style={{ background: 'white', border: '1px solid #EBEBEB' }}>
                <div className='navbar container'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span className='me-2 boton-menu'
                            ref={buttonRef}
                            onClick={() => setMenuVisible(prev => !prev)}
                        >
                            {
                                !menuVisible && (
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-hamburger" fill="none" viewBox="0 0 512 512">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M80 160h352M80 256h352M80 352h352"></path>
                                    </svg>
                                )
                            }
                            {
                                menuVisible && (
                                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className="icon icon-close" viewBox="0 0 512 512">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368L144 144M368 144L144 368" aria-expanded="false"></path>
                                    </svg>
                                )
                            }
                        </span>
                        <span className='logo' style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>IGNITE</span>
                    </div>
                    <div className='search-bar'>
                        <input type="text" placeholder="¿Que estas buscando?" />
                        <button className='search-button'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className='help-section'>
                        <i className=" fa-solid fa-headphones-simple"></i>
                        <div className='help-text'>
                            <span className='help-a'>¿Necesitas ayuda?</span>
                            <span className='help-b'>+51 932597220</span>
                        </div>
                    </div>
                    <div>
                        <button className='icon-button boton-buscar'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className='icon-button'>
                            <i className="fa-regular fa-comments"></i>
                        </button>
                        <button
                            onClick={() => setVisibleCart(true)}
                            className='icon-button'>
                            <i className="fa-solid fa-cart-shopping"></i>
                            {cart.length > 0 && (<div className='badge-cart'><span>{cart.length}</span></div>)}
                        </button>
                    </div>

                </div>
            </div>
            <div className='menu-items'>
                <span onClick={() => navigate('/home')}>Inicio</span>
                <span onClick={() => navigate('/products')}>Productos</span>
                <span onClick={() => navigate('/about')}>Sobre nosotros</span>
                <span onClick={() => navigate('/faqs')}>FAQs</span>
                <span onClick={() => navigate('/contact')}>Contacto</span>
            </div>
            <div
                ref={menuRef}
                className={`menu-2 ${menuVisible ? 'menu-2-active' : ''}`}>
                <ul>
                    <li onClick={() => navigate('/home')}><i className="fa-solid fa-house me-3"></i>Inicio</li>
                    <li onClick={() => navigate('/products')}><i className="fa-solid fa-cart-flatbed me-3"></i>Productos</li>
                    <li onClick={() => navigate('/about')}><i className="fa-solid fa-house me-2 me-3"></i>Sobre nosotros</li>
                    <li onClick={() => navigate('/contact')}><i className="fa-solid fa-house me-2 me-3"></i>Contacto</li>
                </ul>
                <hr style={{ color: 'gray' }} />
                <ul style={{ fontWeight: 'bold', color: 'gray' }}>
                    <li>FAQs</li>
                    <li>Contact</li>
                    <li>My Account</li>
                </ul>
                <hr style={{ color: 'gray' }} />
                <ul className='icons'>
                    <li className="fa-brands fa-facebook"></li>
                    <li className="fa-brands fa-twitter"></li>
                    <li className="fa-brands fa-whatsapp"></li>
                </ul>
                <div className='country'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flag_of_Peru_%281825%E2%80%931884%29.svg/1024px-Flag_of_Peru_%281825%E2%80%931884%29.svg.png" alt="img" />
                    <span className='ms-3'>Peru ( PEN, S/.)</span>
                </div>
            </div>
        </div>
    )
}
