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
                        <span>  IGNITE</span>
                        <h2>Quality tech since 2012</h2>
                    </div>
                </div>
            </div>
            <div className='container inter'>
                <div className='about-c-1'>
                    <div>
                        <img className='img-1' src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/redd-f-5U_28ojjgms-unsplash.jpg?v=1713538712&width=750" alt="" />
                    </div>
                    <div>
                        <h1 className='fw-bold'>Lighting the fuse.</h1>
                        <p className='mt-4'>Ignite started in 2012 in an MIT dorm room, founded by Jamie Chen and Alex Rivera, two college roommates with a passion for cutting-edge technology.</p>
                        <p>Initially focusing on high-quality, hard-to-find computer components, they quickly distinguished themselves from the rest and gained traction via word of mouth and social media.</p>
                        <div className='img-about'>
                            <img src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/darshan-patel-QJEVpydulGs-unsplash.jpg?v=1713541030&width=130" alt="img" />
                            <img src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg?v=1713535681&width=130" alt="img" />
                        </div>
                    </div>
                </div>
                <div className='about-c-2'>
                    <div>
                        <h1 className='fw-bold'>Blast off.</h1>
                        <p className='mt-3'>Expanding their inventory to include a wide range of tech products like smart home devices and virtual reality systems, Ignite moved into a Cambridge office by 2015, growing a full-time staff and maintaining core values of exceptional service.
                        </p>
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
