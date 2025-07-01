package NeoColabe;

import java.util.Scanner;

public class U_1second {
    public static void main(String[] args) {
        // Type your code here
        Scanner in = new Scanner(System.in);

        double pam = in.nextDouble();
        double jim = in.nextDouble();
        double Dwight = in.nextDouble();

        double total = pam + jim + Dwight;

        System.out.printf("Rs. %.2f\n", total);
    }



}
