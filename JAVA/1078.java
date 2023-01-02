import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		
		int n = sc.nextInt();
		
		for (int r = 1; r <= 10; r++) {
			int multi = n*r;
			
			System.out.println(r+" x "+ n + " = "+ multi);
		}
		
		

	}

}
