package function;

public class Swap {
    public static void main(String[] args) {
        System.out.println("this is Sujit");

        int a=10;
        int b=20;
        // swap number code


//        int temp = a;
//        a= b;
//        b=temp;

        swap(a,b);
        System.out.println("a =>" +a+ " " + +b);
        String name = "kunal bhai";
        changeName(name);
        System.out.println(name);



    }

    static void changeName(String bilu){
        bilu = "rahul baba";
    }



    static  void swap(int a, int b){
        int temp= a;
        a=b;
        b=temp;

    }


}
