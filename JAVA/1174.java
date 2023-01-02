import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		for(int i = 0; i < 100; i++) {
		double x = sc.nextDouble();
		if(x <= 10) {
		System.out.printf("A[" + i + "] = " + "%.1f\n", x);
		}
		}

		}
		}