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

    $("#calcular").click(function(event) {
        var tarjeta = "";
        var costo_pasaje = 0;
        var saldo_tarjeta = 0;
        var saldo_final = 0;

        if($("#tarjetas_agregadas").val() == "") {
            tarjeta = $("#num_tarjeta").val();
        } else {
            tarjeta = $("#tarjetas_agregadas").val();
        }

        $.ajax({
            url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=' + tarjeta,
            type: 'GET',
            dataType: 'json',
        })
        .done(function() {
            $("#calculo").html("");

            costo_pasaje = $("#tarifas").val();

            var html_titulo = $('<h2>', {
            }).append("COSTO PASAJE");
            
            var html_costo = $('<p>', {
            }).append('$ ' + costo_pasaje);

            $("#calculo").append(html_titulo);
            $("#calculo").append(html_costo);
        }).done(function(bip) {
            saldo_tarjeta = bip.saldoTarjeta;
            saldo_final = parseInt(saldo_tarjeta.substr(1).split(".").join('')) - parseInt(costo_pasaje);

            var html_titulo = $('<h2>', {
            }).append("SALDO FINAL");
            
            var html_saldo = $('<p>', {
            }).append('$ ' + saldo_final);

            $("#calculo").append(html_titulo);
            $("#calculo").append(html_saldo);
        })
        .fail(function() {
            console.log("error");
        });
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