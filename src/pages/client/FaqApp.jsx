import React, { useState } from 'react';
import { NavbarApp } from '../../components/NavbarApp';
import '../../styles/FAQs.css';
import { FooterApp } from './../../components/FooterApp';

export const FaqApp = () => {
    const [faqs, setFaqs] = useState([
        // Orders
        {
            category: 'Orders',
            open: false,
            icon: 'fa-regular fa-credit-card',
            q: '¿Qué métodos de pago aceptan?',
            r: 'Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito, PayPal, Apple Pay y Google Pay. Para ver la lista completa de métodos de pago aceptados, por favor consulte nuestra sección de Opciones de Pago.'
        },
        {
            category: 'Orders',
            open: false,
            icon: 'fa-solid fa-right-left',
            q: '¿Cuál es su política de devoluciones?',
            r: 'Ofrecemos una política de devolución de 30 días para todos los productos. Los productos deben ser devueltos en su estado y empaque original. Pueden aplicarse algunas exclusiones. Para más detalles, por favor visite nuestra página de Devoluciones y Reembolsos.'
        },
        {
            category: 'Orders',
            open: false,
            icon: 'fa-regular fa-circle-question',
            q: '¿Puedo cambiar o cancelar mi pedido?',
            r: 'Puede cambiar o cancelar su pedido dentro de las 24 horas posteriores a la realización del mismo, siempre que no haya sido despachado. Por favor, contacte a nuestro equipo de servicio al cliente inmediatamente si necesita hacer un cambio.'
        },
        // Products
        {
            category: 'Products',
            open: false,
            icon: 'fa-solid fa-key',
            q: '¿Cómo configuro mi nuevo dispositivo?',
            r: 'La mayoría de los dispositivos vienen con una guía de inicio rápido en la caja. Además, ofrecemos guías de configuración y tutoriales en línea para varios productos. Consulte la sección "Soporte" o "Tutoriales" en nuestro sitio web para instrucciones detalladas.'
        },
        {
            category: 'Products',
            open: false,
            icon: 'fa-solid fa-house',
            q: '¿Ofrecen garantías para sus productos?',
            r: 'Sí, todos nuestros productos vienen con una garantía del fabricante. La duración y los términos de la garantía varían según el producto y el fabricante. Es posible que haya opciones adicionales de garantía extendida disponibles para su compra.'
        },
        {
            category: 'Shipping',
            open: false,
            icon: 'fa-solid fa-plane',
            q: '¿Cuánto tiempo tarda el envío?',
            r: 'El tiempo de envío varía según su ubicación y el método de envío seleccionado. Típicamente, los pedidos se entregan dentro de 2 a 3 días hábiles.'
        },
        {
            category: 'Shipping',
            open: false,
            icon: 'fa-solid fa-truck',
            q: '¿Puedo rastrear mi pedido?',
            r: 'Sí, una vez que su pedido sea enviado, recibirá un número de seguimiento por correo electrónico. Puede usar este número en nuestro sitio web para monitorear el estado de su entrega.'
        },
    ]);

    const openItem = (index) => {
        setFaqs(prevFaqs => prevFaqs.map((faq, i) => (
            i === index ? { ...faq, open: !faq.open } : faq
        )));
    };
    const groupedFaqs = faqs.reduce((acc, faq, index) => {
        if (!acc[faq.category]) acc[faq.category] = [];
        acc[faq.category].push({ ...faq, index });
        return acc;
    }, {});

    return (
        <div className='inter'>
            <div style={{ background: '#F8F9FA', height: '100vh' }}>
                <NavbarApp />
                <div className='faq-main'>
                    <div>
                        <h1>FAQs </h1>
                        <p>Got a question? We've got the answer.</p>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '40% 60%', gap: '20px' }}>
                    <div>
                        <br />
                        <br />
                        <div className='content-search'>
                            <h1 className='fw-bold'>Buscar en FAQs</h1>
                            <p style={{ fontSize: '1.1rem' }}>No encuentras lo que buscas? Intenta buscar a continuación.</p>
                            <div className='input-search'>
                                <i className="ms-2 fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder='Search' />
                            </div>
                        </div>
                    </div>
                    <div className='faq-q'>
                        {Object.keys(groupedFaqs).map(category => (
                            <div key={category}>
                                <h2 className='fw-bold'>{category}</h2>
                                {groupedFaqs[category].map(faq => (
                                    <div key={faq.index} className='faq-item'>
                                        <div className='faq-head' onClick={() => openItem(faq.index)}>
                                            <div className='d-flex'>
                                                <i className={faq.icon}></i>
                                                <h6 className='ms-3'>{faq.q}</h6>
                                            </div>
                                            <div>
                                                {faq.open ? (
                                                    <i className="fa-solid fa-chevron-up"></i>
                                                ) : (
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                )}
                                            </div>
                                        </div>
                                        <div className={`faq-r ${faq.open && 'faq-open'}`}>
                                            <p style={{ paddingLeft: '35px', fontSize: '0.95rem' }}>{faq.r}</p>
                                        </div>
                                    </div>
                                ))}
                                <br />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <br />
            <br />
            <FooterApp />
        </div >
    );
};
