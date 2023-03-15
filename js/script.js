$(document).ready(function () {

    $("#alerta").show();
    $("#preguntas").hide();
    $("#aviso").hide();
    var preguntas = 0;


    $("#btnPregunta").click(function () {
        var pregunta = $("#pregunta").val();
        if (pregunta == "") {
            $("#aviso").show();
        } else {
            $("#alerta").hide();
            $("#aviso").hide();
            $("#preguntas").show();
            preguntas++;

            $("#lista").append("<li class='pregunta list-group-item row d-flex align-items-center'><span class='col-5 col-sm-6 col-lg-7'>" + pregunta + "</span><span class='col-3 col-sm-3 alert alert-danger mb-0'>Sin respuesta</span><span class='col-1 col-sm-1 col-lg-1'> &nbsp; </span><button class='col-3 col-sm-2 col-lg-1 btn btn-danger borrar'>Borrar</button></li>");
            console.log("Estoy pulsando");
        }
    });

    $('#preguntas').on('click', '.borrar', function () {

        $(this).parent().remove();
        preguntas--;
        if (preguntas == 0) {
            $("#alerta").show();
            $("#preguntas").hide();
        }
    });
});