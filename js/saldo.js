$(document).ready(function() {
    var arr_tarjetas_agregadas = new Array();

    if(localStorage.getItem('tarjetas_agregadas') != null) {
        arr_tarjetas_agregadas = JSON.parse(localStorage.getItem('tarjetas_agregadas'));

        $.each(arr_tarjetas_agregadas, function(index, tarjeta) {
            var html_tarjeta = $('<option>', {
                'value': tarjeta,
            }).append(tarjeta);

            $("#tarjetas_agregadas").append(html_tarjeta);

            $('select').material_select();
        });
    }

    $("#ver_saldo").click(function(event) {
        /*var nueva_tarjeta = $("#num_tarjeta").val();*/

        var html_titulo = $('<h2>', {
        }).append("SALDO TOTAL");
        
        var html_saldo = $('<p>', {
        }).append("000");

        $("#saldo").append(html_titulo);
        $("#saldo").append(html_saldo);
    });

    $("#tarjetas_agregadas").on("change", function() {
        if($("#tarjetas_agregadas").val() == "") {
            $("#num_tarjeta").prop("disabled", false);
            $("#num_tarjeta").removeClass('hide');
        } else {
            $("#num_tarjeta").prop("disabled", true);
            $("#num_tarjeta").addClass('hide');
        }
    });

});