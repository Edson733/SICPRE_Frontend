import React, {useContext} from 'react';
import {AuthContext} from '../auth/AuthContext';
import {Navigate} from 'react-router-dom';

const ClientRouterPrivate = ({children}) => {
    const {logged, user} = useContext(AuthContext);
    return (logged && (user.role === 'Cliente')) ? children : 
        (logged && (user.role === 'Administrador')) ? 
        <Navigate to={'/admin/listaProductos'}/> : 
        <Navigate to={'/login'}/>
};

export default ClientRouterPrivate;