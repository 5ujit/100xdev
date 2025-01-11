package Question_of_loops;

import java.util.Scanner;

public class largest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

//        Q : find the largest no of these the no
//        int max =a;
//        if(b>max){
//            max=b;
//        }
//        if(c>max){
//            max= c;
//        }

//
//        int max =0;
//        if(a>b) {
//            max = a;
//        }else {
//            max =b;
//        }
//        if(c>max){
//            max=c;
//        }

//    int max = Math.max(c,Math.max(a,b));

        int result = Math.max(c,Math.max(a,b));
        System.out.println(result);


// if else approach
//        if( a>b){
//            if(a>c){
//                System.out.println("a is greater "+a);
//            }else {
//                System.out.println("c is greater "+ c);
//            }
//        }else {
//            if (b>c){
//                System.out.println("b is greater"+ b);
//            }else {
//                System.out.println("c is greatest "+c);
//            }
//        }
//        sc.close();

    }
}
