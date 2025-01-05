import React from 'react'

export const FooterApp = () => {
    return (
        <div>
            <div style={{ background: '#121212' }}>
                <div className="container content-trust">
                    <div className='f-item'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-solid fa-shield-heart"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>BIEN CONFIABLE</span>
                            <span style={{ fontSize: '0.9rem' }}>Más de 100k clientes</span>
                        </div>
                    </div>
                    <div className='f-item'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-solid fa-truck"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>SUPER RÁPIDO</span>
                            <span style={{ fontSize: '0.9rem' }}>Con entrega express</span>
                        </div>
                    </div>
                    <div className='f-item'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-regular fa-comments"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>AYUDA EXPERTA</span>
                            <span style={{ fontSize: '0.9rem' }}>Siete días a la semana</span>
                        </div>
                    </div>
                    <div className='f-item'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-solid fa-tags"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>MEJORES PRECIOS</span>
                            <span style={{ fontSize: '0.9rem' }}>Valor imbatible</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ padding: '50px 0px', background: '#1A1D1D', color: 'white' }}>
                <div className="container footer-content" >
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>KAWISHOP</h3>
                        <p className='pe-5'>Nuestra misión en KawiShop es proporcionar consistentemente a nuestros clientes la última tecnología y gadgets a precios imbatibles, asegurando una experiencia de compra sencilla y directa.</p>
                    </div>
                    <div>
                        <h5 className='fw-bold'>Tienda</h5>
                        <div style={{ listStyle: 'none', display: 'flex', gap: '5px', flexDirection: 'column' }}>
                            <li>Teléfonos</li>
                            <li>Hogar inteligente</li>
                            <li>Relojes inteligentes</li>
                            <li>Audio</li>
                            <li>Laptops</li>
                            <li>Accesorios</li>
                        </div>
                    </div>
                    <div>
                        <h5 className='fw-bold'>Empresa</h5>
                        <div style={{ listStyle: 'none', display: 'flex', gap: '5px', flexDirection: 'column' }}>
                            <li>Sobre nosotros</li>
                            <li>Contacto</li>
                            <li>Preguntas frecuentes</li>
                            <li>Blog</li>
                            <li>Laptops</li>
                            <li>Devoluciones</li>
                        </div>
                    </div>
                    <div>
                        <h5 className='fw-bold'>Ayuda experta</h5>
                        <p>¿Necesitas algún dispositivo antes de comprar? Estamos aquí para ayudarte</p>
                        <div>
                            <button className='btn-contact'>Contáctanos</button>
                        </div>
                        <img className='mt-3' style={{ width: '60px', height: '60px' }} src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/callcenter.png?v=1713599919&width=150" alt="img" />
                    </div>
                </div>
            </div>
            <div style={{ background: 'black', padding: '20px 0px', color: 'white' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.83rem' }}>© 2024, KawiShop. Powered by Shopify | Términos de servicio Política de privacidad Política de devoluciones</span>
                    <div style={{ fontSize: '1.3rem', display: 'flex', gap: '20px', cursor: 'pointer' }}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-whatsapp"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}
