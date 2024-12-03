import React from 'react'

export const BarMessageApp = () => {
    return (
        <div className='bar'>
            <div className='message'>
                <span className='ms-5 message-item' style={{ fontSize: '1.3rem' }}>
                    Pre-order now to avoid disappointment
                </span>
                <div className='ms-5 message-item' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>198</span>
                    <span style={{ fontSize: '0.8rem' }}>in stock now</span>
                </div>
                <span className='ms-5 message-item' style={{ fontSize: '1.3rem' }}>
                    Prime S24 Plus phone launches soon!
                </span>
                <button className='ms-5 message-item'>
                    PRE-ORDER NOW <i className="fa fa-arrow-right ms-2"></i>
                </button>
                <span className='ms-5 message-item' style={{ fontSize: '1.3rem' }}>
                    Pre-order now to avoid disappointment
                </span>
                <div className='ms-5 message-item' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>198</span>
                    <span style={{ fontSize: '0.8rem' }}>in stock now</span>
                </div>
                <span className='ms-5 message-item' style={{ fontSize: '1.3rem' }}>
                    Prime S24 Plus phone launches soon!
                </span>
                <button className='ms-5 message-item'>
                    PRE-ORDER NOW <i className="fa fa-arrow-right ms-2"></i>
                </button>
            </div>
        </div>
    )
}
