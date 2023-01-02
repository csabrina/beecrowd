import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int A1 = sc.nextInt();
		int A2 = sc.nextInt();
		int A3 = sc.nextInt();
		int B1 = A2 * 2 + A3 * 4;
		int B2 = A1 * 2 + A3 * 2;
		int B3 = A1 * 4 + A2 * 2;
		if (B1 <= B2 && B1 <= B3) {
			System.out.println(B1);
		} else if (B2 <= B1 && B2 <= B3) {
			System.out.println(B2);
		} else if (B3 <= B1 && B3 <= B2) {
			System.out.println(B3);
		}
	}
}
