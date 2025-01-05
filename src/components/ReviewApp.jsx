import React, { useEffect, useRef, useState } from 'react'

export const ReviewApp = () => {
    const [bests, setBests] = useState([
        {
            title: 'Envío rápido',
            description: 'Compré una laptop y llegó al día siguiente. Muy impresionado con la rapidez y el cuidado en el embalaje.',
            photo: '',
            name: 'Carlos Gómez',
            address: 'Lima, Perú',
            img: 'https://www.shutterstock.com/image-photo/street-portrait-smiling-peruvian-man-260nw-2331305151.jpg'
        },
        {
            title: 'Excelente servicio',
            description: 'Compré una laptop y llegó al día siguiente. Muy impresionado con la rapidez y el cuidado en el embalaje.',
            photo: '',
            name: 'María Rodríguez',
            address: 'Cusco, Perú',
            img: 'https://www.shutterstock.com/image-photo/portrait-smiling-farmer-guinea-pig-260nw-2196442731.jpg'
        },
        {
            title: 'Gran selección',
            description: 'Compré una laptop y llegó al día siguiente. Muy impresionado con la rapidez y el cuidado en el embalaje.',
            photo: '',
            name: 'José Fernández',
            address: 'Arequipa, Perú',
            img: 'https://st4.depositphotos.com/27654548/40248/i/450/depositphotos_402480402-stock-photo-latin-indian-boy-mountains.jpg'
        },
        {
            title: 'Calidad superior',
            description: 'Compré una laptop y llegó al día siguiente. Muy impresionado con la rapidez y el cuidado en el embalaje.',
            photo: '',
            name: 'Ana Morales',
            address: 'Trujillo, Perú',
            img: 'https://media.istockphoto.com/id/864520802/es/foto/retrato-de-un-sonriente-joven-de-am%C3%A9rica-latina-con-una-chaqueta-de-ante-marr%C3%B3n-disparos.jpg?s=612x612&w=0&k=20&c=pFNlOQu-hA1Z9MXS0_6hQGwrnJoldmX-H5tZ9Fjzl_E='
        },
        {
            title: 'Tienda confiable',
            description: 'Compré una laptop y llegó al día siguiente. Muy impresionado con la rapidez y el cuidado en el embalaje.',
            photo: '',
            name: 'Luis Pérez',
            address: 'Piura, Perú',
            img: 'https://media.istockphoto.com/id/1372427454/es/foto/padre-hispano-con-cuadernos-fuera-de-la-escuela-en-zona-rural-hombre-adulto-maya-listo-para-ir.jpg?s=612x612&w=0&k=20&c=QKCDReY4X3KovsujlkeFAJePUc6Fdgr4MZMmjgsUaqo='
        },
        {
            title: 'Sitio web fácil de usar',
            description: 'Compré una laptop y llegó al día siguiente. Muy impresionado con la rapidez y el cuidado en el embalaje.',
            photo: '',
            name: 'Laura Sánchez',
            address: 'Chiclayo, Perú',
            img: 'https://elperuano.pe/fotografia//thumbnail/2021/12/02/000141185M.jpg'
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
                                    <img style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                        src={x.img} alt="img" />
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
