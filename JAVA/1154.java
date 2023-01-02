import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner (System.in);
		int idade = 0;
		double soma = 0;
		int cont = 0;
		while (idade >= 0) {
			idade = sc.nextInt();
			if(idade >= 0) {
			soma += idade;
			cont ++;
		}
			
			
	}
		
		System.out.printf("%.2f\n",(soma/cont));
		
		}
}
