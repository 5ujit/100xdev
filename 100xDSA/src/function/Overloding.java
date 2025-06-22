package function;

import java.util.Arrays;

public class Overloding {
    public static void main(String[] args) {
//        fun(67);
//        fun("lala");
    demo(32,23,45,65,32);
    demo("adfasdf", "adfasdf");

    }


    static  void fun(int a){
        System.out.println(a);
    }

    static void fun(String name){
        System.out.println(name);

    }
    static void demo(int ...v){
        System.out.println(Arrays.toString(v));
    }
    static void demo(String ...v){
        System.out.println(Arrays.toString(v));
    }

}


/*



        fun(454);
        fun("hello world");

    }
    static  void fun(int a){
        System.out.println("first one ");
        System.out.println(a);
    }

    static void fun(String name ){
        System.out.println("secind one ");
        System.out.println(name);

function name can be same but ist arguments will hve to be diff like one should have int one should have int
 */