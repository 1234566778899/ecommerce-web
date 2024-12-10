import React, { useState } from 'react';
import '../../styles/Admin.css';
import { Outlet, useNavigate } from 'react-router-dom';

export const Admin = () => {
    const [menuActive, setMenuActive] = useState('dashboard');
    const navigate = useNavigate();
    const menuItems = [
        { path: 'dashboard', label: 'Dashboard', icon: 'fa-solid fa-chart-line' },
        { path: 'orders', label: 'Pedidos', icon: 'fa-solid fa-shop' },
        { path: 'products', label: 'Productos', icon: 'fa-solid fa-dolly' },
        { path: 'collections', label: 'Colecciones', icon: 'fa-solid fa-layer-group' },
        { path: 'clients', label: 'Clientes', icon: 'fa-solid fa-user' },
    ];

    const changeMenu = (path) => {
        setMenuActive(path);
        navigate(path)
    }
    return (
        <div className='inter admin-content'>
            <div className='nav-admin'>
                <span style={{ fontWeight: 'bold' }}>IGNITE</span>
                <span style={{ fontWeight: 'bold' }}>ADMIN</span>
            </div>
            <div className='content-main'>
                <div className='menu-admin'>
                    <ul className='list-menu'>
                        {
                            menuItems.map((x, idx) => (
                                <li key={idx} onClick={() => changeMenu(x.path)}
                                    className={`${menuActive == x.path && 'menu-active'}`}>
                                    <i className={`${x.icon} me-2`}></i>
                                    {x.label}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='content-menu'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
