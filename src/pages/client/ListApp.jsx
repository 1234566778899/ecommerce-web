import React, { useEffect, useState } from 'react'
import { NavbarApp } from '../../components/NavbarApp'
import { FooterApp } from '../../components/FooterApp'
import axios from 'axios'
import { CONFIG } from '../../config'
import { showInfoToast } from '../../utils/showInfoTast'
import { useNavigate } from 'react-router-dom'

export const ListApp = () => {
    const [brands, setBrands] = useState(['Apex', 'BENCHMARK', 'EDGE', 'PRIME', 'Videe'])
    const [colors, setColors] = useState(['#FFE500', '#000000', '#D49A06', '#05AA3D', '#808080', '#A54DCF', '#E9D7AA', '#FF8A00'])
    const [products, setProducts] = useState(null);
    const navigate = useNavigate();
    const getProducts = () => {
        axios.post(`${CONFIG.uri}/products/retrieve`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Error on server');
            })
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <div className='inter' style={{ background: '#F8F8F8' }}>
                <NavbarApp />
            </div>
            <div style={{ background: '#F8F9FA' }}>
                <br />
                <div className="container">
                    <h1>ALL</h1>
                    <div className='mt-5' style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '30px' }}>
                        <div>
                            <div className='card-filter'>
                                <h6 className='fw-bold'>BRAND</h6>
                                <div className='items-filter items-brand'>
                                    {
                                        brands.map((x, index) => (
                                            <div key={index}>{x}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='card-filter mt-1 mb-3'>
                                <h6 className='fw-bold'>COLOR</h6>
                                <div className='items-filter items-color'>
                                    {
                                        colors.map((x, index) => (
                                            <div key={index}>
                                                <span style={{ background: `${x}` }}></span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='top-list'>
                                <span>35 Productos</span>
                                <select>
                                    <option value="">Best Selling</option>
                                    <option value="">Alphabetically, A-Z</option>
                                    <option value="">Alphabetically, Z-A</option>
                                    <option value="">Price, low to high</option>
                                    <option value="">Price, high to low</option>
                                    <option value="">Price, old to new</option>
                                    <option value="">Price, new to old</option>
                                </select>
                            </div>
                            <div className='mt-4' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }}>
                                {
                                    products && products.map((item, index) => (
                                        <div key={index} className='item-product' onClick={() => navigate(`/details/${item._id}`)}>
                                            <img src={item.imgs[0]} alt="" />
                                            {
                                                item.isNew && (<span className='label-new'>New</span>)
                                            }
                                            <div className='content-list'>
                                                <div>
                                                    <span style={{ fontSize: '0.8rem' }}>EDGE</span>
                                                    <h6 className='fw-bold mt-2'>{item.name}</h6>
                                                    {
                                                        item.colors && (
                                                            <div className='d-flex gap-1 mt-3'>
                                                                {
                                                                    item.colors.map((color, index) => (
                                                                        <span key={index}
                                                                            style={{ background: `${color}` }}
                                                                            className='list-color'></span>))
                                                                }
                                                            </div>
                                                        )
                                                    }
                                                    <div className='mt-3'>Desde S/.{item.price.toFixed(2)}</div>
                                                </div>
                                                <button>VER PRODUCTO</button>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            <div className='text-center my-5'>
                                <button className='btn-view'>SHOW MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterApp />
        </>
    )
}
