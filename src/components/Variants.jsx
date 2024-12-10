import React, { useEffect, useRef, useState } from 'react'

export const Variants = ({ variants, setVariants }) => {
    const [showOptions, setShowOptions] = useState(false);
    const optionsRef = useRef(null);
    const addVariant = (event, key) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            let arr = variants[key];
            arr.push(event.target.value);
            setVariants(prev => ({ ...prev, [key]: arr }))
            event.target.value = ''
        }
    }
    const removeVariant = (key, value) => {
        let elements = variants[key].filter(x => x != value);
        setVariants(prev => ({ ...variants, [key]: elements }));
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
        <div>
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
                            <div onClick={() => setVariants({ ...variants, 'Color': [] })}>Color</div>
                            <div onClick={() => setVariants({ ...variants, 'Talla': [] })}>Talla</div>
                        </div>
                    )}
                </button>

            </div>
            <div className='content-form mt-3'>
                <h6 className='fw-bold'>Metacampos Categoría</h6>
                {
                    Object.keys(variants).map((key) => (
                        <div className='mt-2' key={key} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr' }}>
                            <div className='mt-2 fw-bold' style={{ color: '#6B1ED6' }}>{key}</div>
                            <div className='variant-content'>
                                {
                                    variants[key].map((x, index) => (<span onClick={() => removeVariant(key, x)} style={{ cursor: 'pointer' }} key={index} className='me-1 mb-1'>{x}</span>))
                                }
                                <input type="text" placeholder='Here..' onKeyDown={event => addVariant(event, key)} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
