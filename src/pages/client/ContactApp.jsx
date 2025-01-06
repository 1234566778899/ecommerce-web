import React from 'react';
import { NavbarApp } from '../../components/NavbarApp';
import { FooterApp } from '../../components/FooterApp';
import '../../styles/Contact.css';

export const ContactApp = () => {
    return (
        <div className='inter'>
            {/* Barra de navegación */}
            <NavbarApp />

            {/* Sección principal de contacto */}
            <div className='container'>
                <h1 className='mt-5 fw-bold'>¿Cómo puedo ayudarte?</h1>
                <div className='contact-c-1 mt-4'>
                    <div>
                        <i className="fa-solid fa-comments"></i>
                        <h3>Soporte</h3>
                        <p>¿Ya realizaste una compra y tienes dudas sobre tu producto? Te recomendamos primero revisar nuestras Preguntas Frecuentes.</p>
                        <button>
                            PREGUNTAS FRECUENTES
                            <i
                                className="ms-2 text-white fa-solid fa-arrow-right"
                                style={{ fontSize: '0.85rem' }}
                            />
                        </button>
                    </div>
                    <div>
                        <i className="fa-solid fa-cube"></i>
                        <h3>Devoluciones</h3>
                        <p>Sabemos que a veces las cosas no salen como esperabas. Obtén todos los detalles en nuestras páginas de devoluciones.</p>
                        <button>
                            DEVOLUCIONES
                            <i
                                className="ms-2 text-white fa-solid fa-arrow-right"
                                style={{ fontSize: '0.85rem' }}
                            />
                        </button>
                    </div>
                    <div>
                        <i className="fa-solid fa-truck"></i>
                        <h3>Envíos</h3>
                        <p>Si necesitas más información sobre el estado de tu compra, te recomendamos revisar nuestras secciones de envío.</p>
                        <button>
                            ENVIOS
                            <i
                                className="ms-2 text-white fa-solid fa-arrow-right"
                                style={{ fontSize: '0.85rem' }}
                            />
                        </button>
                    </div>
                </div>
            </div>

            <br />
            <br />

            {/* Sección de soporte y formulario de contacto */}
            <div style={{ background: '#F8F9FA', borderTop: '1px solid #EDEDED' }}>
                <div className="container">
                    <div className='contact-c-2 mt-5'>
                        {/* Banner Soporte */}
                        <div className='d-flex align-items-end p-5' style={{ backgroundColor: '#343a40' }}>
                            <div className='text-white'>
                                <h1 className='fw-bold'>¿Necesitas soporte?</h1>
                                <p className='mt-3'>Primero revisa nuestras guías de soporte; tal vez ahí encuentres tu solución.</p>
                                <button className='btn-faq'>PREGUNTAS FRECUENTES</button>
                            </div>
                        </div>

                        {/* Formulario de contacto */}
                        <div>
                            <h1 className='fw-bold'>No seas un extraño</h1>
                            <p className='mt-3'>
                                Estamos disponibles <strong>24/7</strong> para ayudarte.
                                Solo cuéntanos en qué podemos asistirte y haremos todo lo posible para resolver tus dudas.
                            </p>
                            <form>
                                <div className='d-flex gap-3'>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder='Nombres'
                                        aria-label='Nombres'
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder='Apellidos'
                                        aria-label='Apellidos'
                                    />
                                </div>
                                <select className='mt-3' name="topic" aria-label='Motivo de la consulta'>
                                    <option value="">Selecciona el tipo de consulta</option>
                                    <option value="refund">Quiero un reembolso</option>
                                    <option value="order">¿Dónde está mi pedido?</option>
                                    <option value="help">Ayuda</option>
                                    <option value="question">Pregunta</option>
                                    <option value="other">Otro</option>
                                </select>
                                <input
                                    type="email"
                                    name="email"
                                    className='mt-3'
                                    placeholder='Correo electrónico'
                                    aria-label='Correo electrónico'
                                />
                                <textarea
                                    name="message"
                                    className='mt-3'
                                    placeholder='Mensaje'
                                    style={{ height: '100px' }}
                                    aria-label='Mensaje'
                                />
                                <div className='mt-2'>
                                    <input
                                        type="checkbox"
                                        style={{ width: '20px' }}
                                        name="disclaimer"
                                        id="disclaimerCheck"
                                    />
                                    <label htmlFor="disclaimerCheck" style={{ marginLeft: '5px' }}>
                                        Entiendo que esto es solo una tienda de demostración
                                    </label>
                                </div>
                                <button type="submit" className='btn-send mt-3'>ENVIAR</button>
                            </form>
                        </div>
                    </div>

                    <br />
                    <hr />
                    <br />
                </div>

                {/* Sección de ubicación */}
                <div className="container">
                    <h1 className='fw-bold'>¿Dónde nos encontramos?</h1>
                    <p className='contact-d'>
                        Aunque la mayoría de nuestras ventas se realizan en línea, contamos con
                        tres sucursales en Perú para facilitarte cualquier gestión de devoluciones o soporte.
                    </p>
                    <div className='contact-c-3 mt-4'>
                        <div>
                            <div
                                className='mt-3'
                                style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
                            >
                                <h4>San Isidro, Lima</h4>
                                <span>Av. Pardo y Aliaga 640</span>
                                <span>San Isidro, Lima 15073</span>
                                <span>Perú</span>
                            </div>
                            <button className='mt-4 btn-get'>
                                OBTENER DIRECCIONES
                                <i className="ms-3 fa-solid fa-arrow-right" />
                            </button>
                        </div>

                        <div>
                            <img
                                className='w-100'
                                src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/m-GvPceVqbxm4-unsplash.jpg?v=1713544013&width=750"
                                alt="Vista de sucursal en Lima"
                            />
                        </div>
                    </div>

                    <br />
                    <br />
                    <hr />
                    <br />
                    <br />

                    {/* Sección adicional (About, FAQs, Blog) */}
                    <div className='contact-c-4'>
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

            {/* Footer de la aplicación */}
            <FooterApp />
        </div>
    );
};
