package function;

import java.util.Arrays;

public class VarArgs {
    public static void main(String[] args){

    fun(2,3,3,45,2341,5,3,2,5,3,5,2,57,24,2);
     multiple(2, 3, 8,"sks", "hello");
    }
    static  void multiple(int a, int b, int c, String ...v){

    }
    static void fun(int ...v){
        System.out.println(Arrays.toString(v));
    }
}


