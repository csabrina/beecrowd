import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		double raio = sc.nextDouble();
		double volume = (4/3.0)*3.14159*Math.pow(raio,3);
		System.out.printf("VOLUME = %.3f\n",volume);
	}
}
