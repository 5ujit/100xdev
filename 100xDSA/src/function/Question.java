package function;

import java.util.Scanner;

public class Question {
    public static void main(String[] args) {
        System.out.println("do some question developer sujit ");
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        boolean ans = isPrime(n);

        System.out.println(ans);

    }
    static boolean isPrime(int n){
        if(n<=1){
            return false;
        }
        int  c=2;
        while(c * c <=n){
            if (n % c == 0){
                return false;
            }
            c++;

        }
        if(c*c>n){
            return true;
        }
        return false;
//        return c* c> n;
    }
}
