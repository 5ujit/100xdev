package java310.fuction;

import java.util.Scanner;

public class First {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        // Q: take input of 2 number and print the sum
        int num1 , num2, sum;
        System.out.println("Enter number 1: ");
        num1 = in.nextInt();
        System.out.println("Enter number 2");
         num2= in.nextInt();
          sum = num1+num2;

        System.out.println("The sum  "+ sum  );

        System.out.println("hello ");
    }
}
