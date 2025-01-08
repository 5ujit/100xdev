import java.util.Scanner;
class LargerOf2{ 
    public static void main(String[] args) {
        Scanner  in= new Scanner(System.in);    
        int a,b;
            

        System.out.println("enter 1st ");
        a=in.nextInt();
        System.out.println("enter 2st ");
        b= in.nextInt();

        if(a>=b){
            System.out.println("a is largest of 2 no "+ a);

        }else{
            System.out.println("b is largest "+b);

        }


    }
}