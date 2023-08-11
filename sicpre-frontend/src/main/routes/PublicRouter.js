import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext';

const PublicRouter = ({children}) => {
    const {logged, user} = useContext(AuthContext);
    return (!logged) ? children : 
        (logged && (user.role === "Administrador")) ? 
        <Navigate to={'/admin/listaProductos'}/> : 
        <Navigate to={'/cliente/pedido'}/>
};

export default PublicRouter;