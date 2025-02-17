package Basics_Qestion_for_logics;

import java.util.Scanner;

public class print_sum_odd_or_ev_range {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Print sum of Odd OR Even in given Range");
        System.out.println("enter a Number");
        int n,sum=0;
        n= sc.nextInt();
        if (n%2==0){
            for( int i=0; i<=n; i=i+2){
                sum = sum +i;
            }
            System.out.println("even wala " +sum);

        }else{
            for (int i =1; i<=n; i=i+2){
                sum=sum +i;
            }
            System.out.println("odd wala " +sum);
        }

    }
}
//8
//1+2 +3+4+5+6+7+8,