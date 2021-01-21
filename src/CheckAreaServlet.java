package com.lyschev;

import java.io.IOException;
import java.io.PrintWriter;

public class CheckAreaServlet extends javax.servlet.http.HttpServlet {

    private static boolean checkArea(double x, double y, double R) {
        if (x >= 0 && y >= 0 && x * x + y * y <= R * R / 4) {
            return true;
        }
        if (x <= 0 && y >= 0 && y <= R && x >= -R) {
            return true;
        }
        if (x <= 0 && y <= 0 && x+y>=-R) {
            return true;
        }
        return false;
    }


    @Override
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String clearString = request.getParameter("clear");

        if (clearString.equals("true")){
            PrintWriter writer = response.getWriter();
            Bean.clear();
            writer.write("<table class=\"tbl\" id=\"table\">\n" +
                    "            <tr>\n" +
                    "                <th>R</th>\n" +
                    "                <th>X</th>\n" +
                    "                <th>Y</th>\n" +
                    "                <th>Result</th>\n" +
                    "            </tr>\n" +
                    "        </table>");
            writer.flush();

        }

    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        String xString = request.getParameter("X");
        String yString = request.getParameter("Y");
        String RString = request.getParameter("R");
        if (xString != null && yString != null && RString != null) {
        try{
            double r  = Double.parseDouble(RString);
            double x  = Double.parseDouble(xString);
            double y  = Double.parseDouble(yString);
            boolean isIn = checkArea(x,y,r);
            Point point = new Point(x,y,r,isIn);
            Bean.addPoint(point);

            if (request.getParameter("ajax")!= null && request.getParameter("ajax").equals("true")){
                PrintWriter writer = response.getWriter();
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                writer.printf("{" +
                        "\"data\": \"%s\"," +
                        "\"isIn\": \"%b\"}",point.print(),isIn);
                writer.flush();
                System.out.println("send");

            }
            else{
                request.getRequestDispatcher("view/table.jsp");
            }
        }
        catch (Exception e){
            request.getRequestDispatcher("view/index.jsp").forward(request,response);
        }
        } else {
        request.getRequestDispatcher("view/table.jsp").forward(request, response);
    }
    }
}
