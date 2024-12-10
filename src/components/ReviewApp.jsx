import React, { useEffect, useRef, useState } from 'react'

export const ReviewApp = () => {
    const [bests, setBests] = useState([
        {
            title: 'Fast Shipping',
            description: 'Ordered a laptop and it arrived the next day. Super impressed with the speed and the careful packaging.',
            photo: '',
            name: 'Jordan Smith',
            address: 'Lima, Perú'
        },
        {
            title: 'Excellent service',
            description: 'Ordered a laptop and it arrived the next day. Super impressed with the speed and the careful packaging.',
            photo: '',
            name: 'Jordan Smith',
            address: 'Lima, Perú'
        },
        {
            title: 'Great selection',
            description: 'Ordered a laptop and it arrived the next day. Super impressed with the speed and the careful packaging.',
            photo: '',
            name: 'Jordan Smith',
            address: 'Lima, Perú'
        },
        {
            title: 'Top quality',
            description: 'Ordered a laptop and it arrived the next day. Super impressed with the speed and the careful packaging.',
            photo: '',
            name: 'Jordan Smith',
            address: 'Lima, Perú'
        },
        {
            title: 'Reliable Store',
            description: 'Ordered a laptop and it arrived the next day. Super impressed with the speed and the careful packaging.',
            photo: '',
            name: 'Jordan Smith',
            address: 'Lima, Perú'
        },
        {
            title: 'User-friendly website',
            description: 'Ordered a laptop and it arrived the next day. Super impressed with the speed and the careful packaging.',
            photo: '',
            name: 'Jordan Smith',
            address: 'Lima, Perú'
        },
    ])
    const scrollContainerRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

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
        <div className="container">
            <div className='best-container'>
                {showLeft && (
                    <button className='scroll-button left' onClick={scrollLeftHandler} aria-label="Desplazar a la izquierda">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                )}
                <div className='best pb-5' ref={scrollContainerRef}>
                    {
                        bests.map((x, index) => (
                            <div key={index} className='review-card'>
                                <div style={{ color: '#F5E121', display: 'flex', gap: '3px' }}>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <h5 className='mt-3'>{x.title}</h5>
                                <p className='mt-2'>{x.description}</p>
                                <div className="line"></div>
                                <div className='mt-3' style={{ display: 'flex', alignItems: 'center' }}>
                                    <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src="https://benchmark-electronics-demo.myshopify.com/cdn/shop/files/Portrait_of_a_person_with_a_friendly_expression_casual_and_relaxed_features_possibly_wearing_a_t-shirt_or_casual_top._The_background_is_a_soft_neut.webp?crop=center&height=100&v=1712769883&width=100" alt="img" />
                                    <div className='ms-3' style={{ display: 'flex', flexDirection: 'column' }}>
                                        <span>{x.name}</span>
                                        <span style={{ fontSize: '0.9rem', color: 'gray' }}>{x.address}</span>
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
        </div>
    )
}
