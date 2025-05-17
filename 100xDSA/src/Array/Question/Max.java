package Array.Question;

public class Max {
    /*
    // imagine that arr is not empty
    public static void main(String[] args) {
        int [] arr = {1,2,3,44,55, 44};
        System.out.println(max(arr));
    }
    static int max(int[] arr){
        int maxVal= arr[0];
        for (int i=0; i<arr.length; i++){
            if (arr[i]> maxVal){
                maxVal= arr[i];

            }
        }
        return maxVal;

    }

     */

    public static void main(String[] args) {
        int [] arr={1,2,3,4,5,33,22,44,22};
        System.out.println(maxRange(arr,1,2 ));
    }
    static int maxRange(int[]arr, int start , int end ){
        int maxVal= arr[start];
        for ( int i=start; i<end; i++){
            if(arr[i]>maxVal){
                maxVal= arr[i];
            }
        }


        return maxVal;
    }


}
