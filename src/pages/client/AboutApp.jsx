import React from 'react'
import { NavbarApp } from '../../components/NavbarApp'
import '../../styles/About.css'
import { FooterApp } from '../../components/FooterApp'

export const AboutApp = () => {
    return (
        <div className='inter'>
            <div style={{ background: '#F8F8F8', height: '100vh' }}>
                <NavbarApp />
                <div className='about-main'>
                    <div>
                        <span>KAWISHOP</span>
                        <h2>Calidad tecnológica desde 2012</h2>
                    </div>
                </div>
            </div>
            <div className='container inter'>
                <div className='about-c-1'>
                    <div>
                        <img className='img-1' src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/redd-f-5U_28ojjgms-unsplash.jpg?v=1713538712&width=750" alt="" />
                    </div>
                    <div>
                        <h1 className='fw-bold'>Encendiendo la chispa.</h1>
                        <p className='mt-4'>KIWISHOP comenzó en 2012 desde una idea de ofrecer productos de calidad a un buen precio, fundada por Jamie Chen y Alex Rivera, dos compañeros de universidad con pasión por la tecnología de vanguardia.</p>
                        <p>Inicialmente centrados en componentes de computadoras de alta calidad y difíciles de encontrar, rápidamente se distinguieron y ganaron terreno a través del boca a boca y las redes sociales.</p>
                        <div className='img-about'>
                            <img src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/darshan-patel-QJEVpydulGs-unsplash.jpg?v=1713541030&width=130" alt="img" />
                            <img src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg?v=1713535681&width=130" alt="img" />
                        </div>
                    </div>
                </div>
                <div className='about-c-2'>
                    <div>
                        <h1 className='fw-bold'>Despegue.</h1>
                        <p className='mt-3'>Expandiendo su inventario para incluir una amplia gama de productos tecnológicos como dispositivos para el hogar inteligente y sistemas de realidad virtual, KAWISHOP se mudó a una oficina en San Isidro, Lima, para 2015, ampliando su personal a tiempo completo y manteniendo los valores fundamentales de un servicio excepcional.</p>
                        <div className='cont-cohete'>
                            <i className="fa-solid fa-rocket"></i>
                        </div>
                    </div>
                    <div>
                        <img className='img-1' src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/jw-OFDrwleTtdE-unsplash.jpg?v=1709674489&width=750" alt="" />
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <FooterApp />
        </div>
    )
}
