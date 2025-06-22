package function;

import java.util.Scanner;

public class Question {
    static boolean checkPrime(int n) {

        int cnt = 0;
        // Loop through numbers from 1 to n.
        for (int i = 1; i <= n; i++) {
                    if (n % i == 0) {
                // Increment the counter.
                cnt = cnt + 1;
            }
        }
        if (cnt == 2) {
            // Return true, indicating
            // that the number is prime.
            return true;
        }
        else {
            // Return false, indicating
            // that the number is not prime.
            return false;
        }
    }


        public static void main(String[] args) {
            int n = 2;
            boolean isPrime = checkPrime(n);
            if (isPrime) {
                System.out.println(n + " is a prime number.");
            } else {
                System.out.println(n + " is not a prime number.");
            }
        }
}

/*

public class Main {
    // Function to check if a
    // given number is prime.
    static boolean checkPrime(int n) {
        // Initialize a counter variable to
        // count the number of factors.
        int cnt = 0;
        // Loop through numbers from 1 to n.
        for (int i = 1; i <= n; i++) {
            // If n is divisible by i
            // without any remainder.
            if (n % i == 0) {
                // Increment the counter.
                cnt = cnt + 1;
            }
        }

        // If the number of
        // factors is exactly 2
        if (cnt == 2) {
            // Return true, indicating
            // that the number is prime.
            return true;
        }
        // If the number of
        // factors is not 2.
        else {
            // Return false, indicating
            // that the number is not prime.
            return false;
        }
    }

    public static void main(String[] args) {
        int n = 1483;
        boolean isPrime = checkPrime(n);
        if (isPrime) {
            System.out.println(n + " is a prime number.");
        } else {
            System.out.println(n + " is not a prime number.");
        }
    }
}


* */
  /*
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
//        return c* c> n;*/
