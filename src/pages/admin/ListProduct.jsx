import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CONFIG } from '../../config'
import { showInfoToast } from '../../utils/showInfoTast'

export const ListProduct = () => {
    const [products, setProducts] = useState([])
    const getProducts = () => {
        axios.post(`${CONFIG.uri}/products/retrieve`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Error on server');
            })
    }
    useEffect(() => {
        getProducts();
    }, [])
    const navigate = useNavigate();
    return (
        <div style={{ padding: '10px 20px' }}>
            <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>Productos</span>
                <button className='btn-main-admin' onClick={() => navigate('/app-admin/add-product')}>Agregar producto</button>
            </div>
            <div className='content-table mt-3'>
                <table className='text-center table table-product'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Stock</th>
                            <th>Marca</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Tipo</th>
                            <th>Proveedor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((x, index) => (
                                <tr key={index}>
                                    <td className='cell-name'>{x.name}</td>
                                    <td>
                                        <span className='status-active'>{x.status}</span>
                                    </td>
                                    <td>{x.stock}</td>
                                    <td>{x.brand}</td>
                                    <td>{x.category}</td>
                                    <td>{x.price}</td>
                                    <td>{x.vendor}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
