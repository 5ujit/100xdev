package function;

public class Overloding {
    public static void main(String[] args) {

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

    }

}
/*
function name can be same but ist arguments will hve to be diff like one should have int one should have int
 */