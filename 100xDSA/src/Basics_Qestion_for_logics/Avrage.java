package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Avrage {
    public static void main(String[] args) {
        System.out.println("Hello this is taking out of the avrage of the ");
        int a,b,c,d,e;
        Scanner sc = new Scanner(System.in);
        System.out.println("enter marks of five sub");
        a=sc.nextInt();
        b=sc.nextInt();
        c=sc.nextInt();
        d=sc.nextInt();
        e=sc.nextInt();

        int sum = a+ b+c+d+e;
        System.out.println("Total marks "+ sum );
        double avg= sum/5.0;
        System.out.println("Average marks "+ avg);

    }
}
