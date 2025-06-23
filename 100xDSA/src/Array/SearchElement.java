package Array;
import java.util.Scanner;
public class SearchElement {  Scanner sc = new Scanner(System.in);

    // Input size and target element
    int n = sc.nextInt();
    int x = sc.nextInt();

    // Input array
    int[] a = new int[n];
    boolean found = false;
        for (int i = 0; i < n; i++) {
        a[i] = sc.nextInt();
        if (a[i] == x) {
            found = true;
        }
    }

    // Output result
        if (found) {
        System.out.println("YES");
    } else {
        System.out.println("NO");
    }

        sc.close();
}

