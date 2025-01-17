import React, { useState } from 'react'

export const TabFilterApp = ({ visible, setVisible }) => {
    const [colors, setColors] = useState(['#FFE500', '#000000', '#D49A06', '#05AA3D', '#808080', '#A54DCF', '#E9D7AA', '#FF8A00'])
    return (
        <div className={`content-filter ${visible ? 'filter-visible' : ''}`}>
            <div className='t-filter px-3 pb-2 pt-3'>
                <button onClick={() => setVisible(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <span>FILTRAR</span>
                <span></span>
            </div>
            <div className='p-filter'>
                <div className='c-filter'>
                    <div>
                        <span className='fw-bold'>MARCA</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className='b-filter'>
                        <div className='item-filter'>APEX</div>
                        <div className='item-filter'>BENCHMARK</div>
                        <div className='item-filter'>EDGE</div>
                        <div className='item-filter'>PRIME</div>
                        <div className='item-filter'>VIDEE</div>
                    </div>
                </div>
                <div className='c-filter'>
                    <div>
                        <span className='fw-bold'>COLOR</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className='items-filter items-color'>
                        {
                            colors.map((x, index) => (
                                <div className='item-filter' style={{ height: '50px' }} key={index}>
                                    <span style={{ background: `${x}` }}></span>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='b-down'>
                <button className='w-75'>Limpiar</button>
                <button onClick={() => setVisible(false)} className='w-100'>Mostrar todos</button>
            </div>
        </div>
    )
}
