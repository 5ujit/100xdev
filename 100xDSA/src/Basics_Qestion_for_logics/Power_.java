package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Power_ {

    public static void main(String[] args) {
        int n,p,result=1;
        System.out.println("Enter No n.");
        Scanner sc = new Scanner(System.in);
        n=sc.nextInt();
        System.out.println("Enter poser p ");
        p=sc.nextInt();
        for (int i=1; i<=p; i++){
            result =n*result;
        }
        System.out.println("Power "+ result);


    }
}

