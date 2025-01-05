import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ViewScrollApp = ({ configuration }) => {
    const [bests, setBests] = useState([
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/Pixel_8__Obsidian_2.original.jpg?v=1728460949&width=1445',
            title: 'Google Pixel 8',
            price: 699.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 799.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/aw3225qfbackleft2.png?v=1727681359&width=1445',
            title: 'Gaming Monitor',
            price: 499.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 549.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy-s24ultra-titaniumblue-device-spen-front_HI-scaled.jpg?v=1727348203&width=1100',
            title: 'Samsung Galaxy S24',
            price: 1199.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 1299.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy_zflip4_borapurple-scaled.jpg?v=1713196932&width=1100',
            title: 'Samsung Galaxy Z Flip 4',
            price: 999.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 1099.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/Pixel_8__Obsidian_2.original.jpg?v=1728460949&width=1445',
            title: 'Google Pixel 8',
            price: 699.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 799.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/aw3225qfbackleft2.png?v=1727681359&width=1445',
            title: 'Gaming Monitor',
            price: 499.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 549.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy-s24ultra-titaniumblue-device-spen-front_HI-scaled.jpg?v=1727348203&width=1100',
            title: 'Samsung Galaxy S24',
            price: 1199.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 1299.00,  // Precio original actualizado
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy_zflip4_borapurple-scaled.jpg?v=1713196932&width=1100',
            title: 'Samsung Galaxy Z Flip 4',
            price: 999.00,  // Actualizado a un precio más realista
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 1099.00,  // Precio original actualizado
        }
    ])

    const scrollContainerRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const navigate = useNavigate();
    const checkScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth);
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            checkScroll();
            scrollContainer.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                scrollContainer.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);
    const scrollLeftHandler = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 0,
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRightHandler = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 0,
                left: 300,
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className='best-container'>
            {showLeft && (
                <button className='scroll-button left' onClick={scrollLeftHandler} aria-label="Desplazar a la izquierda">
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
            )}
            <div className='best' ref={scrollContainerRef}>
                {
                    bests.map((x, index) => (
                        <div
                            //onClick={() => navigate('/details/:1')}
                            key={index} className='product-card' style={{ width: `${configuration.width}`, cursor: 'pointer' }}>
                            <div className='product-image'>
                                <img src={x.img} alt={x.title} className='img-fluid' />
                            </div>
                            <div className='product-info mt-3'>
                                <h5 style={{ fontSize: '1.1rem' }}>{x.title}</h5>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#EA0C0C', fontWeight: 'bold' }}>S/.{x.price.toFixed(2)}</span>
                                    <span style={{ textDecoration: 'line-through', fontSize: '0.9rem', color: 'gray' }}>S/.{x.beforePrice.toFixed(2)}</span>
                                </div>
                                <div style={{ width: '100%' }}>
                                    <button className='details-button fw-bold'>Ver detalles</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className='scroll-button right' onClick={scrollRightHandler}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>
    )
}
