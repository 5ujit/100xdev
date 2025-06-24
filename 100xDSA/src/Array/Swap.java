import java.util.Arrays;

//packimport java.util.Arrays;

public class Swap {
    public static void main(String[] args) {
         int[] arr = {1, 2, 34, 9, 18};  // Array declaration inside main method

        swap(arr, 1, 3);  // Swap elements at index 1 and 3

        System.out.println(Arrays.toString(arr));  // Print the modified array
    }

    // Method to swap two elements in the array
    static void swap(int[] arr, int a, int b) {
        int temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}










/*
public class Swap {
    public static void main(String[] args) {
        int []arr ={10,20,30,40,50};

        swap(arr, 0,4);
        System.out.println(Arrays.toString(arr));
    }
// reversing the array
static void reverse(int[] arr ){
    int start = 0;
    int end = arr.length-1;


    while(start< end ){
        // swap
        swap(arr , start, end );
        start++ ;
        end--;


    }

}

//    this is swaping array
    static void swap(int[] arr, int index1 , int index2){
        int temp= arr[index1];
        arr[index1]= arr[index2];
        arr[index2]=temp;


    }



}
*/