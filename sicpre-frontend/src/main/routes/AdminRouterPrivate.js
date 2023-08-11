import React, {useContext} from 'react';
import {AuthContext} from '../auth/AuthContext';
import {Navigate} from 'react-router-dom';

const AdminRouterPrivate = ({children}) => {
    const {logged, user} = useContext(AuthContext);
    return (logged && (user.role === 'Administrador')) ? children : 
        (logged && (user.role === 'Cliente')) ? 
        <Navigate to={'/cliente/pedido'}/> : 
        <Navigate to={'/login'}/>
};

export default AdminRouterPrivate;