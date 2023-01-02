import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int soma= 0;
		int x = sc.nextInt();
		for(int i = 0; i<5; i++) {
			int resposta = sc.nextInt();
			if(resposta== x) {
				soma++;
			}
		}
		System.out.println(soma);
	}
}