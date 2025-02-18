package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Count_digits {
    public static void main(String[] args) {
        int n,count=0;
        System.out.println("Enter  any number ");
        Scanner sc = new Scanner(System.in);
        n=sc.nextInt();
        while(n>0){
            n=n/10;
            count ++;


        }
        System.out.println("No of digits "+ count);


    }
}
