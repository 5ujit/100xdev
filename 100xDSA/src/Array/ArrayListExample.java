package Array;
import java.util.ArrayList;
import java.util.Scanner;

public class ArrayListExample {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> list =new ArrayList<>(10);


/*
        list.add(23);
        list.add(23);
        list.add(44);
        list.add(23);
        System.out.println(list.contains(23));
//        System.out.println(list.set(0,99));
        System.out.println(list.remove(2));
        System.out.println(list);
   */

   // input
        for ( int i=0; i<5; i++){
            list.add(sc.nextInt());
        }

        for ( int i=0; i<5; i++){
            System.out.println(list.get(i)+ " "); // pass index here list [index] syntax will not work here
        }

        System.out.println(list);

    }
}
