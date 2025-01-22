package function;
import  java.util.Scanner;
public class Greeting {
    public static void main(String[] args) {
        //greeting();
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name ");
        String name= sc.next();
        String personalised = myGreet(name);
        System.out.println(personalised);






    }

    static String myGreet(String name ){
        String message ="Hello "+ name;
        return message;
    }
    static void greeting(){
        System.out.println("Hello world");
    }
}
