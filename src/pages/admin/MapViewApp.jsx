import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
const containerStyle = {
    width: '100%',
    height: '100%'
};
export const MapViewApp = () => {
    const { lat, lng } = useParams();
    return (
        <LoadScript googleMapsApiKey="AIzaSyCsc264Mcj1S3D7iERtDsdgcPKy8Q1qFLM">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={{ lat: Number(lat), lng: Number(lng) }}
                zoom={16}
            >
                <Marker
                    position={{ lat: Number(lat), lng: Number(lng) }}
                />
            </GoogleMap>
        </LoadScript>
    )
}
