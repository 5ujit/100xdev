package Array;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Scanner;

public class baseJava {
    public static void main(String[] args) {
Scanner sc = new Scanner(System.in);
// array of primitives
        int [] arr= new int[5];
        arr[0]= 23;
        arr[1]= 22;
        arr[2]= 535;
        arr[3]= 535;
        arr[4]= 535;

/*
        System.out.println(arr[3]);
        for(int i=0; i< arr.length; i++){
            arr[i]= sc.nextInt();

        }


//        for(int i=0; i< arr.length; i++){
//            System.out.print(arr[i] + "  ");
//        }


//enhanched for loop
                for (int num : arr){ // for every element in array , print the element
                    System.out.print(num + " ");// here num reprsent element of the array
                }

                //3rd method for printing
                System.out.println(Arrays.toString(arr));



                // array objects
*/
        String [] str= new String[4];
        for(int i=0; i< str.length;i++ ){
            str[i]= sc.next();
        }
        System.out.println(Arrays.toString(str));
        str[1]= "kunal";
        System.out.println(Arrays.toString(str));
    }
}
