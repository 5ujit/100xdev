package vidSwitchCase;
import java.util.Scanner;
public class Second {
    public static void main(String[] args) {
        System.out.println("hello devloper sujit");

   Scanner sc = new Scanner(System.in);
//   String fruit =sc.next();
//        switch (fruit) {
//            case "Mango" -> System.out.println("King of fruits ");
//            case "Apple" -> System.out.println("A apple a day keep doctor away ");
//            case "Orange" -> System.out.println("Round fruits");
//            case "Grapes" -> System.out.println("small fruits");
//            default -> System.out.println("please enter a valid fruits");

        int day = sc.nextInt();
        switch (day){
            case 1 -> System.out.println("Monday");
            case 2 -> System.out.println("Tuesday");
            case 3 -> System.out.println("Wenday");
            case 4 -> System.out.println("Thursday");
            case 5 -> System.out.println("Friday");
            case 6 -> System.out.println("Saturday");
            case 7 -> System.out.println("Sunday");
            default -> System.out.println("enter valid day no ");








        }

    }
}
