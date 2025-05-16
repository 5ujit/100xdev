package Array;

public class ArrayVarargsExample {
    public  static int sum( int... numbers){
        int total=0;
        //loop through all the numbers and add them
        for (int num : numbers){
            total = total+num;
        }
        return  total;
    }

    public static void main(String[] args) {
        System.out.println("example of Varargs Example ");
        System.out.println("sum of 1,2,3 :"+ sum(1,2,3));
    }
}
