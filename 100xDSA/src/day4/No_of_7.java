package day4;

public class No_of_7 {
    public static void main(String[] args) {
        System.out.println("****");
        int n= 1323232354;
        int count =0;
//        int rem;
        while(n>0){
          int  rem=n%10;
            if(rem==2){
                count++;
            }
            n=n/10;
        }
        System.out.println(count);
    }
}
