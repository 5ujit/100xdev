package Array.Question;

import java.util.Scanner;

/**
 * Take an array as input form the user. Search for a given number x and print
 * the index at which it occurs.
 *  */
public class FindNo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of array");
        int size;

        size =sc.nextInt();
        System.out.println("enter the element of array ");
        int number[]= new int[size];

        //input

        for ( int i=0; i<size; i++){
            number[i]= sc.nextInt();
        }
        // space
        System.out.println(" ");




        // output
        for(int i=0; i<size; i++){
            System.out.println(number[i] +":  : "+ i );
        }
        int x = sc.nextInt();

        // output for and searching the

            for ( int i=0; i<number.length; i++){
                if (number[i]==x){
                    System.out.println("x found at index : " + i);
                }
            }
    }
}