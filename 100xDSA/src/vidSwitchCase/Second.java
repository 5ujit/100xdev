package vidSwitchCase;
import java.util.Scanner;
public class Second {
    public static void main(String[] args) {
        System.out.println("hello devloper sujit");

   Scanner sc = new Scanner(System.in);
   String fruit =sc.next();
   switch (fruit){
       case "Mango":
           System.out.println("King of fruits ");
           break;
       case"Apple":
           System.out.println("A apple a day keep doctor away ");
           break;
       case "Orange":
           System.out.println("Round fruits");
           break;
       case "Grapes":
           System.out.println("small fruits");
           break;
       default:
           System.out.println("please enter a valid fruits");

           



   }




    }
}
