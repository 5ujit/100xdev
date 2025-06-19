package function;
import  java.util.Scanner;
public class Greeting {
    public static void main(String[] args) {
        // String message = greet();
//        System.out.println(message);

        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your name ");
        String naam= sc.next();
        String personalised= myGreeet(naam);

        System.out.println(personalised);

    }
 /*   static  String myGreeet( String name){
        String  messgge= " Hello "+ name ;
        return messgge;
    }
*/


       static  String myGreeet( String name){

        String  messgge= " Hello "+ name ;
        return messgge;
    }


    static  void greeting(){
        System.out.println("hello this only by calling funcion ");
    }



















        //greeting();
//        Scanner sc = new Scanner(System.in);
//        System.out.println("Enter your name ");
//        String name= sc.next();
//        String personalised = myGreet(name);
//        System.out.println(personalised);
//
//
//
//
//
//
//    }
//
//    static String myGreet(String name ){
//        String message ="Hello "+ name;
//        return message;
//    }
//    static void greeting(){
//        System.out.println("Hello world");
//    }
}
