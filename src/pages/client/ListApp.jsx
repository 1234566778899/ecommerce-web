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
    const [filterSelected, setFilterSelected] = useState({});
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
        <div className='inter'>
            <div style={{ background: '#F8F8F8' }}>
                <NavbarApp />
            </div>
            <TabFilterApp visible={filterVisible} setVisible={setFilterVisible} />
            <div style={{ background: '#F8F9FA' }}>
                <br />
                <div className="container">
                    <span style={{ display: 'flex' }}>
                        <h1 className='platform'>Productos</h1>
                        <span className='fw-bold'>({products && products.length})</span>
                    </span>
                    <div className='tab-filter'>
                        <button onClick={() => setFilterVisible(true)}>
                            <i className="fa-solid fa-sliders"></i>
                            <span className='ms-3'>Filtrar</span>
                        </button>
                        <span>{products && products.length} Productos</span>
                    </div>
                    <div className='content-products'>
                        <div className='menu-filter'>
                            <div className='card-filter'>
                                <h6 className='fw-bold'>MARCA</h6>
                                <div className='items-filter items-brand'>
                                    {
                                        brands.map((x, index) => (
                                            <div
                                                className={`item-filter ${filterSelected.brand && filterSelected.brand == x ? 'item-selected' : ''}`}
                                                key={index}
                                                onClick={() => setFilterSelected(prev => ({ ...prev, 'brand': x }))}>{x}</div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='card-filter mt-1 mb-3'>
                                <h6 className='fw-bold'>COLOR</h6>
                                <div className='items-filter items-color'>
                                    {
                                        colors.map((x, index) => (
                                            <div
                                                className={`item-filter ${filterSelected.color && filterSelected.color == x ? 'item-selected' : ''}`}
                                                key={index}
                                                style={{ height: '50px' }}
                                                onClick={() => setFilterSelected(prev => ({ ...prev, 'color': x }))}
                                            >
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
                                    <option value="1">Más vendidos</option>
                                    <option value="2">Alfabéticamente, A-Z</option>
                                    <option value="3">Alfabéticamente, Z-A</option>
                                    <option value="4">Precio, de menor a mayor</option>
                                    <option value="5">Precio, de mayor a menor</option>
                                    <option value="6">Precio, de antiguo a nuevo</option>
                                    <option value="7">Precio, de nuevo a antiguo</option>

                                </select>
                            </div>
                            {
                                !products && (
                                    <div className='mt-4 list-products'>
                                        <div className='box-load'></div>
                                        <div className='box-load'></div>
                                        <div className='box-load'></div>
                                        <div className='box-load'></div>
                                    </div>
                                )
                            }
                            <div className='mt-4 list-products'>

                                {
                                    products && products.map((item, index) => (
                                        <div key={index} className='item-product' onClick={() => navigate(`/details/${item._id}`)}>
                                            <img className='img-product img-product-1' src={item.imgs[0]} alt="img-list" />
                                            <img className='img-product img-product-2' src={item.imgs[1]} alt="img-list" />
                                            {
                                                item.isNew && (<span className='label-new'>Nuevo</span>)
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
                                                    <div className='mt-1 platform' style={{ fontSize: '1.2rem' }}>
                                                        <span style={{ fontSize: '0.9rem' }}>S/. </span>{item.price.toFixed(2)}
                                                        <span className='price-before'>{item.priceCompare.toFixed(2)}</span>
                                                    </div>
                                                    <div className='mt-2' style={{ fontSize: '0.85rem' }}>
                                                        {
                                                            Array.from({ length: item.stars }).map((_, index) => (
                                                                <i key={index} className="fa-solid fa-star"></i>
                                                            ))
                                                        }
                                                        {
                                                            Array.from({ length: 5 - item.stars }).map((_, index) => (
                                                                <i key={index} className="fa-regular fa-star"></i>
                                                            ))
                                                        }

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
        </div>
    )
}
