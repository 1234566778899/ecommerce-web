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
            q: 'What payment methods do you accept?',
            r: 'We accept a variety of payment methods including credit and debit cards, PayPal, Apple Pay, and Google Pay. For a complete list of accepted payment methods, please refer to our Payment Options section.'
        },
        {
            category: 'Orders',
            open: false,
            icon: 'fa-solid fa-right-left',
            q: 'What is your return policy?',
            r: 'We offer a 30-day return policy on all items. Products must be returned in their original condition and packaging. Some exclusions may apply. Please visit our Returns & Refunds page for more details.'
        },
        {
            category: 'Orders',
            open: false,
            icon: 'fa-regular fa-circle-question',
            q: 'Can I change or cancel my order?',
            r: 'You can change or cancel your order within 24 hours of placing it, as long as it has not yet been dispatched. Please contact our customer service team immediately if you need to make a change.'
        },
        // Products
        {
            category: 'Products',
            open: false,
            icon: 'fa-solid fa-key',
            q: 'How do I set up my new device?',
            r: 'Most devices come with a quick start guide in the box. Additionally, we offer online setup guides and tutorials for various products. Check the "Support" or "Tutorials" section on our website for detailed instructions.'
        },
        {
            category: 'Products',
            open: false,
            icon: 'fa-solid fa-house',
            q: 'Do you offer warranties on your products?',
            r: 'Yes, all our products come with a manufacturer\'s warranty. The duration and terms of the warranty vary by product and manufacturer. Additional extended warranty options may be available for purchase.'
        },
        {
            category: 'Shipping',
            open: false,
            icon: 'fa-solid fa-plane',
            q: 'How long does shipping take?',
            r: 'Shipping times vary based on your location and the shipping method selected. Typically, orders are delivered within 5-7 business days.'
        },
        {
            category: 'Shipping',
            open: false,
            icon: 'fa-solid fa-truck',
            q: 'Can I track my order?',
            r: 'Yes, once your order is shipped, you will receive a tracking number via email. You can use this number on our website to monitor the status of your delivery.'
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
