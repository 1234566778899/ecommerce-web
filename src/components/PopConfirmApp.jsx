import React from 'react'
import '../styles/PopConfirm.css'
export const PopConfirmApp = () => {
    return (
        <div className="confirm-order-overlay">
            <div className="confirm-order-popup">
                <h2>¡Pedido realizado con éxito!</h2>
                <p>Tu pedido ha sido confirmado. En breve recibirás un correo con los detalles de tu orden.</p>
                {email && <p>Hemos enviado la confirmación a: <strong>{email}</strong></p>}
                <p>Podrás revisar el estado de tu pedido usando el enlace que encontrarás en tu correo.</p>

                <div className="confirm-order-actions">
                    <button onClick={onClose}>Cerrar</button>
                    {onViewOrderStatus &&
                        <button onClick={onViewOrderStatus}>
                            Ver estado del pedido
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}
