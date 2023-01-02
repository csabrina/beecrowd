import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int menor = sc.nextInt();
		int posicao = 0;
		for(int i = 1; i < N; i++) {
		int x = sc.nextInt();
		if(x < menor){
		menor = x;
		posicao = i;

		}
		}
		System.out.println("Menor valor: "+ menor);
		System.out.println("Posicao: "+ posicao);
		}

		}
		