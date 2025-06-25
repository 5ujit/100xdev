package LogicQuesPractice;

import java.util.Scanner;

public class CheckPrime
{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n= sc.nextInt();
        if (n==2){
            System.out.println (n + " n is prime ");
        }else {
            boolean isPrime = true;
            for(int i=2; i<= n-1; i++){
                if(n%i==0){// n is multiple of i ( i not qqual to 1 or
                    isPrime= false;
                }
            }

            if(isPrime==true){
                System.out.println(n + " n is prime ");
            }else {
                System.out.println( n+ " n is not prime ");
            }
        }


    }
}
/*
*   public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n= sc.nextInt();
        if (n==2){
            System.out.println (n + " n is prime ");
        }else {
            boolean isPrime = true;
            for(int i=2; i<= n-1; i++){
                if(n%i==0){// n is multiple of i ( i not qqual to 1 or
                    isPrime= false;
                }
            }

            if(isPrime==true){
                System.out.println(n + " n is prime ");
            }else {
                System.out.println( n+ " n is not prime ");
            }
        }


*
* */