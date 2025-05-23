package Array;

import java.util.Arrays;
import java.util.Scanner;

public class MultiDimension {
    public static void main(String[] args){

        /*
           1  2  3
           4  5  6
           7  8  9

        * */
//          int [][]arr = new int [3][6]
        Scanner sc = new Scanner(System.in);
/*
int[][] arr= new int[3][];
        int [][] arr = {
                { 1 , 2,  3},// 0th index
                {4  ,5 },// 1st index
                {7  ,8, 9,4}//2nd index -> arr[2] = {6,8,9,4}
        };
        */
        int [][] arr= new int[3][3];
        System.out.println(arr.length);// no of rows
        // input

        for (int row = 0; row < arr.length; row++) {
            //for each co in every row 
            for (int col = 0; col < arr[row].length; col++) {
                arr[row][col]=sc.nextInt();
            }

        }

        // output
//        for (int row = 0; row < arr.length; row++) {
//            //for each co in every row
//            for (int col = 0; col < arr[row].length; col++) {
//                System.out.print(arr[row][col]+ " ");
//            }
//            System.out.println();
//        }

        // 2nd way
//        for (int row =0 ;row< arr.length; row++){
//            System.out.println(Arrays.toString(arr[row]));
//        }

        for (int[] a : arr) {
            System.out.println(Arrays.toString(a));
        }
    }
}
