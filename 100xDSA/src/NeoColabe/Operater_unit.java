package NeoColabe;
import java.util.Scanner;

public class Operater_unit {


    public class Main {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            int a = sc.nextInt();
            int b = sc.nextInt();

            System.out.println(
                    (a > 0 && b > 0 && a % 2 != 0 && b % 2 != 0)
                            ? "Both integers are positive and not multiples of 2"
                            : "The condition is not met for both integers"
            );
        }
    }


}
