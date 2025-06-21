// File location: package function;
package function;

// Class named Scope
public class Scope {

    // Main method - starting point of the program
    public static void main(String[] args) {
        int a = 10; // 'a' is declared and initialized with value 10
        int b = 20; // 'b' is declared and initialized with value 20
        String name = "rahul"; // 'name' is declared and initialized with "rahul"

        {
            // This is a local block. Variables declared here will stay only in this block

            // int a = 54; ❌ Not allowed because 'a' is already declared outside this block
            // You can’t declare 'a' again in the same method, but you can change its value

            a = 78; // Updating the value of 'a' to 78

            int c = 58; // 'c' is a new variable declared inside this block. It exists only in this block

            name = "kunal"; // Changing the value of 'name' from "rahul" to "kunal"

            System.out.println(name); // Output: kunal
        }

        // After the block ends, variable 'c' is no longer accessible
        System.out.println(name); // Output: kunal (because we changed it in the block)
    }

    // A separate method named random, which takes an integer 'marks' as input
    static void random(int marks) {
        int num = 67; // Local variable 'num' only for this method
        System.out.println(num);   // Output: 67
        System.out.println(marks); // Output: value passed when method is called
    }
}

// ✅ Any variable initialized outside a block can be used inside the block.
// ❌ But a variable declared inside the block cannot be used outside the block.
// ✅ You can update (change the value of) a variable declared outside the block from inside the block.





/*
public static void main(String[] args) {
        int a= 10;
        int b=20;



        {
            a=5;// can reasin the value what we made outside of the scope
//            int a= 5;  can't do this
            int c= 20;

        }
        int c= 30;// see here we can aingn the value of c outside of the scope of

    }
 */