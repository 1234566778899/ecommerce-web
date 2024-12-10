import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../contexts/MainContextApp';
import { PopCartApp } from './PopCartApp';

export const NavbarApp = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [fade, setFade] = useState(true);
    const { cart, setVisibleCart } = useContext(MainContext);
    const navigate = useNavigate();
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
    return (
        <>
            <div className={`flag ${fade ? 'fade-in' : 'fade-out'}`}>
                <div className="container">
                    {messages[currentMessage]}
                </div>
            </div>
            <div style={{ background: 'white', border: '1px solid #EBEBEB' }}>
                <div className='navbar container'>
                    <span className='logo' style={{ cursor: 'pointer' }} onClick={() => navigate('/home')}>IGNITE</span>
                    <div className='search-bar'>
                        <input type="text" placeholder="¿Que estas buscando?" />
                        <button className='search-button'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>

                    <div className='navbar-right'>
                        <div className='help-section'>
                            <i className=" fa-solid fa-headphones-simple"></i>
                            <div className='help-text'>
                                <span className='help-a'>¿Necesitas ayuda?</span>
                                <span className='help-b'>+51 932597220</span>
                            </div>
                        </div>

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
                <span onClick={() => navigate('/home')}>Home</span>
                <span onClick={() => navigate('/products')}>Shop</span>
                <span onClick={() => navigate('/home')}>Phones</span>
                <span onClick={() => navigate('/home')}>Brands</span>
                <span onClick={() => navigate('/home')}>About us</span>
                <span onClick={() => navigate('/home')}>FAQs</span>
                <span onClick={() => navigate('/home')}>Contact</span>
            </div>

        </>
    )
}
