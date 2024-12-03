import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ViewDetailsScrollApp = () => {
    const [bests, setBests] = useState([
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/Pixel_8__Obsidian_2.original.jpg?v=1728460949&width=1445',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/aw3225qfbackleft2.png?v=1727681359&width=1445',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy-s24ultra-titaniumblue-device-spen-front_HI-scaled.jpg?v=1727348203&width=1100',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy_zflip4_borapurple-scaled.jpg?v=1713196932&width=1100',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/Pixel_8__Obsidian_2.original.jpg?v=1728460949&width=1445',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/aw3225qfbackleft2.png?v=1727681359&width=1445',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy-s24ultra-titaniumblue-device-spen-front_HI-scaled.jpg?v=1727348203&width=1100',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
        },
        {
            img: 'https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/galaxy_zflip4_borapurple-scaled.jpg?v=1713196932&width=1100',
            title: 'Edge Pixa 9',
            price: 100.00,
            color: ['black', 'magenta', 'green', 'pink'],
            beforePrice: 89.00,
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
            <div className='best-b' ref={scrollContainerRef}>
                {
                    bests.map((x, index) => (
                        <div onClick={() => navigate('/details/:1')} key={index} className='best-item'>
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={x.img} alt='img' />
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
