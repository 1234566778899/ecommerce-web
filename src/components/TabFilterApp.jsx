import React from 'react'

export const TabFilterApp = ({ visible, setVisible }) => {
    return (
        <div className={`content-filter ${visible ? 'filter-visible' : ''}`}>
            <div className='t-filter px-3 pb-2 pt-3'>
                <button onClick={() => setVisible(false)}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <span>Filter</span>
                <span></span>
            </div>
            <div className='p-filter'>
                <div className='c-filter'>
                    <div>
                        <span className='fw-bold'>BRAND</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className='b-filter'>
                        <div>APEX</div>
                        <div>BENCHMARK</div>
                        <div>EDGE</div>
                        <div>PRIME</div>
                        <div>VIDEE</div>
                    </div>
                </div>
                <div className='c-filter'>
                    <div>
                        <span className='fw-bold'>BRAND</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className='b-filter'>
                        <div>APEX</div>
                        <div>BENCHMARK</div>
                        <div>EDGE</div>
                        <div>PRIME</div>
                        <div>VIDEE</div>
                    </div>
                </div>
                <div className='c-filter'>
                    <div>
                        <span className='fw-bold'>BRAND</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className='b-filter'>
                        <div>APEX</div>
                        <div>BENCHMARK</div>
                        <div>EDGE</div>
                        <div>PRIME</div>
                        <div>VIDEE</div>
                    </div>
                </div>
            </div>
            <div className='b-down'>
                <button className='w-75'>Clear all</button>
                <button onClick={() => setVisible(false)} className='w-100'>SHOW 35 ITEMS</button>
            </div>
        </div>
    )
}
