import React, { useEffect, useState } from 'react'
import { NavbarApp } from '../../components/NavbarApp'
import { FooterApp } from '../../components/FooterApp'
import axios from 'axios'
import { CONFIG } from '../../config'
import { showInfoToast } from '../../utils/showInfoTast'
import { useNavigate } from 'react-router-dom'
import { TabFilterApp } from '../../components/TabFilterApp'

export const ListApp = () => {
    const [brands, setBrands] = useState(['Apex', 'BENCHMARK', 'EDGE', 'PRIME', 'Videe'])
    const [colors, setColors] = useState(['#FFE500', '#000000', '#D49A06', '#05AA3D', '#808080', '#A54DCF', '#E9D7AA', '#FF8A00'])
    const [products, setProducts] = useState(null);
    const navigate = useNavigate();
    const [filterVisible, setFilterVisible] = useState(false);
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
        if (filterVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [filterVisible]);
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <>
            <div className='inter' style={{ background: '#F8F8F8' }}>
                <NavbarApp />
            </div>
            <TabFilterApp visible={filterVisible} setVisible={setFilterVisible} />
            <div style={{ background: '#F8F9FA' }}>
                <br />
                <div className="container">
                    <span style={{ display: 'flex' }}>
                        <h1>Todos</h1>
                        <span className='fw-bold'>({products && products.length})</span>
                    </span>
                    <div className='tab-filter'>
                        <button onClick={() => setFilterVisible(true)}>
                            <i className="fa-solid fa-sliders"></i>
                            <span className='ms-3'>Filtrar</span>
                        </button>
                        <span>35 Productos</span>
                    </div>
                    <div className='content-products'>
                        <div className='menu-filter'>
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
                                <span className='ms-2 fw-bold'>{products && products.length} Productos</span>
                                <select>
                                    <option value="1">Best Selling</option>
                                    <option value="2">Alphabetically, A-Z</option>
                                    <option value="3">Alphabetically, Z-A</option>
                                    <option value="4">Price, low to high</option>
                                    <option value="5">Price, high to low</option>
                                    <option value="6">Price, old to new</option>
                                    <option value="7">Price, new to old</option>
                                </select>
                            </div>
                            <div className='mt-4 list-products'>
                                {
                                    products && products.map((item, index) => (
                                        <div key={index} className='item-product' onClick={() => navigate(`/details/${item._id}`)}>
                                            <img src={item.imgs[0]} alt="" />
                                            {
                                                item.isNew && (<span className='label-new'>New</span>)
                                            }
                                            <div className='content-list'>
                                                <div>
                                                    <div className="title-product">{item.name}</div>
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
                                                    <div className='mt-1' style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                                        <span style={{ fontSize: '0.9rem' }}>S/. </span>{item.price.toFixed(2)}
                                                        <span className='price-before'>{item.priceCompare.toFixed(2)}</span>
                                                    </div>
                                                    <div className='mt-2' style={{ fontSize: '0.85rem' }}>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-solid fa-star"></i>
                                                        <i className="fa-regular fa-star"></i>
                                                        <span style={{ color: '#777777' }}> ({item.reviews})</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                            {
                                products && products.length == 0 && (
                                    <h4 className='text-center mt-5'>Ups! No se ha encontrado ningún producto</h4>
                                )
                            }
                            <div className='text-center my-5'>
                                {
                                    products && products.length > 16 && (
                                        <button className='btn-view'>SHOW MORE</button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterApp />
        </>
    )
}
