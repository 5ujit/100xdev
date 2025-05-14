package basicsPraticsQ ;
public class P1Swap2no {
    public static void main(String[] arg) {

        int a = 2;
        int b = 7;
        // locic1 -Thierd varible
        System.out.println("Before swaping value are .. =>" + a + " " + b);
        /*
         * int t=a;
         * a=b;
         * b=t;
         */

        // logic2 - use + & - without third varible 
/* 
        a=a+b;
        b=a-b;
        a=a-b;
        */
        // logic3 use  * and  / without third varble 
        // here a & b shoud not be zero 
      
      
      /*  a=a*b;
        b=a/b;
        a=a/b;

 */
// logic4 - use XOR operator without third varible  
        
        /*
            a = a ^ b;
            b = a ^ b;
            a = a ^ b;
            */

            // logica 5 single - statement
            b=a+b- (a=b);
        System.out.println("After  swaping value are .. =>" + a + " " + b);


    }

}