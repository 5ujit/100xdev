package  Array.Question;
// queion is take an array of names as input form the user and print them on the screen
import java.util.Scanner;

class Q_02 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array ");
        int  size = sc.nextInt();

        sc.nextLine(); // Important clear the leftover newlne
        System.out.println("Enter the elements of the array ");
        String[] name= new String[size];


        // input
        for ( int i= 0; i<size; i++){
            name[i]= sc.nextLine();
        }
        //output
        for ( int i= 0; i<size; i++){
            System.out.println(name[i] + " "+ i);
        }


    }
}