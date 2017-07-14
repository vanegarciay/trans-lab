$(document).ready(function() {
    var arr_tarjetas_agregadas = new Array();

    if(localStorage.getItem('tarjetas_agregadas') != null) {
        arr_tarjetas_agregadas = JSON.parse(localStorage.getItem('tarjetas_agregadas'));

        $.each(arr_tarjetas_agregadas, function(index, tarjeta) {
            var html_tarjeta = $('<p>', {
                'class': 'dato',
            }).append(tarjeta);

            $("#tarjetas_agregadas").append(html_tarjeta);
        });
    }

    $("#email").text(localStorage.getItem("email"));

    $("#add").click(function(event) {
        var nueva_tarjeta = $("#num_tarjeta").val();
        
        var html_nueva_tarjeta = $('<p>', {
            'class': 'dato',
        }).append(nueva_tarjeta);

        arr_tarjetas_agregadas.push(nueva_tarjeta);
        localStorage.setItem('tarjetas_agregadas', JSON.stringify(arr_tarjetas_agregadas));

        $("#tarjetas_agregadas").append(html_nueva_tarjeta);
        $("#num_tarjeta").val("");
    });
    
});