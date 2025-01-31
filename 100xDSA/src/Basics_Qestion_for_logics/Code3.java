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
            case '*':
                result=num1*num2;
                break;
            case '/':
            if(num2!=0){
                result = num1/num2;


            }else {
                System.out.println("Error division by zero is not allowed");
            }
            break;
            case '%':
                if(num1!=0){
                    result =num1 %num2;
                }else {
                    System.out.println("Error Module by zero is not allowed ");
                    return;
                }
                break;
            default:
                System.out.println("Invalid op please enter +,-*,/,or %");
                return;
        }
        System.out.println("Return "+result);


    }
}
