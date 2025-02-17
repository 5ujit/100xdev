package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Code7 {
    public static void main(String[] args) {
        System.out.println("Odd and even ");
        System.out.println("enter one no ");
        int a;
        Scanner sc = new Scanner(System.in);
       a= sc.nextInt();
        if( a%2==0){
            System.out.println("even no "+ a);
        }else{
            System.out.println("odd Number ");
        }



    }
}
