import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int a = sc.nextInt();
		int b = sc.nextInt();
		double c = sc.nextDouble();
		int d = sc.nextInt();
		int e = sc.nextInt();
		double f = sc.nextDouble();
		double total = (b * c) + (e * f);
		System.out.printf("VALOR A PAGAR: R$ %.2f\n", total);
	}
}