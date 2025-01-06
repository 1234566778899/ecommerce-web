import React, { useState } from 'react';
import '../../styles/Product.css';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CONFIG } from '../../config';
import { useNavigate } from 'react-router-dom';
import { Variants } from '../../components/Variants';
import { showInfoToast } from '../../utils/showInfoTast';

export const AddProduct = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [specs, setspecs] = useState([{ name: '', description: '' }]);
    const [description, setdescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [variants, setVariants] = useState({});
    const price = watch('price') || 0;
    const cost = watch('cost') || 0;
    const gain = price - cost;
    const margin = cost > 0 ? ((gain / cost) * 100).toFixed(2) : 0;

    const insertProduct = async (data) => {
        if (isLoading) return;
        setIsLoading(true);

        const formData = new FormData();
        for (let key in data) {
            formData.append(key, data[key]);
        }
        formData.append('description', description);
        formData.append('specs', JSON.stringify(specs));
        formData.append('variants', JSON.stringify(variants));
        Array.from(data.files).forEach((file) => {
            formData.append('files', file);
        });
        Array.from(data.imgs).forEach((file) => {
            formData.append('imgs', file);
        });
        axios.post(`${CONFIG.uri}/products`, formData)
            .then(res => {
                showInfoToast('Se agregó correctamente');
                navigate('/app-admin/products');
            }).catch(error => {
                console.log(error);
                setIsLoading(false)
                showInfoToast('Error')
            })
    }

    const onchangeName = (idx, name) => {
        const aux = [...specs];
        aux[idx].name = name;
        setspecs(aux);
    };

    const onchangeDescription = (idx, description) => {
        const aux = [...specs];
        aux[idx].description = description;
        setspecs(aux);
    };

    return (
        <form
            onSubmit={handleSubmit(insertProduct)}
            style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', fontSize: '0.9rem' }}>
            <div className='p-3'>
                <h5 className='fw-bold'>
                    <i
                        onClick={() => navigate(-1)}
                        className="fa-solid fa-arrow-left me-2"
                        style={{ fontSize: '0.9rem', cursor: 'pointer' }}>
                    </i>
                    Agregar producto
                </h5>
                <div className='content-form'>
                    <div className='form-main'>
                        <label>Nombre</label>
                        <input
                            {...register('name', { required: 'El nombre es obligatorio' })}
                            className='input-main'
                            type="text"
                            placeholder='Camiseta manga corta' />
                        {errors.name && <p className='error-message'>{errors.name.message}</p>}
                    </div>
                    <div className='form-main'>
                        <label>Marca</label>
                        <input
                            {...register('brand', { required: 'La marca es obligatorio' })}
                            className='input-main'
                            type="text"
                            placeholder='Camiseta manga corta' />
                        {errors.brand && <p className='error-message'>{errors.brand.message}</p>}
                    </div>
                    <div className='form-main'>
                        <label>Descripción</label>
                        <ReactQuill theme="snow" value={description} onChange={setdescription} />
                    </div>
                    <div className='form-main'>
                        <label>Elementos multimedia</label>
                        <div className='card-multimedia'>
                            <div className='text-center'>
                                <input
                                    {...register('files')}
                                    type="file"
                                    multiple
                                    accept="image/*,video/*"
                                />
                                <p className='mt-2'>Acepta imágenes, videos o modelos 3D</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-main'>
                        <label>Imagenes de descripción</label>
                        <div className='card-multimedia'>
                            <div className='text-center'>
                                <input
                                    {...register('imgs')}
                                    type="file"
                                    multiple
                                    accept="image/*,video/*"
                                />
                                <p className='mt-2'>Acepta imágenes, videos o modelos 3D</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-main'>
                        <label>Categoría</label>
                        <select {...register('category')} className='input-main'>
                            <option value="Electronica">Electrónica</option>
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
                            <input
                                {...register('price', { required: true })}
                                className='input-main'
                                type="number"
                                step={0.01}
                                placeholder='S/. 0'
                            />
                        </div>
                        <div className='w-100'>
                            <label>Precio de comparación</label>
                            <input {...register('priceCompare')} className='input-main' type="number" placeholder='S/.' />
                        </div>
                    </div>
                    <div className='d-flex gap-3 mt-3'>
                        <div className='w-100'>
                            <label>Costo del artículo</label>
                            <input
                                {...register('cost', { required: true })}
                                className='input-main'
                                type="number"
                                step={0.01}
                                placeholder='S/.'
                            />
                        </div>
                        <div className='w-100'>
                            <label>Ganancia</label>
                            <input
                                value={gain.toFixed(2)}
                                readOnly
                                className='input-main'
                                type="text"
                                placeholder='--'
                            />
                        </div>
                        <div className="w-100">
                            <label>Margen</label>
                            <input
                                value={`${margin}%`}
                                readOnly
                                className='input-main'
                                type="text"
                                placeholder='--'
                            />
                        </div>
                    </div>
                </div>
                <div className='content-form mt-3'>
                    <h6>Especificaciones</h6>
                    {
                        specs.map((x, idx) => (
                            <div key={idx} className='d-flex gap-3 mt-3'>
                                <div className='w-100'>
                                    {idx === 0 && (<label>Nombre</label>)}
                                    <input
                                        value={x.name}
                                        onChange={(e) => onchangeName(idx, e.target.value)}
                                        className='input-main'
                                        type="text"
                                        placeholder='Nuevo..'
                                    />
                                </div>
                                <div className='w-100'>
                                    {idx === 0 && (<label>Descripción</label>)}
                                    <input
                                        value={x.description}
                                        onChange={(e) => onchangeDescription(idx, e.target.value)}
                                        className='input-main'
                                        type="text"
                                        placeholder='Juego..'
                                    />
                                </div>
                                <div className="w-50">
                                    {idx !== specs.length - 1 ? (
                                        <button
                                            type='button'
                                            onClick={() => setspecs(specs.filter((_, i) => i !== idx))}
                                            className='btn-main-admin'>
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    ) : (
                                        <button
                                            type='button'
                                            onClick={() => {
                                                if (x.name && x.description) {
                                                    setspecs([...specs, { name: '', description: '' }]);
                                                }
                                            }}
                                            className='btn-main-admin'>
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Variants setVariants={setVariants} variants={variants} />
                <div className='text-end mt-2'>
                    <button type='submit' className='btn-main-admin'>
                        {isLoading && (<i className="fa-solid fa-spinner icon-load me-2"></i>)}
                        Guardar producto
                    </button>
                </div>
            </div>
            <div>
            </div>
        </form>
    );
};
