import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int biscoito = sc.nextInt();
		int sorvete = sc.nextInt();
		int soma = 0;
		int chocolate = 0;
		while (sorvete <= biscoito) {
			sorvete = sc.nextInt();
		}
		for (int i = 0; soma < sorvete; i++) {
			soma += biscoito+i;
			chocolate++;
		}
		System.out.println(chocolate);
	}

}
