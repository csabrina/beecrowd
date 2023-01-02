import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String NOME = sc.nextLine();
		double FIXO = sc.nextDouble();
		double vendas = sc.nextDouble();
		double salario = (vendas*0.15)+FIXO;
		System.out.printf("TOTAL = R$ %.2f\n", salario);
}
}