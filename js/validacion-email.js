function validarMail(input)
{
    //Validación de correo
    const validarMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Obtiene el valor de correo escrito en el formulario
    let email = input.value;

    //Comprueba que el correo escrito cumpla con lo necesario
    if (email.match(validarMail)) {

        alert("Listo!");
        return true;

    } else {

        alert("La dirección '"+email+"' no es válida. Intenta nuevamente");
        return false;

    }
}