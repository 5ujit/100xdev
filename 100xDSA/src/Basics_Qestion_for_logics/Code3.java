package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Code3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter first number: ");
        double num1 = sc.nextDouble();

        System.out.println("Enter second number");
        double num2= sc.nextDouble();

        System.out.println("Enter operator (+,-,*,/,%): ");
        char operator =sc.next().charAt(0);

        double result =0;

        // Using switch case to perform op
        switch (operator){
            case '+':
                result=num1+num1;
                break;
            case  '-':
                result =num1-num2;
                break;

                
        }


    }
}
