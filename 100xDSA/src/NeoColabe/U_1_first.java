package NeoColabe;
import java.util.Scanner;

public class U_1_first {



        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            int first = sc.nextInt();
            int second = sc.nextInt();
            int third = sc.nextInt();

            boolean isHalfway = (second * 2 == first + third);

            System.out.println(isHalfway);
            if (isHalfway) {
                System.out.println("The second integer is halfway between the first and third integers.");
            } else {
                System.out.println("The second integer is not halfway between the first and third integers.");
            }
        }
    }



