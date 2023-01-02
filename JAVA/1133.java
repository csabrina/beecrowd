import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int x = sc.nextInt();
		int y = sc.nextInt();
		int inicio;
		int fim;
		if(x<=y) {
			inicio =x;
			fim =y;
		} else {
			inicio = y;
			fim = x;
		}
		for (int rsj = inicio+1; rsj != fim; rsj++) {
			if (rsj % 5 == 2 || rsj % 5 == 3) {
				System.out.println(rsj);
			}
		}
		
	}

}
