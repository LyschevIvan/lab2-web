fillColor = "#2b602b";
yValidated = false;

$(document).ready(function () {
    var buttons = $(".x_button");
    y_inp = $(".y-input");
    let inp_form = $(".inp-form");
    r_inp = $(".r-select");
    x_val = null;
    drawCanvas(1);
    buttons.click(function () {
                 resetButtons();
                 x_val = $(this).val();
                 $(this).removeClass("btn-outline-dark");
                 $(this).addClass("btn-outline-primary");
                 if(yValidated){
                     $(".submit-btn").prop("disabled", false);
                     putPoint(x_val,y_inp.val().replace(",","."));

                 }

             });

     function resetButtons() {
         buttons.each(function(){
             if ($(this).hasClass("btn-outline-primary")){
                 $(this).removeClass("btn-outline-primary");
                 $(this).addClass("btn-outline-dark");
             }

         });
     }


    const onChange = function () {
        y_inp.val(y_inp.val().replace(/[^0-9-,.]/g, ''));
        let val_Y = y_inp.val().replace(',', '.');
        let re = new RegExp('^-?[0-9]+(\.[0-9]+)?$');
        if (re.test(val_Y)) {
            if ((parseFloat(val_Y) >= -5) && (parseFloat(val_Y) <= 5)) {
                $(".input_alert").attr("style", "visibility :  hidden;");

                if(x_val != null){
                    $(".submit-btn").prop("disabled", false);
                    putPoint(x_val,val_Y);
                }
                yValidated = true;
            } else {
                $(".input_alert").attr("style", "visibility :  visible;");
                $(".submit-btn").prop("disabled", true);
                yValidated = false;
            }
        } else {
            $(".input_alert").attr("style", "visibility :  visible;");
            $(".submit-btn").prop("disabled", true);
            yValidated = false;
        }
    };

    y_inp.keyup(onChange);
    r_inp.on('change',function () {

        drawCanvas(r_inp.val());
        if (yValidated&&x_val!=null){
            putPoint(x_val,y_inp.val().replace(',', '.'))
        }

    });


    inp_form.on("submit", function (event) {
        event.preventDefault();
        var r_val = $('.r-select').val();
        var y_val = $(".y-input").val().replace(',', '.');

        event.preventDefault();
        $.ajax({
            url: "main",
            method: 'get',
            data: {"R": r_val, "X": x_val, "Y": y_val, "ajax": true},
            success: function (data) {
                drawPoint(x_val,y_val,data['isIn'].toLowerCase()=="true");

                $(".tbl").append(data['data']);
            },
            error: function (data) {
                console.log("some error occurs");
            }
        })
    });


    $('.clear-btn').click(function () {
        $.ajax({
            url: 'check',
            method: 'post',
            data: {"clear": true},
            success: function (data) {
                $("#table").html(data);
                onChange();
                yValidated = false;
                x_val = null;
                resetButtons();
                drawCanvas(r_inp.val());

            }
        })
    });


});
function convertX(x){
    return x/r_inp.val()*130+150;

}
function convertY(y) {
    return 150-y/r_inp.val()*130;
}

function putPoint(x, y) {
    drawCanvas(r_inp.val());
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    context.beginPath();
    context.ellipse(convertX(x), convertY(y), 4, 4, 1, 0, 2 * Math.PI, true);
    context.closePath();
    context.strokeStyle = "#000000";
    context.fillStyle = "#a066a8";
    context.fill();
    context.stroke();
}

function drawPoint(x, y, isArea) {

    var canvas = document.getElementById('canvas'),
        context = canvas.getContext("2d");

    context.beginPath();
    context.ellipse(convertX(x) , convertY(y) , 4, 4, 1, 0, 2 * Math.PI, true);
    context.closePath();
    if (isArea) {
        context.strokeStyle = "#20ff00";
        context.fillStyle = "#20ff00";
    } else {
        context.strokeStyle = "#dc3545";
        context.fillStyle = "#dc3545";
    }
    context.fill();
    context.stroke();

}

function drawPoints() {
    $('.tbl tr').each(function(row){
        var row_val = [];
        $(this).find('td').each(function(cell){
            row_val.push($(this).html().replace(",","."));
        });
        drawPoint(parseFloat(row_val[1]),parseFloat(row_val[2]),row_val[3] == "Yes");
    });

}

function createCanvas(x, y, r) {
    drawCanvas(r);
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext("2d");
    context.beginPath();
    context.rect(Math.round(150 + ((x / r) * 130)) - 2, Math.round(150 - ((y / r) * 130)) - 2, 4, 4);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "red";
    context.fill();
    context.stroke();
}


function drawCanvas(r) {
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext("2d");
    //очистка
    context.clearRect(0, 0, canvas.width, canvas.height);

    //прямоугольник
    context.beginPath();
    context.rect(20, 20, 130, 130);
    context.closePath();
    context.strokeStyle = fillColor;
    context.fillStyle = fillColor;
    context.fill();
    context.stroke();

    // сектор
    context.beginPath();
    context.moveTo(150, 150);
    context.arc(150, 150, 65, Math.PI * 3 / 2, 0);
    context.closePath();
    context.strokeStyle = fillColor;
    context.fillStyle = fillColor;
    context.fill();
    context.stroke();

    //треугольник
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(150, 150 + 130);
    context.lineTo(20, 150);
    context.lineTo(150, 150);
    context.closePath();
    context.strokeStyle = fillColor;
    context.fillStyle = fillColor;
    context.fill();
    context.stroke();

    //отрисовка осей
    context.beginPath();
    context.font = "10px Verdana";
    context.moveTo(150, 0);
    context.lineTo(150, 300);
    context.moveTo(150, 0);
    context.lineTo(145, 15);
    context.moveTo(150, 0);
    context.lineTo(155, 15);
    context.strokeStyle = "#000000";
    context.fillStyle = "#000000";
    context.fillText("Y", 160, 10);
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.moveTo(300, 150);
    context.lineTo(285, 145);
    context.moveTo(300, 150);
    context.lineTo(285, 155);
    context.fillText("X", 290, 135);

    // деления X
    context.moveTo(145, 20);
    context.lineTo(155, 20);
    context.fillText(r, 160, 20);
    context.moveTo(145, 85);
    context.lineTo(155, 85);
    context.fillText((r / 2), 160, 78);
    context.moveTo(145, 215);
    context.lineTo(155, 215);
    context.fillText(-(r / 2), 160, 215);
    context.moveTo(145, 280);
    context.lineTo(155, 280);
    context.fillText(-r, 160, 280);
    // деления Y
    context.moveTo(20, 145);
    context.lineTo(20, 155);
    context.fillText(-r, 20, 170);
    context.moveTo(85, 145);
    context.lineTo(85, 155);
    context.fillText(-(r / 2), 70, 170);
    context.moveTo(215, 145);
    context.lineTo(215, 155);
    context.fillText((r / 2), 215, 170);
    context.moveTo(280, 145);
    context.lineTo(280, 155);
    context.fillText(r, 280, 170);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();
    drawPoints();

}
function clickCanvas() {
    var elem = document.getElementById("canvas");
    var br = elem.getBoundingClientRect();
    var left = br.left;
    var top = br.top;
    var event = window.event;
    var x = event.clientX - left;
    var y = event.clientY - top;

    var transf_x = r_inp.val() * (x - 150) / 130;
    var transf_y = r_inp.val() * (150 - y) / 130;

    $.ajax({
        url: "main",
        method: 'get',
        data: {"R": r_inp.val(), "X": transf_x, "Y": transf_y, "ajax": true},
        success: function (data) {

            drawPoint(transf_x,transf_y,data['isIn'].toLowerCase()=="true");

            $(".tbl").append(data['data']);
        },
        error: function (data) {
            console.log("some error occurs");
        }
    })
}