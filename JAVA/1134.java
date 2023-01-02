import java.util.Scanner;

public class Main {

	public static void main (String[] args) {
		Scanner sc = new Scanner (System.in);
		int alcool = 0;
		int gasolina = 0;
		int diesel = 0;
		int a = sc.nextInt();
		while (a != 4) {
		if(a == 1) {
			alcool ++;
		}else if(a == 2) {
			gasolina ++;
			}else if(a == 3) {
				diesel ++;
			}
		a = sc.nextInt();
		}
		System.out.println("MUITO OBRIGADO");
		System.out.println("Alcool: " + alcool);
		System.out.println("Gasolina: " + gasolina);
		System.out.println("Diesel: " + diesel);
	}
 }
