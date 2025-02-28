package Array;

import java.util.Scanner;

public class Second {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] arr= new int [5];
        arr[0]=23;
        arr[1]=21;
        arr[2]=22;
        arr[3]=26;
        arr[4]=27;

        System.out.println(arr[3]);
        for (int i =0; i<arr.length; i++){
            arr[i]=sc.nextInt();

            
        }
        for (int i=0; i<arr.length; i++){
            System.out.println(arr[i] + " ");
        }
    }
}
