import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { PopCartApp } from '../components/PopCartApp';
import { FormApp } from '../components/FormApp';
export const MainContext = createContext();
export const MainContextApp = () => {
    const [cart, setCart] = useState([]);
    const [visibleCart, setVisibleCart] = useState(false);
    const closeCart = () => setVisibleCart(false);
    const [isForm, setIsForm] = useState(false);
    const closeForm = () => setIsForm(false);

    useEffect(() => {
        if (visibleCart || isForm) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [visibleCart, isForm]);

    return (
        <MainContext.Provider value={{ cart, setCart, setVisibleCart, setIsForm }}>
            <Outlet />
            {
                visibleCart && (<PopCartApp close={closeCart} />)
            }
            {
                isForm && (<FormApp close={closeForm} />)
            }
        </MainContext.Provider>
    )
}
