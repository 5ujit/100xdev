package Basics_Qestion_for_logics;

import java.util.Scanner;

public class ASCII_OF_CHARACTER {
    public static void main(String[] args) {
        System.out.println("print ascii value of any character");
        Scanner sc = new Scanner(System.in);
        int n ;
        char ch;
        ch = sc.next().charAt(0);
        n=ch;
        System.out.println(n);
    }
}
