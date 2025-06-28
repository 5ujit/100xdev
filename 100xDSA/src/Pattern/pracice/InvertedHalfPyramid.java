package Pattern.pracice;

public class InvertedHalfPyramid {
    public static void main(String[] args) {
        int n=4;
        for ( int i =1; i<=n; i++ ){
            for ( int j=1; j<=n-1; j++){
                System.out.println(" ");
            }
            //innner loop
            for (int j=1; j<=i ; j++){
                System.out.println(" ");
            }
        }
    }
}
