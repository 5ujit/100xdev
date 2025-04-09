package Logic;

import java.util.Scanner;

public class SumDigit {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n;
        int sum=0;
        n= sc.nextInt();
        while(n>0){
            sum =sum+n%10;
            n=n/10;
        }
        System.out.println(sum);
    }
}
