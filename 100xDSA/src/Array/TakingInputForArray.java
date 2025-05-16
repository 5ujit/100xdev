package Array;
import java.util.Scanner;
public class TakingInputForArray {

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
        System.out.println(" ");


        for(int i=0; i<size; i++){
            System.out.println(number[i]);
        }
    }
}
