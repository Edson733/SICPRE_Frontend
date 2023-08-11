import {onFail} from '../utils/Alerts';
import apiUrl from '../utils/AppUrl';

export const LoginService = async(form) => {
    const formLogin = new FormData();
    formLogin.append('username', form.username);
    formLogin.append('password', form.password);
    formLogin.append("METHOD", "POST");
    try {
        const response = await apiUrl.post("/login/", formLogin);
        const user = await apiUrl.get(`/users/${response.data.id}`);
        console.log(user);
        if(!user.data.status) throw 'disabled';
        return response;
    } catch (error) {
        console.log("Error desde LoginService: ", error);
        error === 'disabled' ? onFail('Usuario desabilitado') : onFail('Usuario y/o contraseña incorrectos');
    }
};