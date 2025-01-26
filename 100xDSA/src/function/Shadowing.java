package function;

public class Shadowing {

    static String environment = "Production";

    public static void main(String[] args) {
        System.out.println("Running in: " + environment); // Prints "Production"

        String environment = "Debug"; // Local shadowing for debugging
        System.out.println("Running in: " + environment); // Prints "Debug"
    }



//    static  int x=90;// this will be shodowed at line 8
//    public static void main(String[] args) {
//
//        System.out.println(x);// 90
//        int x=40;
//
//        System.out.println(x);//40
//        fun();
//
//
//    }
//    static void fun(){
//        System.out.println(x);
//    }
}


/*
1. **Shadowing** happens when a local variable in a smaller scope (e.g., a method)
has the same name as a variable in a larger scope (e.g., a class-level variable).
2. The local variable "hides" or overrides the outer variable within its scope.
3. Outside that local scope, the outer variable becomes accessible again.
4. It’s useful for temporary overrides but can cause confusion if not used carefully.
c
 */