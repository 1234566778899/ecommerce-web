import React, { useContext, useState } from 'react'
import '../styles/Form.css'
import { useForm } from 'react-hook-form'
import { MainContext } from '../contexts/MainContextApp'
import { ValidInfoApp } from './ValidInfoApp'
export const FormApp = ({ close }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { cart } = useContext(MainContext);
    const [infoOrder, setInfoOrder] = useState(null);
    const [validInfo, setvalidInfo] = useState(false);
    const backForm = () => setvalidInfo(false);

    const createOrder = (data) => {
        const order = {
            ...data,
            products: cart,
            total: getTotal(),
        }
        setInfoOrder(order);
        setvalidInfo(true);
    }
    const getTotal = () => {
        return cart.reduce((sum, item) => item.price * item.quantity + sum, 0);
    }
    return (
        <div className='form-pop inter' onClick={() => close()}>
            <div className='form-content' onClick={(e) => e.stopPropagation()}>
                {
                    validInfo && (
                        <ValidInfoApp close={backForm} order={infoOrder} />
                    )
                }
                {
                    !validInfo && (
                        <div>
                            <div style={{ display: 'flex' }}>
                                <h5 className='fw-bold mb-4'>¡PÍDELO AHORA! 🚚 ENVÍO GRATIS A TODO EL PERÚ - PAGA AL RECIBIR</h5>
                                <button onClick={() => close()} className='btn-close'></button>
                            </div>
                            {
                                cart.map((item, key) => (
                                    <div key={key} className='item-content mb-1'>
                                        <div style={{ display: 'flex' }}>
                                            <img style={{ width: '50px', height: '50px', borderRadius: '4px' }}
                                                src={item.img} alt="img" />
                                            <div className='ms-2' style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                                                <span style={{ fontWeight: 'bold' }}>{item.name}</span>
                                                <span>{item.quantity} Unidad{item.quantity > 0 ? 'es' : ''}</span>
                                            </div>
                                        </div>
                                        <span style={{ fontWeight: 'bold' }}>S/. {(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))
                            }
                            <div className='sub'>
                                <div>
                                    <span>Subtotal</span>
                                    <span className='fw-bold'>S/. {getTotal().toFixed(2)}</span>
                                </div>
                                <div>
                                    <span>Envío</span>
                                    <span className='fw-bold'>Gratis</span>
                                </div>
                                <hr />
                                <div>
                                    <span className='fw-bold'>Total</span>
                                    <span className='fw-bold'>S/. {getTotal().toFixed(2)}</span>
                                </div>
                            </div>
                            <h5 className='mt-2 mb-3 fw-bold'>¡Ya casi terminas! Completa tus Datos</h5>
                            <form onSubmit={handleSubmit(createOrder)}>
                                <div className='form-item'>
                                    <label>Nombres y Apellidos</label>
                                    <div>
                                        <i className="fa-solid fa-user"></i>
                                        <input type="text" placeholder='Nombres y apellidos'
                                            {...register('name', { required: true })} />
                                    </div>
                                    {
                                        errors.name && (<span style={{ fontSize: '0.9rem' }} className='text-danger'>El nombre es obligatorio</span>)
                                    }
                                </div>
                                <div className='form-item'>
                                    <label>Celular</label>
                                    <div>
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <input type="text" placeholder='Celular' {...register('cellphone', { required: true })} />
                                    </div>
                                    {
                                        errors.cellphone && (<span style={{ fontSize: '0.9rem' }} className='text-danger'>El celular es obligatorio</span>)
                                    }
                                </div>
                                <div className='form-item'>
                                    <label>Correo electrónico</label>
                                    <div>
                                        <i className="fa-solid fa-user"></i>
                                        <input type="email" placeholder='Correo electrónico' {...register('email', { required: true })} />
                                    </div>
                                    <span style={{ fontSize: '0.85rem' }}>Aqui le llegará el estado de su pedido</span>
                                    {
                                        errors.email && (<span style={{ fontSize: '0.9rem' }} className='text-danger'>El correo es obligatorio</span>)
                                    }
                                </div>
                                <div className='form-item'>
                                    <label>Dirección</label>
                                    <div>
                                        <i className="fa-solid fa-user"></i>
                                        <input type="text" placeholder='Calle 123, Distrito, Provincia'{...register('address', { required: true })} />
                                    </div>
                                    {
                                        errors.address && (<span style={{ fontSize: '0.9rem' }} className='text-danger'>La dirección es obligatorio</span>)
                                    }
                                </div>

                                <button className='btn-finish'>VALIDAR INFORMACIÓN</button>
                            </form>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
