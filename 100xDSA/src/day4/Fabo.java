package day4;

import java.util.Scanner;

public class Fabo {
    public static void main(String[] args) {
        System.out.println("hello baba");

    Scanner sc = new Scanner(System.in);
     int n = sc.nextInt();
      int p=0;
      int i=1;
      int count=2;
      while(count<=n){
          int temp =i;
          i=i+p;
          p=temp;
          count++;

      }
        System.out.println(i);
    }
}
