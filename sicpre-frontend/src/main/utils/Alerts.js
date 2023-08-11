import Swal from 'sweetalert2';

export const onSuccess = (text) => {
    Swal.fire(
        '¡Registrado!',
        text,
        'success'
    ).then(() => window.location.reload());
};

export const onFail = (text) => {
    Swal.fire(
        '¡Error!',
        text,
        'error'
    );
};