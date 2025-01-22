package LogicQuesPractice;

import java.util.Scanner;

public class OddEvv {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int  n;
        n= sc.nextInt();

        if (n%2==0){
            System.out.println("this is even");
        }else {
            System.out.println("odd");
        }

    }
}
