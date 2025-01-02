import React from 'react'
import { NavbarApp } from '../../components/NavbarApp'
import { FooterApp } from '../../components/FooterApp'
import '../../styles/Contact.css'
export const ContactApp = () => {
    return (
        <div className='inter'>
            <NavbarApp />
            <div className='container'>
                <h1 className='mt-3 fw-bold mt-5'>How can we help?</h1>
                <div className='contact-c-1 mt-4'>
                    <div>
                        <i className="fa-solid fa-comments"></i>
                        <h3>Support</h3>
                        <p>Already purchased and have a question about your product? Try our FAQs.</p>
                        <button>FAQS
                            <i className="ms-2 text-white fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                        </button>
                    </div>
                    <div>
                        <i className="fa-solid fa-cube"></i>
                        <h3>Returns</h3>
                        <p>We understand things don't always work out. Visit our returns pages for more.</p>
                        <button>RETURNS
                            <i className="ms-2 text-white fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                        </button>
                    </div>
                    <div>
                        <i className="fa-solid fa-truck"></i>
                        <h3>Support</h3>
                        <p>Already purchased and have a question about your product? Try our FAQs.</p>
                        <button>SHIPPING<i className="ms-2 text-white fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i></button>
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
                                <h1 className='fw-bold'>Need support?</h1>
                                <p className='mt-3'>Check out our support guides first.</p>
                                <button className='btn-faq'>FAQS</button>
                            </div>
                        </div>
                        <div>
                            <h1 className='fw-bold'>Don't be a stranger</h1>
                            <p className='mt-3'>We're available 24/7 to assist. Just let us know what we can help you with and we'll do our best.</p>
                            <form action="">
                                <div className='d-flex gap-3'>
                                    <input type="text" placeholder='Nombres' />
                                    <input type="text" placeholder='Apellidos' />
                                </div>
                                <select className='mt-3' >
                                    <option value="">Enquire</option>
                                    <option value="">I want a refund</option>
                                    <option value="">Where's my order</option>
                                    <option value="">Help</option>
                                    <option value="">Question</option>
                                    <option value="">Other</option>
                                </select>
                                <input type="text" className='mt-3' placeholder='Correo' />
                                <textarea style={{ height: '100px' }} className='mt-3' placeholder='Mensaje'></textarea>
                                <div className='mt-2'>
                                    <input type="checkbox" style={{ width: '20px' }} />
                                    <span>I understand this is just a demo store</span>
                                </div>
                                <button className='btn-send mt-3'>SEND</button>
                            </form>
                        </div>
                    </div>
                    <br />
                    <hr />
                    <br />
                </div>
                <div className="container">
                    <h1 className='fw-bold'>Where are we?</h1>
                    <p className='contact-d'>Although most of our trade is online via our website, we do have three outlets across the US to make returns that bit easier for you.    </p>
                    <div className='contact-c-3 mt-4'>
                        <div>
                            <div className='mt-3' style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <h4>San Francisco, California</h4>
                                <span>250 Innovation Way</span>
                                <span>Suite 300</span>
                                <span>San Francisco, CA 94107</span>
                                <span>USA</span>
                            </div>
                            <button className='mt-4 btn-get'>GET DIRECTIONS<i className="ms-3 fa-solid fa-arrow-right"></i></button>
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
