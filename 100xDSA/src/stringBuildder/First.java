// 📘 File: Main.java

public class First {
    public static void main(String args[]) {

        // Create a StringBuilder object with initial string "Hello"
        StringBuilder sb = new StringBuilder("Hello");

        // Append " World" to the string
        sb.append(" World");
        System.out.println(sb); // Output: Hello World

        // Insert a comma at index 5
        sb.insert(5, ",");
        System.out.println(sb); // Output: Hello, World

        // Replace characters from index 6 to 11 with "java"
        sb.replace(6, 11, "java");
        System.out.println(sb); // Output: Hello,java

        // Delete characters from index 5 to 11
        sb.delete(5, 11);
        System.out.println(sb); // Output: Hello

        // Reverse the string
        sb.reverse();
        System.out.println(sb); // Output: olleH

        // Print the character at index 2
        System.out.println(sb.charAt(2)); // Output: l

        // Change the character at index 0 to 'h'
        sb.setCharAt(0, 'h');
        System.out.println(sb); // Output: hlleO

        // Print the length and capacity
        System.out.println(sb.length());   // Output: 5
        System.out.println(sb.capacity()); // Output: Default 16 + initial string size

        // Create an empty StringBuilder to show default capacity
        StringBuilder s = new StringBuilder();
        System.out.println(s.capacity());  // Output: 16

        // Delete character at index 3
        sb.deleteCharAt(3);
        System.out.println(sb); // Output: hllO

        // Get substring from index 0 to 2 (excluding 2)
        String sub = sb.substring(0, 2);
        System.out.println(sub); // Output: hl

        // Declare and initialize a String and a StringBuilder
        String str = "Hello";
        StringBuilder str2 = new StringBuilder("hello");
    }
}
