package com.lyschev;

class Point {
    double x;
    double y;
    double r;
    boolean isInArea;

    Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    Point(double x, double y, double r, boolean isInArea) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isInArea = isInArea;
    }
    String print(){
        return "<tr>" +
                "<td>" +
                String.format("%.2f", r) +
                "</td>" +
                "<td>" +
                String.format("%.2f", x) +
                "</td>" +
                "<td>" +
                String.format("%.2f", y) +
                "</td>" +
                "<td>" +
                (isInArea ? "Yes" : "No") +
                "</td>" +
                "</tr>";
    }
}
