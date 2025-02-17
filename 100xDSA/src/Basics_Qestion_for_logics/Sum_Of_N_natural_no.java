package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Sum_Of_N_natural_no {
    public static void main(String[] args) {
        System.out.println("this is n ");
        Scanner sc = new Scanner(System.in);

        int n,sum= 0 ;
        n=sc.nextInt();
        for (int i =0; i<=n; i++){
            sum = sum +i;

        }
        System.out.println(sum);

    }
}
