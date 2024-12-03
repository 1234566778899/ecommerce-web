import React from 'react'
import '../../styles/Form.css'
export const FormApp = ({ close }) => {
    return (
        <div className='form-pop inter' onClick={() => close()}>
            <div className='form-content' onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex' }}>
                    <h5 className='fw-bold mb-4'>¡PÍDELO AHORA! 🚚 ENVÍO GRATIS A TODO EL PERÚ - PAGA AL RECIBIR</h5>
                    <button onClick={() => close()} className='btn-close'></button>
                </div>
                <div className='item-content'>
                    <div style={{ display: 'flex' }}>
                        <img style={{ width: '50px', height: '50px', borderRadius: '4px' }} src="https://promonea.com/cdn/shop/files/IRRIGADOR_BUCAL_6_-compressed.jpg?v=1726685903" alt="img" />
                        <div className='ms-2' style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                            <span style={{ fontWeight: 'bold' }}>Limpiador Dental</span>
                            <span>1 Unidad</span>
                        </div>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>S/. 80.00</span>
                </div>
                <div className='sub'>
                    <div>
                        <span>Subtotal</span>
                        <span className='fw-bold'>S/. 80.00</span>
                    </div>
                    <div>
                        <span>Envío</span>
                        <span className='fw-bold'>Gratis</span>
                    </div>
                    <hr />
                    <div>
                        <span className='fw-bold'>Total</span>
                        <span className='fw-bold'>S/. 80.00</span>
                    </div>
                </div>
                <h5 className='mt-2 mb-3 fw-bold'>¡Ya casi terminas! Completa tus Datos</h5>
                <form >
                    <div className='form-item'>
                        <label>Nombres y Apellidos</label>
                        <div>
                            <i className="fa-solid fa-user"></i>
                            <input type="text" placeholder='Nombres y apellidos' />

                        </div>
                    </div>
                    <div className='form-item'>
                        <label>Celular</label>
                        <div>
                            <i className="fa-brands fa-whatsapp"></i>
                            <input type="text" placeholder='Celular' />
                        </div>
                    </div>
                    <div className='form-item'>
                        <label>Ciudad</label>
                        <div>
                            <i className="fa-solid fa-location-dot"></i>
                            <input type="text" placeholder='Ciudad' />

                        </div>
                    </div>
                    <div className='form-item'>
                        <label>Dirección</label>
                        <div>
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder='Dirección' />

                        </div>
                    </div>
                    <button className='btn-finish'>FINALIZAR MI COMPRA - S/. 80.00</button>
                </form>
            </div>
        </div>
    )
}
