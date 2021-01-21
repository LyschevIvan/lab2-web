
<%@page
        contentType="text/html" pageEncoding="UTF-8"
        language="java"
        session="true"

    %>

<jsp:useBean id="table" class="com.lyschev.Bean"/>
<!doctype html>
<html lang="ru">
    <head>
        <title>Лаб 2</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">
        <script src="js/IndexScripts.js"></script>

    </head>
    <body class="d-flex flex-column min-vh-100">

    <header class="header"><h1>Лыщев Иван Р3210<small> вариант 10773</small></h1>

    </header>
    <div class="container-fluid h-90">
        <div class="row my-1 ">
            <div class="container col-md-6 col-lg-4 my-3">
                <canvas id="canvas" onclick="clickCanvas()"
                        style="background-color:#ffffff;" width="300"
                        height="300"></canvas>
            </div>
            <form class="inp-form col-md-4 col-lg-4 my-3 py-3 container" method="post">
                <div class="R-inp row my-2">
                    <label class = "col-12">
                        R =
                        <select class="r-select" name="r-inp">
                            <option value="1"> 1 </option>
                            <option value="1.5"> 1.5 </option>
                            <option value="2"> 2 </option>
                            <option value="2.5"> 2.5 </option>
                            <option value="3"> 3 </option>
                        </select>
                    </label>
                </div>
                <div class="X-inp my-2">
                    <div class="row align-middle">
                        <label class= "col-3 pt-5">  X = </label>
                        <table class="button_table pr-3 col-8">
                            <tr>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="-2">
                                </td>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="-1.5" >
                                </td>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="-1" >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="-0.5" >
                                </td>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="0" >
                                </td>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="0.5" >
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="1" >
                                </td>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="1.5" >
                                </td>
                                <td>
                                    <input type="button" class="x_button btn btn-block btn-outline-dark" name="X" value="2" >
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="Y-inp row my-2">
                    <label class = "col-12">
                        Y =
                        <input type="text" name="y-inp" maxlength="7" class="y-input">
                    </label>
                    <p class="input_alert col-12">введите правильное значение Y! [-5,+5]</p>
                </div>




                <div class ="row p-3 ">
                    <button class="submit-btn col-lg-5 mr-lg-3 btn btn-outline-success" disabled type="submit" >Отправить</button>
                    <button class="clear-btn col-lg-5 mt-3 mt-lg-0 btn btn-outline-warning" type = "reset" >Очистить</button>
                </div>
            </form>
            <div class="container my-3 p-1 col-md-12 col-lg-4">
                <table class=" table-striped table-bordered tbl w-100 bg-light overflow-scroll text-center" id="table">
                    <tr>
                        <th>R</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Result</th>
                    </tr>
                    ${table.printPoints()}
                </table>
            </div>
        </div>

    </div>
    <footer class="mt-auto text-center"><h5>Itmo 2020</h5></footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>
</html>