package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Second {
    public static void main(String[] args) {
        System.out.println("find the largest of three no");
        int a,b,c;
        Scanner sc = new Scanner(System.in);




        System.out.println("enter a");
        a=sc.nextInt();
        System.out.println("enter b");
        b=sc.nextInt();
        System.out.println("enter c");
        c=sc.nextInt();

        int largest = Math.max(a,Math.max(b,c));

        if(largest == a){
            System.out.println("a is the largest ");

        } else if (largest == b) {
            System.out.println("b is the largest");

        }else{
            System.out.println("c is the largest ");
        }


//
//        if(a>b && a>c){
//            System.out.println("a is largest ");
//        } else if (b>a && b>c) {
//            System.out.println("b is the largest ");
//
//        }else {
//            System.out.println(" c is largest  ");
//        }

    }
}
