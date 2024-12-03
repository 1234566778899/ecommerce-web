import React, { useState } from 'react'

export const ListOrder = () => {
    const [orders, setOrders] = useState([
        {
            code: 'P01',
            customer: 'Carlos Jesús Ordaz Hoyos',
            cellphone: '932597220',
            address: 'Shop Location',
            status: 'Creado',
            total: '0.00 PEN',
            createdAt: '26/10/2024 12:02:11'
        }
    ])
    return (
        <div style={{ padding: '10px 20px' }}>
            <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Órdenes de compra</span>
                <button className='btn-main-admin'>Crear orden de compra</button>
            </div>
            <div className='content-table mt-3'>
                <table className='text-center table table-product'>
                    <thead>
                        <tr>
                            <th>Orden de compra</th>
                            <th>Cliente</th>
                            <th>Celular</th>
                            <th>Estado</th>
                            <th>Dirección</th>
                            <th>Total</th>
                            <th>Fecha de creación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((x, index) => (
                                <tr key={index}>
                                    <td>{x.code}</td>
                                    <td>{x.customer}</td>
                                    <td>{x.cellphone}</td>
                                    <td>
                                        <span className='status-active'>{x.status}</span>
                                    </td>
                                    <td>{x.address}</td>
                                    <td>{x.total}</td>
                                    <td>{x.createdAt}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>)
}
