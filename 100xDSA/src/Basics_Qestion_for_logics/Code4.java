package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Code4 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter n");
        int n ,count=0;
        n=sc.nextInt();
        for (int i=0;i<=n; i++){
            count = count +i;
        }

        System.out.println(count);

    }
}
