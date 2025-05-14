
import java.util.Scanner;

public class P2ReverseNumber {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter a number");

        int n = in.nextInt();
        // int rev=0;
        /*
         * int rev=0;
         * while (n!=0){1
         * rev=rev*10+n%10;
         * n=n/10;
         * 
         * }
         */

        // StringBuffer class

        /*
         * StringBuffer sb= new StringBuffer(String.valueOf(n));
         * StringBuffer rev=sb.reverse();
         * System.out.println("Reverse Number :"+ rev);
         */

        // Logic 3 is Using StringBuilder class
        StringBuilder sbl = new StringBuilder();
        sbl.append(n);
        StringBuilder rev = sbl.reverse();
        System.out.println("Reverse Number :" + rev);

        in.close();
    }

}
