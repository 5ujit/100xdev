package function;

public class ChangeValue {
    public static void main(String[] args) {
        System.out.println(" hello this is Sujit devloper earing 90k " );

    int [] arr= {1,3,2,45,6};
    change(arr);
    }
    static void change(int[] nums){
        nums[0]=99;
    }
}
/*
int[] arr = {1, 3, 2, 45, 6};: This is an integer array named arr. It holds multiple values in one variable.
change(arr);: The change method is called, and the array arr is passed as a parameter.
static void change(int[] nums): The change method takes an integer array as its parameter.
Here, nums is the parameter variable (a reference to the passed array).
nums[0] = 99;: The first element of the array (nums[0]) is modified to 99.
Since arrays are passed by reference, this change reflects in the original array (arr).
}
 */