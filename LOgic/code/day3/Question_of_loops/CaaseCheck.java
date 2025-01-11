package Question_of_loops;

import java.util.Scanner;

public class CaaseCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        char ch;
        String   st;
        ch= sc.next().charAt(0);
//        System.out.println(ch);
    if(ch >='a'&& ch <= 'z' ){
        System.out.println("Lowercase");
    }else {
        System.out.println("Uppercase");

    }
    }
}
