package Basics_Qestion_for_logics;

import java.util.Scanner;

public class Vowel_Or_Consonant {
    public static void main(String[] args) {
        char ch ;
        System.out.println("enter any char");
        Scanner sc = new Scanner(System.in);
        ch= sc.next().charAt(0);
        if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
            System.out.println("Vowel");
        }else {
            System.out.println("consonant");
        }
    }
}
