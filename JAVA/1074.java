import java.util.Scanner;

public class Main {

	public static void main(String[] args){
	 Scanner sc = new Scanner(System.in);
	 int N = sc.nextInt();
	 for (int i = 1; i <= N; i++) {
	    int x = sc.nextInt();
	    if (x==0) {
             System.out.println("NULL");
	     }
	         else if (x % 2 == 0) {
             System.out.print("EVEN ");
             }else {
             System.out.print("ODD ");
         }
         if(x > 0) {
             System.out.println("POSITIVE");
         }else if (x < 0) {
             System.out.println("NEGATIVE");
	  
         }
	   }
	}
}