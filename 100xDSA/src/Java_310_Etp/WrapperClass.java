package Java_310_Etp;

import java.util.ArrayList;

public class WrapperClass {
    public static void main(String[] args) {
        // 🔹 Auto-boxing: Java converts int → Integer automatically
        Integer obj = 10;  // int 10 is automatically converted to Integer
        System.out.println("Auto-boxing: int 10 → Integer obj = " + obj);

        // 🔹 Auto-unboxing: Java converts Integer → int automatically
        int num = obj;  // Integer obj is automatically converted back to int
        System.out.println("Auto-unboxing: Integer obj → int num = " + num);

        // 🔹 Auto-boxing in ArrayList (ArrayList only works with objects)
        ArrayList<Integer> list = new ArrayList<>();
        list.add(20);  // Java converts int 20 → Integer automatically (Auto-boxing)
        list.add(30);
        System.out.println("ArrayList with Integer: " + list);

        // 🔹 Auto-unboxing when retrieving values from ArrayList
        int value = list.get(0); // Java converts Integer → int automatically (Auto-unboxing)
        System.out.println("Auto-unboxing from ArrayList: " + value);
    }
}
