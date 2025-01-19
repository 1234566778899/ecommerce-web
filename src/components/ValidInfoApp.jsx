import React, { useState, useEffect, useContext } from 'react'
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import { showInfoToast } from '../utils/showInfoTast';
import axios from 'axios';
import { CONFIG } from './../config';
import { MainContext } from '../contexts/MainContextApp';

const containerStyle = {
    width: '100%',
    height: '200px'
};

export const ValidInfoApp = ({ order, close }) => {
    const [billCurrent, setBillCurrent] = useState(0);
    const { setIsForm, setCart } = useContext(MainContext);
    const [position, setPosition] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    async function geocodeAddress() {
        const { address } = order;
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCsc264Mcj1S3D7iERtDsdgcPKy8Q1qFLM`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry.location;
            return { lat, lng };
        }
        return null;
    }
    const createOrder = () => {
        if (notFound) {
            showInfoToast('Debe ingresar una dirección válida');
            return;
        }
        const data = {
            ...order,
            ...position,
            pay: billCurrent == 0 ? 'YAPE' : 'EFECTIVO'
        }
        if (isLoading) return;
        setIsLoading(true);
        axios.post(`${CONFIG.uri}/orders`, data)
            .then(res => {
                setIsForm(false);
                showInfoToast('Pedido creado correctamente');
                setCart([])
            })
            .catch(error => {
                console.log(error);
                showInfoToast('Error en el servidor');
                setIsLoading(false);
            })
    }
    useEffect(() => {
        geocodeAddress()
            .then(coords => {
                if (coords) {
                    setPosition(coords);
                } else {
                    setNotFound(true);
                }
            })
            .catch(err => console.error(err));
    }, [order]);
    const handleMarkerDragEnd = (e) => {
        const newLat = e.latLng.lat();
        const newLng = e.latLng.lng();
        setPosition({ lat: newLat, lng: newLng });
    };

    return (
        <div className='text-start'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => close()} style={{ border: 'none', background: 'none' }}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <h5 className='fw-bold w-100 text-center platform'>Confirma tu pedido</h5>
                <button onClick={() => close()} style={{ border: 'none', background: 'none' }}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <br />
            <h6 className='text-start fw-bold'>¿Cómo quieres pagar?</h6>
            <div className='bills'>
                <div
                    onClick={() => setBillCurrent(0)}
                    className={`bill-2 ${billCurrent === 0 ? 'active' : ''}`}>
                    <img src={require('../assets/imgs/yape.png')} alt="img-yape" />
                </div>
                <div
                    onClick={() => setBillCurrent(1)}
                    className={`bill-3 ${billCurrent === 1 ? 'active' : ''}`}>
                    <span><i className="fa-solid fa-money-bill me-1"></i>Efectivo</span>
                    {/* <span className='amount'>Ingresa monto</span> */}
                </div>
            </div>
            <br />

            <h6 className='fw-bold'>Datos de la entrega</h6>
            <div className='mt-3' style={{
                display: 'flex', borderBottom: '1px solid gray',
                paddingBottom: '10px', justifyContent: 'space-between', paddingRight: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <i className="fa-solid fa-location-dot"></i>
                    <div className='ms-3' style={{ display: 'flex', flexDirection: 'column', fontSize: '0.9rem' }}>
                        <span className='fw-bold'>Lo recibes en</span>
                        <span>{order.address}</span>
                    </div>
                </div>
                <span className='fw-bold'
                    onClick={() => close()}
                    style={{ fontSize: '0.85rem', textDecoration: 'underline', cursor: 'pointer' }}>Cambiar</span>
            </div>
            <div className='mt-3' style={{
                display: 'flex', borderBottom: '1px solid gray',
                paddingBottom: '10px', justifyContent: 'space-between', paddingRight: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', }}>
                    <i className="fa-solid fa-motorcycle"></i>
                    <div className='ms-3' style={{ display: 'flex', flexDirection: 'column', fontSize: '0.9rem' }}>
                        <span className='fw-bold'>Delivery</span>
                        <span>24 horas</span>
                    </div>
                </div>
            </div>

            <div className='mt-3'>
                <h6 className='fw-bold'>Ubicación en el mapa</h6>
                {
                    !notFound && (
                        <div style={{ width: '100%', height: '200px' }}>
                            {position ? (
                                <LoadScript googleMapsApiKey="AIzaSyCsc264Mcj1S3D7iERtDsdgcPKy8Q1qFLM">
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={position}
                                        zoom={16}
                                    >
                                        <Marker
                                            position={position}
                                            draggable={true}
                                            onDragEnd={handleMarkerDragEnd}
                                        />
                                    </GoogleMap>
                                </LoadScript>
                            ) : (
                                <p>Cargando mapa...</p>
                            )}
                        </div>
                    )
                }
                {
                    !notFound ? (<p className='mt-2' style={{ fontSize: '0.85rem' }}>
                        Arrastra el marcador para ajustar la posición exacta.
                    </p>) : (
                        (<p className='mt-2 text-danger' style={{ fontSize: '0.85rem' }}>
                            No se encontró la dirección ingresada.
                        </p>)
                    )
                }
            </div>

            <div>
                <h5 className='fw-bold mt-3'>Resumen</h5>
                <div className='d-flex justify-content-between px-1'>
                    <span>Productos</span>
                    <span>S/. 15</span>
                </div>
                <div className='d-flex justify-content-between px-1'>
                    <span>Envío</span>
                    <span>Gratis</span>
                </div>
            </div>
            <button className='btn-finish platform' onClick={() => createOrder()}>
                {isLoading && (<i className="fa-solid fa-spinner icon-load me-2"></i>)}
                FINALIZAR COMPRA - S/. 15.00</button>
        </div>
    )
}
