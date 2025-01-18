import React, { useContext } from 'react'
import { MainContext } from '../contexts/MainContextApp';

export const PopCartApp = ({ close }) => {
    const { cart, setCart, setIsForm } = useContext(MainContext);
    const changeQuantity = (name, quantity) => {
        const aux = [...cart];
        const index = aux.findIndex(x => x.name === name);
        if (aux[index].quantity + quantity <= 0) {
            setCart(prev => prev.filter(x => x.name !== name));
        } else {
            aux[index].quantity = aux[index].quantity + quantity;
            setCart(aux);
        }
    }
    const deleteItem = (name) => {
        setCart(prev => prev.filter(x => x.name !== name));
    }
    const getTotal = () => {
        return cart.reduce((sum, item) => item.price * item.quantity + sum, 0);
    }
    return (
        <div className='pop-cart' onClick={() => close()}>
            <div onClick={(e) => e.stopPropagation()}>
                <div
                    style={{ borderBottom: '1px solid #DCDCDC', display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Tu carrito</span>
                    <button
                        onClick={() => close()}
                        style={{ background: 'none', border: 'none' }}>
                        <i className="fa-solid fa-xmark" style={{ fontSize: '1.3rem' }}></i>
                    </button>
                </div>
                {
                    cart.length == 0 && (
                        <div className='card-empty mt-5'>
                            <h3 className='fw-bold'>Tu carrito esta vacio:(</h3>
                            <button onClick={() => close()}>CONTINUAR COMPRANDO</button>
                        </div>
                    )
                }
                {
                    cart.length > 0 && (
                        <div style={{ padding: '20px', background: '#F8F9FA' }}>
                            {
                                getTotal() < 50 && (
                                    <div className='cart-free' style={{ background: 'white' }}>
                                        <span>TAN CERCA, SOLO <strong>S/. {(50 - getTotal()).toFixed(2)}</strong> PARA <strong>ENVÍO GRATIS.</strong></span>
                                        <div className='free-progress'>
                                            <div></div>
                                        </div>
                                    </div>
                                )
                            }
                            <div className='cart-schedule'>
                                <div>
                                    <i className="fa-regular fa-circle-question" style={{ fontSize: '1.1rem' }}></i>
                                    <span className='ms-3'>Realiza tu pedido antes de las <strong>8 pm EST</strong> para entrega al día siguiente.</span>
                                </div>
                                <button style={{ background: 'none', border: 'none', color: 'white' }}>
                                    <i className="fa-solid fa-xmark" style={{ fontSize: '1rem' }}></i>
                                </button>
                            </div>

                            {
                                cart.map((item, index) => (
                                    <div key={index} className='cart-item'>
                                        <div>
                                            <img className='img-fluid' src={item.img}
                                                alt="img" />
                                        </div>
                                        <div>
                                            <div style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: 2,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                width: '230px'
                                            }}
                                                className='fw-bold'>{item.name}</div>

                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <div className='cant mt-2' style={{ width: '100px', border: '1px solid #C9CACB' }}>
                                                    <input
                                                        value={item.quantity}
                                                        onChange={(e) => { }}
                                                        type="text"
                                                        className='w-100 text-center'
                                                        min="1" />
                                                    <div className='btns-inc'>
                                                        <button
                                                            onClick={() => changeQuantity(item.name, 1)}
                                                            className='btn-a'><i className="fa-solid fa-chevron-up"></i></button>
                                                        <button
                                                            onClick={() => changeQuantity(item.name, -1)}
                                                            className='btn-b'><i className="fa-solid fa-chevron-down"></i></button>
                                                    </div>
                                                </div>
                                                <i
                                                    onClick={() => deleteItem(item.name)}
                                                    className="fa-regular fa-trash-can icon-trash"></i>
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <span>S/. {(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                ))
                            }
                            <button onClick={() => { close(); setIsForm(true); }} className='btn-checkout' style={{ position: 'relative' }}>FINALIZAR COMPRA
                                <i className="fa-solid fa-lock" style={{ position: 'absolute', right: '20px' }}></i>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
