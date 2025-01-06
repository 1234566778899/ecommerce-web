import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CONFIG } from '../../config'
import { showInfoToast } from '../../utils/showInfoTast'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

export const ListOrder = () => {
    const [orders, setOrders] = useState(null);
    const getOrders = () => {
        axios.get(`${CONFIG.uri}/orders`)
            .then(res => {
                setOrders(res.data);
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Error on server');
            })
    }
    useEffect(() => {
        getOrders();
    }, [])
    const navigate = useNavigate();
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
                            <th>Código</th>
                            <th>Cliente</th>
                            <th>Celular</th>
                            <th>Estado</th>
                            <th>Dirección</th>
                            <th>Total</th>
                            <th>Fecha de creación</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders && orders.map((x, index) => (
                                <tr key={index}>
                                    <td>{x.code}</td>
                                    <td>{x.name}</td>
                                    <td>{x.cellphone}</td>
                                    <td>
                                        <button className='status-active btn shadow-sm'>{x.status}</button>
                                    </td>
                                    <td>{x.address}</td>
                                    <td>S/. {x.total.toFixed(2)}</td>
                                    <td>{moment(x.createdAt).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <button
                                            onClick={() => window.open(`/app-admin/map/${x.lat}/${x.lng}`, '_blank')}
                                            className='btn shadow-sm text-danger'><i className="fa-solid fa-location-dot"></i></button>
                                        <button className='ms-2 btn shadow-sm text-primary'><i className="fa-solid fa-paste"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>)
}
