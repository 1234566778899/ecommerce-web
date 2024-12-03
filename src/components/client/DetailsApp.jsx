import React, { useState, useEffect, useRef } from 'react'
import '../../styles/Details.css'
import { NavbarApp } from './NavbarApp'
import { ViewDetailsScrollApp } from './ViewDetailsScrollApp';
import { useNavigate } from 'react-router-dom';
import { FooterApp } from './FooterApp';
import { FormApp } from './FormApp';

export const DetailsApp = () => {
    const colors = ['black', 'pink', 'violet', 'green']
    const targetDateRef = useRef(calculateTargetDate());
    const navigate = useNavigate();
    const [isForm, setIsForm] = useState(false);
    const closeForm = () => setIsForm(false);
    function calculateTargetDate() {
        const now = new Date();
        now.setDate(now.getDate() + 1);
        return now;
    }

    const [timeLeft, setTimeLeft] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDateRef.current - now;
            if (difference > 0) {
                const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
                const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
                setTimeLeft({ hours, minutes, seconds });
            } else {
                setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {
                isForm && (<FormApp close={closeForm} />)
            }
            <div className='inter'>
                <NavbarApp />
                <div style={{ borderBottom: '1px solid #EDEDED' }}>
                    <div className='container' style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                        <div style={{ padding: '15px 0px' }}>
                            <span className='home-label' onClick={() => navigate('/')}> <i className="fa-solid fa-house me-2"></i>Home</span> / <span>Edge Pixa 9</span>
                        </div>
                    </div>
                </div>
                <div style={{ background: '#F8F8F8' }}>
                    <div className="container">
                        <br />
                        <h1 className='fw-bold'>Edge Pixa 9</h1>
                        <p className='mt-3' style={{ fontSize: '1.1rem' }}>Desde S/. 799.00</p>
                        <div className='mt-4' style={{ display: 'grid', gridTemplateColumns: '58% 37%', gap: '50px' }}>
                            <div>
                                <div className="content-d">
                                    <img src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/Pixel_8__Obsidian_2.original.jpg?v=1728460949&width=1445" alt="img" className='img-fluid' />
                                </div>
                                <ViewDetailsScrollApp />
                                <div className='content-d mt-4 p-4'>
                                    <h4>Especificaciones</h4>
                                    <hr />
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <td className='fw-bold'>Condicion del producto</td>
                                                <td>Nuevo</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Detalle de la garantía</td>
                                                <td>1 mes</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Material de vestuario</td>
                                                <td>Algodón</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Condicion del producto</td>
                                                <td>Nuevo</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>País de origen</td>
                                                <td>Chile</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Modelo</td>
                                                <td>Traje Harry Potter Gryffindor</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Composición</td>
                                                <td>Algodon</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Largo de la prenda</td>
                                                <td>Maxi</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Garantía</td>
                                                <td>3 meses</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Tipo</td>
                                                <td>Vestidos</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Género</td>
                                                <td>Unisex adulto</td>
                                            </tr>
                                            <tr>
                                                <td className='fw-bold'>Incluye</td>
                                                <td>01 capa - 01 bufanda - 01 corbata</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <div className="content-d">
                                    <div style={{ padding: '40px' }}>
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>Elige el color: </span> <span>Midnight Black</span>
                                        </div>
                                        <div className='mt-3' style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                            {
                                                colors.map((x, index) => (
                                                    <div key={index} className='color-item'>
                                                        <div style={{ boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.2)', background: x, width: '25px', height: '25px', borderRadius: '50%' }}> </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div style={{ border: '1px solid #F8F8F8' }}></div>
                                    <div style={{ padding: '30px 40px' }}>
                                        <div>
                                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>S/. 799.00</span> <br />
                                            <span style={{ fontSize: '0.9rem', color: 'gray' }}>Impuestos incluidos</span>
                                        </div>
                                        <div className='cart-field'>
                                            <div className='cant'>
                                                <input defaultValue={1} type="text" className='w-100 text-center' min="1" />
                                                <div className='btns-inc'>
                                                    <button className='btn-a'><i className="fa-solid fa-chevron-up"></i></button>
                                                    <button className='btn-b'><i className="fa-solid fa-chevron-down"></i></button>
                                                </div>
                                            </div>
                                            <div className='w-100'>
                                                <button className='btn-add-cart'><i className="fa-solid fa-cart-shopping me-2"></i>Agregar a la canasta</button>
                                            </div>
                                        </div>
                                        <button onClick={() => setIsForm(true)} className='btn-buy'>Comprar ahora - Paga al recibir</button>
                                        <br />
                                        <br />
                                        <p style={{ fontSize: '1.1rem' }}>¿Quieres entrega al día siguiente? ¡Apresúrate!</p>
                                        <div className='hour' style={{ fontSize: '1.1rem' }}>
                                            <span>{timeLeft.hours}h</span>:
                                            <span>{timeLeft.minutes}m</span>:
                                            <span>{timeLeft.seconds}s</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-d mt-4 p-4'>
                                    <h4>Información adicional</h4>
                                    <hr />
                                    <p>¡Bienvenidos a la juguetería para niños de Saga Falabella! Estamos comprometidos con ofrecerles a los más pequeños la mejor experiencia de juego y diversión. Nuestra extensa gama de juguetes para niños está diseñada para satisfacer todas las necesidades de los más pequeños. Ofrecemos una gran variedad de juguetes educativos, desarrollo cognitivo, juegos de mesa, muñecas, personajes de películas, vehículos y mucho más.</p>
                                    <h6 className='fw-bold'>Ficha del producto:</h6>
                                    <ul>
                                        <li>Tipo: Disfraces infantiles</li>
                                        <li>Temporada: Primavera-Verano</li>
                                        <li>Hecho en: China</li>
                                        <li>Género: Unisex</li>
                                        <li>Tipo general: Disfraces</li>
                                        <li>Material principal: Poliéster</li>
                                        <li>Incluye: Gorro</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '58% 42%', gap: '50px' }}>
                            <div>

                            </div>
                            <div >

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container" style={{ display: 'flex', gap: '20px' }}>
                        <div className='w-100 bg-white p-3 text-center' style={{ borderRadius: '5px' }}>
                            <i style={{ fontSize: '1.5rem' }} class="fa-solid fa-house"></i>
                            <h5 className='mt-3 fw-bold'>Compra 100% Segura</h5>
                            <p className='mt-2'>Somos una empresa constituida con mas de 10 años en el mercado.</p>
                            <p>RUC: 20543763838</p>
                        </div>
                        <div className='w-100 bg-white p-3 text-center' style={{ borderRadius: '5px' }}>
                            <i style={{ fontSize: '1.5rem' }} class="fa-solid fa-motorcycle"></i>
                            <h5 className='mt-3 fw-bold'>Envío rápido a todo el Perú</h5>
                            <p className='mt-2'>Atendemos rápido tu pedido y lo enviamos en un plazo de 24 horas.</p>
                        </div>
                        <div className='w-100 bg-white p-3 text-center' style={{ borderRadius: '5px' }}>
                            <i style={{ fontSize: '1.5rem' }} class="fa-solid fa-tag"></i>
                            <h5 className='mt-3 fw-bold'>Calidad Garantizada</h5>
                            <p className='mt-2'> Todos nuestros productos cuentan con garantia del Fabricante por 1 año.</p>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
                <FooterApp />
            </div>
        </>
    )
}
