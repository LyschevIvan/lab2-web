<%--
  Created by IntelliJ IDEA.
  User: ivanlyschev
  Date: 12/28/20
  Time: 7:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<jsp:useBean id="table" class="com.lyschev.Bean" />
<html>
    <head>
        <title>Результаты</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css" integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I" crossorigin="anonymous">

    </head>
    <body>
        <table class="tbl table-striped table-bordered text-center m-1">
            <tr>
                <th class="p-1">R</th>
                <th class="p-1">X</th>
                <th class="p-1">Y</th>
                <th class="p-1">Result</th>
            </tr>
            ${table.printPoints()}
        </table>
        <a href="${pageContext.request.contextPath}/" class="btn btn-outline-dark m-1">назад</a>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
    </body>

</html>
