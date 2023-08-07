import Axios from 'axios';

export const LoginService = async(form) => {
    console.log("Hola desde Service: ", form.username);
    const url = 'http://localhost:8080/api-sicpre/auth/';
    const formLogin = new FormData();
    formLogin.append('username', form.username);
    formLogin.append('password', form.password);
    formLogin.append("METHOD", "POST");
    const response = await Axios.post(url, formLogin);
    return response;
};