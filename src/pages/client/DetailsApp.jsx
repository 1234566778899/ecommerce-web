import React, { useState, useEffect, useRef, useContext } from 'react'
import '../../styles/Details.css'
import { NavbarApp } from '../../components/NavbarApp'
import { ViewDetailsScrollApp } from '../../components/ViewDetailsScrollApp';
import { useNavigate, useParams } from 'react-router-dom';
import { FooterApp } from '../../components/FooterApp';
import { FormApp } from '../../components/FormApp';
import axios from 'axios';
import { CONFIG } from '../../config';
import { MainContext } from '../../contexts/MainContextApp';
import { showInfoToast } from '../../utils/showInfoTast';
import { PopCartApp } from '../../components/PopCartApp';


export const DetailsApp = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const targetDateRef = useRef(calculateTargetDate());
    const { cart, setCart, setVisibleCart, setIsForm } = useContext(MainContext);
    const navigate = useNavigate();
    function calculateTargetDate() {
        const now = new Date();
        now.setDate(now.getDate() + 1);
        return now;
    }
    const colors = {
        '#000': 'Negro',
        '#FDE4D3': 'Durazno',
        '#B970C7': 'Purpura',
        '#CED9C7': 'Verde'
    }
    const [quantity, setQuantity] = useState(1);
    const [imgCurrent, setImgCurrent] = useState(0);

    const [variantCurrent, setVariantCurrent] = useState({});
    const [timeLeft, setTimeLeft] = useState({
        hours: '00',
        minutes: '00',
        seconds: '00'
    });
    const getProduct = () => {
        axios.get(`${CONFIG.uri}/products/${id}`)
            .then(res => {
                setProduct(res.data)
                if (res.data.variants) {
                    const obj = Object.keys(res.data.variants).map(x => x);
                    const current = {};
                    for (const key of obj) {
                        current[key] = res.data.variants[key][0];
                    }
                    setVariantCurrent(current);
                }
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Error on server');
            })
    }
    const addCart = () => {
        const item = {
            name: product.name,
            img: product.imgs[0],
            quantity,
            price: product.price,
            variants: variantCurrent
        }
        const aux = [...cart];
        const index = aux.findIndex(item => item.name === product.name);
        if (index !== -1) {
            aux[index] = item;
            setCart(aux);
        } else {
            setCart(prev => [...prev, item]);
        }
        setVisibleCart(true);
    }
    const buyNow = () => {
        const item = {
            name: product.name,
            img: product.imgs[0],
            quantity,
            price: product.price,
            variants: variantCurrent
        }
        const aux = [...cart];
        const index = aux.findIndex(item => item.name === product.name);
        if (index !== -1) {
            aux[index] = item;
            setCart(aux);
        } else {
            setCart(prev => [...prev, item]);
        }
        setIsForm(true);
    }
    useEffect(() => {
        getProduct();
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDateRef.current - now;
            if (difference > 0) {
                const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
                const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
                const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');
                setTimeLeft({ hours, minutes, seconds });
            } else {
                setTimeLeft({ hours: '00', minutes: '00', seconds: '00' });
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return product && (
        <>
            <div className='inter'>
                <NavbarApp />
                <div style={{ borderBottom: '1px solid #EDEDED' }}>
                    <div className='container' style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                        <div style={{ padding: '15px 0px' }}>
                            <span className='home-label' onClick={() => navigate('/')}> <i className="fa-solid fa-house me-2"></i>Home</span> / <span>Edge Pixa 9</span>
                        </div>
                    </div>
                </div>
                <div style={{ background: '#F8F8F8' }}>
                    <div className="container">
                        <br />
                        <h1 className='fw-bold'>{product.name}</h1>
                        <p className='mt-3' style={{ fontSize: '1.1rem' }}>Desde S/. {product.price.toFixed(2)}</p>
                        <div className='mt-4' style={{ display: 'grid', gridTemplateColumns: '58% 37%', gap: '50px' }}>
                            <div>
                                <div className="content-d">
                                    <img src={product.imgs[imgCurrent]} alt="img" className='img-details' />
                                </div>
                                <ViewDetailsScrollApp imgs={product.imgs} setCurrent={setImgCurrent} current={imgCurrent} />
                                <div className='content-d mt-4 p-4'>
                                    <h4>Especificaciones</h4>
                                    <hr />
                                    <table className='table'>
                                        <tbody>
                                            {
                                                product.specs.map((x, index) => (
                                                    <tr key={index}>
                                                        <td className='fw-bold'>{x.name}</td>
                                                        <td>{x.description}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div>
                                <div className="content-d">
                                    {
                                        product.variants && (
                                            <div style={{ padding: '40px' }}>
                                                <div>
                                                    <span style={{ fontWeight: 'bold' }}>Elige el color: </span>
                                                    <span>{colors[product.variants.Color[variantCurrent['Color']]]}</span>
                                                </div>
                                                <div className='mt-3' style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                                                    {
                                                        product.variants && product.variants.Color && product.variants.Color.map((x, index) => (
                                                            <div key={index}
                                                                onClick={() => setVariantCurrent({ ...variantCurrent, 'Color': x })}
                                                                className={`color-item ${x == variantCurrent['Color'] ? 'img-current' : ''}`}>
                                                                <div style={{ boxShadow: 'inset 0px 4px 8px rgba(0, 0, 0, 0.2)', background: x, width: '25px', height: '25px', borderRadius: '50%' }}> </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div style={{ border: '1px solid #F8F8F8' }}></div>
                                    <div style={{ padding: '30px 40px' }}>
                                        <div>
                                            <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>S/. {product.price.toFixed(2)}</span> <br />
                                            <span style={{ fontSize: '0.9rem', color: 'gray' }}>Impuestos incluidos</span>
                                        </div>
                                        <div className='cart-field'>
                                            <div className='cant'>
                                                <input
                                                    value={quantity}
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    type="text"
                                                    className='w-100 text-center'
                                                    min="1" />
                                                <div className='btns-inc'>
                                                    <button onClick={() => setQuantity(+quantity + 1)}
                                                        className='btn-a'><i className="fa-solid fa-chevron-up"></i></button>
                                                    <button onClick={() => setQuantity(+quantity - 1 == 0 ? 1 : +quantity - 1)}
                                                        className='btn-b'><i className="fa-solid fa-chevron-down"></i></button>
                                                </div>
                                            </div>
                                            <div className='w-100'>
                                                <button
                                                    onClick={() => addCart()}
                                                    className='btn-add-cart'>
                                                    <i className="fa-solid fa-cart-shopping me-2"></i>Agregar a la canasta
                                                </button>
                                            </div>
                                        </div>
                                        <button onClick={() => buyNow()} className='btn-buy'>Comprar ahora - Paga al recibir</button>
                                        <br />
                                        <br />
                                        <hr style={{ color: '#ECECEC' }} />
                                        <div className='d-flex mt-4'>
                                            <div>
                                                <i className="fa-solid fa-truck" style={{ fontSize: '1.2rem' }}></i>
                                            </div>
                                            <div className='ms-3'>
                                                <h6 className='fw-bold'>Pickup available at Ignite HQ</h6>
                                                <p style={{ fontSize: '0.9rem' }}>Usually ready in 24 hours</p>
                                                <a style={{ color: 'gray', fontSize: '0.9rem' }} href="#">View store information</a>
                                            </div>
                                        </div>
                                        <br />
                                        <hr style={{ color: '#ECECEC' }} />
                                        <p style={{ fontSize: '1.1rem' }}>¿Quieres entrega al día siguiente? ¡Apresúrate!</p>
                                        <div className='hour' style={{ fontSize: '1.1rem' }}>
                                            <span>{timeLeft.hours}h</span>:
                                            <span>{timeLeft.minutes}m</span>:
                                            <span>{timeLeft.seconds}s</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='content-d mt-4 p-4'>
                                    <h4>Información adicional</h4>
                                    <hr />
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: product.description
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '58% 42%', gap: '50px' }}>
                            <div>

                            </div>
                            <div >

                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="container" style={{ display: 'flex', gap: '20px' }}>
                        <div className='w-100 bg-white p-3 text-center' style={{ borderRadius: '5px' }}>
                            <i style={{ fontSize: '1.5rem' }} className="fa-solid fa-house"></i>
                            <h5 className='mt-3 fw-bold'>Compra 100% Segura</h5>
                            <p className='mt-2'>Somos una empresa constituida con mas de 10 años en el mercado.</p>
                            <p>RUC: 20543763838</p>
                        </div>
                        <div className='w-100 bg-white p-3 text-center' style={{ borderRadius: '5px' }}>
                            <i style={{ fontSize: '1.5rem' }} className="fa-solid fa-motorcycle"></i>
                            <h5 className='mt-3 fw-bold'>Envío rápido a todo el Perú</h5>
                            <p className='mt-2'>Atendemos rápido tu pedido y lo enviamos en un plazo de 24 horas.</p>
                        </div>
                        <div className='w-100 bg-white p-3 text-center' style={{ borderRadius: '5px' }}>
                            <i style={{ fontSize: '1.5rem' }} className="fa-solid fa-tag"></i>
                            <h5 className='mt-3 fw-bold'>Calidad Garantizada</h5>
                            <p className='mt-2'> Todos nuestros productos cuentan con garantia del Fabricante por 1 año.</p>
                        </div>
                    </div>
                    <br />
                </div>
                <br />
                <FooterApp />
            </div>
        </>
    )
}
