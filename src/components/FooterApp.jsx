import React from 'react'

export const FooterApp = () => {
    return (
        <div>
            <div style={{ background: '#121212' }}>
                <div className="container" style={{ display: 'flex', color: 'white', padding: '20px 0px', gap: '20px' }}>
                    <div className='f-item ps-5'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-solid fa-shield-heart"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>WELL TRUSTED</span>
                            <span style={{ fontSize: '0.9rem' }}>Over 100k customers</span>
                        </div>
                    </div>
                    <div className='f-item ps-5'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-solid fa-truck"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>SUPER FAST</span>
                            <span style={{ fontSize: '0.9rem' }}>With Express delivery</span>
                        </div>
                    </div>
                    <div className='f-item ps-5'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-regular fa-comments"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>EXPERT HELP</span>
                            <span style={{ fontSize: '0.9rem' }}>Seven days a week</span>
                        </div>
                    </div>
                    <div className='f-item ps-5'>
                        <i style={{ fontSize: '1.7rem' }} className="fa-solid fa-tags"></i>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>BEST PRICES</span>
                            <span style={{ fontSize: '0.9rem' }}>Unbeatable value</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ padding: '50px 0px', background: '#1A1D1D', color: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '40% 20% 20% 20%', gap: '20px' }}>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>IGNITE</h3>
                        <p className='pe-5'>Our mission at Ignite is to consistently provide our customers with the latest technology and gadgets at unbeatably low prices, ensuring a simple and straightforward shopping experience.</p>
                    </div>
                    <div>
                        <h5>Shop</h5>
                        <div style={{ listStyle: 'none', display: 'flex', gap: '5px', flexDirection: 'column' }}>
                            <li>Phones</li>
                            <li>Smart home</li>
                            <li>Smart watches</li>
                            <li>Audio</li>
                            <li>Laptops</li>
                            <li>Accesories</li>
                        </div>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <div style={{ listStyle: 'none', display: 'flex', gap: '5px', flexDirection: 'column' }}>
                            <li>About us</li>
                            <li>Contact</li>
                            <li>FAQs</li>
                            <li>Blog</li>
                            <li>Laptops</li>
                            <li>Returns</li>
                        </div>
                    </div>
                    <div>
                        <h5>Expert help</h5>
                        <p>Need any device before you buy? We're here to help</p>
                        <div>
                            <button className='btn-contact'>Contact us</button>
                        </div>
                        <img className='mt-3' style={{ width: '60px', height: '60px' }} src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/callcenter.png?v=1713599919&width=150" alt="img" />
                    </div>
                </div>
            </div>
            <div style={{ background: 'black', padding: '20px 0px', color: 'white' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.83rem' }}>© 2024, Ignite Theme Electronics Demo.Powered by Shopify | Terms of service Privacy policy Returns policy</span>
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
