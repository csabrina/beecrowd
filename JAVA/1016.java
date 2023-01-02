import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		int y;
		Scanner sc = new Scanner(System.in);
		y = sc.nextInt();
		int x = (int) (y/((90 / 60.00) - (60.00 / 60.00)));
		System.out.println(x + " minutos");
	}
}