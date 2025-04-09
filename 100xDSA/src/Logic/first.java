package Logic;

import java.util.Scanner;

public class first {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int count =0;
        while (n>0){
            n=n/10;
            count++;
/*            System.out.println(count); why we can't print here
          count
            will you plss explain me
  */
        }

        System.out.println(count);
    }

    
}
