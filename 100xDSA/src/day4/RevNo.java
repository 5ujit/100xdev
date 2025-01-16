package day4;
import  java.util.Scanner;
public class RevNo {
    public static void main(String[] args) {
        System.out.println("reverse no");
        Scanner sc = new Scanner(System.in);

        int n,rev=0;

        System.out.println("enter a no ");
        n= sc.nextInt();
        while (n!=0){
            int digit= n%10;
            rev= rev*10+digit;

            n= n/10;
        }
        System.out.println(rev);

    }
}
