import React, { useEffect, useRef, useState } from 'react';
import '../../styles/Home.css';
import { ViewScrollApp } from './ViewScrollApp';
import { BarMessageApp } from './BarMessageApp';
import { ReviewApp } from './ReviewApp';
import { FooterApp } from './FooterApp';
import { NavbarApp } from './NavbarApp';

export const HomeApp = () => {
    const categories = [
        {
            img: '',
            name: 'Audio'
        },
        {
            img: '',
            name: 'Phones'
        },
        {
            img: '',
            name: 'Laptops'
        },
        {
            img: '',
            name: 'Smart Home'
        },
        {
            img: '',
            name: 'Smart Watches'
        },
        {
            img: '',
            name: 'Monitors'
        },
    ]
    return (
        <div className='inter' style={{ background: '#F8F8F8' }}>

            <NavbarApp />
            <div className='container'>
                <div className='main'>
                    <div>
                        <h1>Sharp shots  very time.</h1>
                        <p>All new Prime Solar S24 Plus</p>
                        <button>
                            PRE - ORDER <i class="ms-2 fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <br />
                <br />
                <h1 className='fw-bold'>Los más vendido</h1>
                <p style={{ color: 'gray' }}>Todas las necesidades de tus gadgets, en un solo lugar.</p>
                <ViewScrollApp configuration={{ width: '230px' }} />
                <br />
                <br />
                <h1 className='fw-bold'><span className='text-wai'>Nuestra gama.</span> <span> Descubra todo</span> </h1>
                <h1 className='fw-bold'> lo que tenemos para ofrecerle.</h1>
                <br />
                <div style={{ display: 'flex', gap: '20px' }}>
                    {
                        categories.map(x => (
                            <div style={{ width: '100%' }}>
                                <div style={{ background: 'gray', height: '200px', borderRadius: '15px' }}>

                                </div>
                                <h5 className='text-center mt-4'>{x.name}</h5>
                            </div>
                        ))
                    }
                </div>
                <br />
                <br />
                <br />
                <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: '1fr 1fr' }}>
                    <div>
                        <video playsInline autoPlay muted style={{ borderRadius: '15px', height: '500px', width: '100%', objectFit: 'cover' }}>
                            <source src='https://benchmark-electronics-demo.myshopify.com/cdn/shop/videos/c/vp/136b5a214a7446b791cc9159ef267365/136b5a214a7446b791cc9159ef267365.HD-1080p-7.2Mbps-36056229.mp4?v=0%27%20type=%27video/mp4' />
                        </video>
                    </div>
                    <div style={{ paddingLeft: '100px', display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '400px' }}>
                            <h1 className='fw-bold'>Can your old phone do this?</h1>
                            <p className='mt-4'>The brand new Solar S24 Ultra - with dynamic background blur.</p>
                            <button className='mt-2' style={{ background: 'none', color: '#1967D2', border: 'none' }}>Mostrar más <i className="fa-solid fa-arrow-right ms-2"></i></button>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <div style={{ background: '#F8F8F8', borderBottom: '1px solid #E6E6E6', borderTop: '1px solid #E6E6E6' }}>
                <br />
                <b></b>
                <div className="container">
                    <h1 className='fw-bold'>Últimas laptops</h1>
                    <p>Gaming? Working? Creating? We've got you covered.</p>
                    <button style={{ background: 'none', color: '#1967D2', border: 'none' }}>Más laptops <i className="fa-solid fa-arrow-right ms-2"></i></button>
                </div>
                <div className="container">
                    <ViewScrollApp configuration={{ width: '260px' }} />
                </div>
                <br />
                <br />
            </div>

            <br />
            <br />
            <BarMessageApp />
            <br />
            <br />
            <div style={{ background: '#191C1C', color: 'white' }}>
                <br />
                <br />
                <h1 className='text-center fw-bold'>Who, us?</h1>
                <br />
                <div className='mt-4 pb-5' style={{ display: 'flex' }}>
                    <div className='w-item'>
                        <span style={{ fontSize: '0.9rem' }}>OVER</span>
                        <span className='text-a' style={{ fontSize: '5rem' }}>142K</span>
                        <span style={{ fontSize: '1.2rem' }}>Products sold</span>
                    </div>
                    <div className='w-item'>
                        <span style={{ fontSize: '0.9rem' }}>WITH</span>
                        <span className='text-b' style={{ fontSize: '5rem' }}>95%</span>
                        <span style={{ fontSize: '1.2rem' }}>Positives reviews</span>
                    </div>
                    <div className='w-item'>
                        <span style={{ fontSize: '0.9rem' }}>SELLING IN</span>
                        <span className='text-c' style={{ fontSize: '5rem' }}>12</span>
                        <span style={{ fontSize: '1.2rem' }}>Distritos</span>
                    </div>
                </div>
                <ReviewApp />
            </div>
            <br />
            <br />
            <h1 className='text-center fw-bold'>Encuentra tu <span className='text-wai'>vibra</span></h1>
            <div className='text-center'>
                <img src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy-s24ultra-titaniumyellow-device-spen-front_HI-scaled.jpg?v=1727348240&width=1100" alt="img" />
            </div>
            <FooterApp />
        </div>
    );
};
