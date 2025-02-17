package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Char_input {
    public static void main(String[] args) {
        System.out.println("take input of char ");
    char ch;
        System.out.println("Plss Enter Character");
        Scanner sc = new Scanner(System.in);
        ch=sc.next().charAt(0);
        System.out.println(ch);

    }
}
