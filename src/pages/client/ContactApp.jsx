import React from 'react'
import { NavbarApp } from '../../components/NavbarApp'
import { FooterApp } from '../../components/FooterApp'
import '../../styles/Contact.css'
export const ContactApp = () => {
    return (
        <div className='inter'>
            <NavbarApp />
            <div className='container'>
                <h1 className='mt-3 fw-bold mt-5'>¿Cómo puedo ayudarte?</h1>
                <div className='contact-c-1 mt-4'>
                    <div>
                        <i className="fa-solid fa-comments"></i>
                        <h3>Soporte</h3>
                        <p>¿Ya compraste y tienes una pregunta sobre tu producto? Revisa nuestras Preguntas Frecuentes.</p>
                        <button>PREGUNTAS FRECUENTES
                            <i className="ms-2 text-white fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                        </button>
                    </div>
                    <div>
                        <i className="fa-solid fa-cube"></i>
                        <h3>Devoluciones</h3>
                        <p>Entendemos que a veces las cosas no salen como esperabas. Visita nuestras páginas de devoluciones para más información.</p>
                        <button>DEVOLUCIONES
                            <i className="ms-2 text-white fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                        </button>
                    </div>
                    <div>
                        <i className="fa-solid fa-truck"></i>
                        <h3>Envíos</h3>
                        <p>¿Ya compraste y tienes una pregunta sobre tu producto? Revisa nuestras Preguntas Frecuentes.</p>
                        <button>ENVIOS
                            <i className="ms-2 text-white fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div style={{ background: '#F8F9FA', borderTop: '1px solid #EDEDED' }}>
                <div className="container">
                    <div className='contact-c-2 mt-5'>
                        <div className='d-flex align-items-end p-5'>
                            <div className='text-white'>
                                <h1 className='fw-bold'>¿Necesitas soporte?</h1>
                                <p className='mt-3'>Revisa nuestras guías de soporte primero.</p>
                                <button className='btn-faq'>PREGUNTAS FRECUENTES</button>
                            </div>
                        </div>
                        <div>
                            <h1 className='fw-bold'>No seas un extraño</h1>
                            <p className='mt-3'>Estamos disponibles 24/7 para ayudarte. Solo déjanos saber en qué podemos asistirte y haremos lo mejor posible.</p>
                            <form action="">
                                <div className='d-flex gap-3'>
                                    <input type="text" placeholder='Nombres' />
                                    <input type="text" placeholder='Apellidos' />
                                </div>
                                <select className='mt-3' >
                                    <option value="">Consulta</option>
                                    <option value="">Quiero un reembolso</option>
                                    <option value="">¿Dónde está mi pedido?</option>
                                    <option value="">Ayuda</option>
                                    <option value="">Pregunta</option>
                                    <option value="">Otro</option>
                                </select>
                                <input type="text" className='mt-3' placeholder='Correo' />
                                <textarea style={{ height: '100px' }} className='mt-3' placeholder='Mensaje'></textarea>
                                <div className='mt-2'>
                                    <input type="checkbox" style={{ width: '20px' }} />
                                    <span>Entiendo que esto es solo una tienda de demostración</span>
                                </div>
                                <button className='btn-send mt-3'>ENVIAR</button>
                            </form>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                </div>
                <div className="container">
                    <h1 className='fw-bold'>¿Donde nos encontramos?</h1>
                    <p className='contact-d'>Aunque la mayoría de nuestro comercio se realiza en línea a través de nuestro sitio web, contamos con tres sucursales en Perú para hacer las devoluciones un poco más fáciles para usted.</p>
                    <div className='contact-c-3 mt-4'>
                        <div>
                            <div className='mt-3' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <h4>San Isidro, Lima</h4>
                                <span>Av. Pardo y Aliaga 640</span>
                                <span>San Isidro, Lima 15073</span>
                                <span>Perú</span>
                            </div>
                            <button className='mt-4 btn-get'>OBTENER DIRECCIONES<i className="ms-3 fa-solid fa-arrow-right"></i></button>
                        </div>

                        <div>
                            <img className='w-100' src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/m-GvPceVqbxm4-unsplash.jpg?v=1713544013&width=750"
                                alt="img" />
                        </div>
                    </div>
                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />
                    <div className=' contact-c-4'>
                        <div className='c-1'>
                            <div className='contenido'>
                                <i className="fa-solid fa-bolt"></i>
                                <h1>About us</h1>
                            </div>
                        </div>
                        <div className='c-2'>
                            <div className='contenido'>
                                <i className="fa-regular fa-circle-question"></i>
                                <h1>FAQs</h1>
                            </div>

                        </div>
                        <div className='c-3'>
                            <div className='contenido'>
                                <i className="fa-regular fa-comment"></i>
                                <h1>Blog</h1>
                            </div>
                        </div>
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
