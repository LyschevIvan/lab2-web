package com.lyschev;

import java.util.ArrayList;


public class Bean {
    static private ArrayList<Point> points = new ArrayList<Point>();

    public static String printPoints() {
        StringBuilder data = new StringBuilder();
        for (Point p : points)
            data.append(p.print());
        return data.toString();
    }


    static void addPoint(Point p){
        points.add(p);
    }


    static void clear() {
        points.clear();
    }
}
