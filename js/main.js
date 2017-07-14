$(document).ready(function() {
    $(".iniciar_sesion_btn_padre").on("click", ".iniciar_sesion_btn", function(e) {
        correoIsValid();
        contrasenaIsValid();

        if(correoIsValid() && contrasenaIsValid()){
            var emailValue = $("#email").val();
            /* Almacenamos el correo */
            localStorage.setItem('email',emailValue);
            /* Redirigimos */
            window.open('preguntas.html','_self',false);
        }
    });

    $(".input-group").on("keypress", "input", function(e) {
        var error_found_length = $(this).parent("div").parent("div").find(".hidden").length;
        if(error_found_length == 0) {
            $(this).parent("div").parent("div").find(".alert").addClass('hidden');
        }
        
    });

    //validacion correo
    function correoIsValid(){
        var emailValue = $("#email").val();
        /*console.log("tu email", emailValue);*/
        if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
            $("#espacio-error-email").removeClass('hidden');
            $("#espacio-error-email").text('Debes ingresar un email valido.');
            return false;
        } else{
            /*localStorage.setItem('email',emailValue);*/
            return true;
        }
    }
    // validacion contraseña
    function contrasenaIsValid(){
        var contrasenaValue = $("#contrasena").val();
        /*console.log("contraseña", contrasenaValue);*/
        if(!(/^\d{8,}$/).test(contrasenaValue)) {
            $("#espacio-error-pass").removeClass('hidden');
            $("#espacio-error-pass").text('Debes ingresar una contraseña valida');
            $("#constrasena").val("");
            return false;
        }else {
            return true;
        }
    }
});