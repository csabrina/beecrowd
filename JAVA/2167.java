import java.util.Scanner;

	public class Main {
		
		public static void main(String[] args) {
			
			Scanner sc = new Scanner(System.in);
			int t = sc.nextInt();
			int m = sc.nextInt();
			int a = m;
			int para = 0;
			int queda = 0;
			for (int i = 2; i <= t; i++) {
				m = sc.nextInt();
				if (para == 0){
				    if (m < a){
				        queda = i;
				        para++;
				    }
				}
				a= m;
			} System.out.println(queda);
			
		}

	}
	