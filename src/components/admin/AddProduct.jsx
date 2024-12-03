import React, { useEffect, useRef, useState } from 'react'
import '../../styles/Product.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { CONFIG } from '../../config';
import { useNavigate } from 'react-router-dom';
export const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [specs, setspecs] = useState([{ name: '', description: '' }]);
    const [showOptions, setShowOptions] = useState(false);
    const optionsRef = useRef(null);
    const insertProduct = (data) => {
        axios.post(`${CONFIG.uri}/products`, data)
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const onchangeName = (idx, name) => {
        const aux = [...specs];
        aux[idx].name = name;
        setspecs(aux);
    }
    const onchangeDescription = (idx, description) => {
        const aux = [...specs];
        aux[idx].description = description;
        setspecs(aux);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <form
            onSubmit={handleSubmit(insertProduct)}
            style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', fontSize: '0.9rem' }}>
            <div className='p-3'>
                <h5 className='fw-bold'><i onClick={() => navigate(-1)} className="fa-solid fa-arrow-left me-2" style={{ fontSize: '0.9rem', cursor: 'pointer' }}></i>Agregar producto</h5>
                <div className='content-form'>
                    <div className='form-main'>
                        <label>Nombre</label>
                        <input {...register('name', { required: true })} className='input-main' type="text" placeholder='Camiseta manga corta' />
                    </div>
                    <div className='form-main'>
                        <label>Descripción</label>
                        <textarea {...register('description')} className='input-main' type="text" placeholder='Descripción del producto..' />
                    </div>
                    <div className='form-main'>
                        <label>Elementos multimedia</label>
                        <div className='card-multimedia'>
                            <div className='text-center'>
                                <input {...register('file')} type="file" multiple />
                                <p className='mt-2'>Acepta imagenes, videos o modelos 3D</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-main'>
                        <label>Categoría</label>
                        <select  {...register('categories')} className='input-main'>
                            <option value="Ropa">Electrónica</option>
                            <option value="Ropa">Ropa</option>
                            <option value="Regalos">Regalos</option>
                            <option value="Juguetes">Juguetes</option>
                            <option value="Software">Software</option>
                        </select>
                    </div>
                </div>
                <div className='content-form mt-3'>
                    <div className='d-flex gap-3 mt-3'>
                        <div className='w-100'>
                            <label>Precio</label>
                            <input {...register('price')} className='input-main' type="text" placeholder='S/. 0' />
                        </div>
                        <div className='w-100'>
                            <label>Precio de comparación</label>
                            <input {...register('priceCompare')} className='input-main' type="text" placeholder='S/.' />
                        </div>
                        <div className="w-100"></div>
                    </div>
                    <div className='d-flex gap-3 mt-3'>
                        <div className='w-100'>
                            <label>Costo del artículo</label>
                            <input {...register('cost')} className='input-main' type="text" placeholder='S/.' />
                        </div>
                        <div className='w-100'>
                            <label>Ganancia</label>
                            <input className='input-main' type="text" placeholder='--' />
                        </div>
                        <div className="w-100">
                            <label>Margen</label>
                            <input className='input-main' type="text" placeholder='--' />
                        </div>
                    </div>
                </div>
                <div className='content-form mt-3'>
                    <h6>Especificaciones</h6>
                    {
                        specs.map((x, idx) => (
                            <div key={idx} className='d-flex gap-3 mt-3'>
                                <div className='w-100'>
                                    {
                                        idx == 0 && (<label>Nombre</label>)
                                    }
                                    <input value={specs[idx].name} onInput={(e) => onchangeName(idx, e.target.value)} className='input-main' type="text" placeholder='S/. 0' />
                                </div>
                                <div className='w-100'>
                                    {
                                        idx == 0 && (<label>Descripción</label>)
                                    }
                                    <input onInput={(e) => onchangeDescription(idx, e.target.value)}
                                        className='input-main' type="text" placeholder='S/.' />
                                </div>
                                <div className="w-50">
                                    {
                                        idx == 0 && (<br />)
                                    }
                                    {
                                        idx != specs.length - 1 && (
                                            <button
                                                type='button'
                                                onClick={() => setspecs(prev => [...prev].filter(obj => obj.name !== x.name))} className='btn-main-admin'>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        )
                                    }
                                    {
                                        idx == specs.length - 1 && (
                                            <button
                                                type='button'
                                                onClick={() => {
                                                    if (specs[idx].name == '' || specs[idx].description == '') return;
                                                    setspecs(prev => [...prev, { name: '', description: '' }])
                                                }} className='btn-main-admin'>
                                                <i className="fa-solid fa-plus"></i>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='content-form mt-3'>
                    <h6>Variantes</h6>
                    <button
                        ref={optionsRef}
                        onClick={() => setShowOptions(prev => !prev)}
                        type='button' className='mt-3' style={{ position: 'relative', border: 'none', background: 'none' }}>
                        <i className="fa-solid fa-circle-plus me-2"></i>
                        Agregar opciones como talla o color
                        {showOptions && (
                            <div className='options'>
                                <div onClick={() => { }}>Color</div>
                                <div onClick={() => { }}>Talla</div>
                            </div>
                        )}
                    </button>

                </div>
                <div className='content-form mt-3'>
                    <h6 className='fw-bold'>Metacampos Categoría</h6>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                        <div>Color</div>
                        <div className='variant-content'>
                            <span>Multicolor</span>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className='text-end mt-2'>
                    <button type='submit' className='btn-main-admin'>Guardar producto</button>
                </div>
            </div>
            <div>

            </div>
        </form >
    )
}
