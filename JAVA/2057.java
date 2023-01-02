import java.util.Scanner;

	public class Main {
		
		public static void main(String[] args) {
			
			Scanner sc = new Scanner(System.in);
			int a = sc.nextInt();
			int b = sc.nextInt();
			int c = sc.nextInt();
			int soma= a+b+c;
			if (soma >= 24) {
				System.out.println(soma-24);
			} else if (soma < 0) {
				System.out.println(24+soma);
			} else {
				System.out.println(soma);
			}
			
		}

	}
