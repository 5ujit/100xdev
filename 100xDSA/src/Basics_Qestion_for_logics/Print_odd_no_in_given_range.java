package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Print_odd_no_in_given_range {
    public static void main(String[] args) {
        System.out.println("Printing odd no in given range ");
        Scanner sc = new Scanner(System.in);
        int n;
        n=sc.nextInt();
        for (int i =2; i<=n; i= i+2){
            System.out.println(i);
        }
    }
}
