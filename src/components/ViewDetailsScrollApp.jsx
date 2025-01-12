import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const ViewDetailsScrollApp = ({ imgs, setCurrent, current }) => {

    const scrollContainerRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const navigate = useNavigate();
    const checkScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeft(scrollLeft > 0 && scrollLeft < scrollWidth);
        setShowRight(scrollLeft + clientWidth < scrollWidth - 50);
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
                    imgs.map((x, index) => (
                        <div
                            onClick={() => setCurrent(index)}
                            key={index} className={`best-item ${index == current ? 'img-current' : ''}`}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={x} alt='img' />
                        </div>
                    ))
                }
            </div>
            {
                showRight && (
                    <button className='scroll-button right' onClick={scrollRightHandler}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                )
            }
        </div>
    )
}
