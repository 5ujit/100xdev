package function;

import java.util.Arrays;

public class VarArgs {
    public static void main(String[] args) {
        System.out.println();
//        fun(2,322,243,2,5,1,3);
    fun("asfda","afas","asfd","asfda","adfs");
    }



    static void multiple(int a,  int b , String ...v){    //
        // varible multiple argument so we should give in same order like a and b will be the first and second and then string

    }


//    static  void fun(int  ...v);
    static  void fun(String ...v){
        System.out.println(Arrays.toString(v));
    }
}
// variable length argument