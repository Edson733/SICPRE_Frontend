import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../auth/AuthContext';
import {LoginComponent} from '../components/LoginComponent';
import {LoginService} from '../services/LoginService';

export const Login = () => {
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = async(data) => {
        console.log("Hola desde Login: ", data);

        await LoginService(data).then(response => {
            console.log("Respuesta de SICPRE: ", response);
            login(response.data);
            if(response.data.role == "Administrador"){
                navigate('/admin/listaProductos', {replace:true});
            } else if(response.data.role == "Cliente"){
                navigate('/cliente/pedido', {replace:true});
            }
        }).catch(error => {
            console.log("Error desde Login.js: ", error);
        });
    };

    return (
        <LoginComponent onData={onLogin}/>
    );
};