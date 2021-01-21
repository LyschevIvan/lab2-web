package com.lyschev;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



public class ControllerServlet extends javax.servlet.http.HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {


        String clearString = request.getParameter("clear");

        if (clearString != null) {
            request.getRequestDispatcher("/table").forward(request, response);
        } else {
            request.getRequestDispatcher("view/index.jsp").forward(request, response);
        }

    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {

        String xString = request.getParameter("X");
        String yString = request.getParameter("Y");
        String RString = request.getParameter("R");
        if (xString == null || yString == null || RString == null) {
            request.getRequestDispatcher("view/index.jsp").forward(request, response);
        } else {
            request.getRequestDispatcher("/table").forward(request, response);
        }


    }
}
