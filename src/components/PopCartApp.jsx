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
    return (
        <div className='pop-cart' onClick={() => close()}>
            <div onClick={(e) => e.stopPropagation()}>
                <div
                    style={{ borderBottom: '1px solid #DCDCDC', display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
                    <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Your cart</span>
                    <button
                        onClick={() => close()}
                        style={{ background: 'none', border: 'none' }}>
                        <i className="fa-solid fa-xmark" style={{ fontSize: '1.3rem' }}></i>
                    </button>
                </div>
                {
                    cart.length == 0 && (
                        <div className='card-empty mt-5'>
                            <h3 className='fw-bold'>Your cat is empty :(</h3>
                            <button onClick={() => close()}>CONTINUE SHOPPING</button>
                        </div>
                    )
                }
                {
                    cart.length > 0 && (
                        <div style={{ padding: '20px', background: '#F8F9FA' }}>
                            <div className='cart-free' style={{ background: 'white' }}>
                                <span>SO CLOSE, JUST <strong>£363.00</strong> TO GO FOR <strong>FREE SHIPPING.</strong></span>
                                <div className='free-progress'>
                                    <div></div>
                                </div>
                            </div>
                            <div className='cart-schedule'>
                                <div>
                                    <i className="fa-regular fa-circle-question" style={{ fontSize: '1.1rem' }}></i>
                                    <span className='ms-3'>Order before <strong>8pm EST</strong> for next day delivery.</span>
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
                                            <h6 className='fw-bold'>{item.name}</h6>
                                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.85rem', color: '#5D5D5D' }}>
                                                <span>Color: Marble Grey</span>
                                                <span>Storage size: 1TB</span>
                                                <span>Memory: 16GB</span>
                                            </div>
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
                            <button onClick={() => { close(); setIsForm(true); }} className='btn-checkout' style={{ position: 'relative' }}>CHECKOUT
                                <i className="fa-solid fa-lock" style={{ position: 'absolute', right: '20px' }}></i>
                            </button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
