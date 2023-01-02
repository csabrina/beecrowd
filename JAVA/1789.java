import java.util.Scanner;

	public class Main {
		
		public static void main(String[] args) {
			
			Scanner sc = new Scanner(System.in);
			while (sc.hasNext()) {
				int lesminhas = sc.nextInt();
				int m = 1;
				for (int i = 0; i < lesminhas; i++) {
					int v = sc.nextInt();
					if (v > m) {
						m = v;
					}
				}
				if (m < 10) {
					System.out.println(1);
				} else if (m >= 20) {
					System.out.println(3);
				} else {
					System.out.println(2);
				}

			}
			
		}
	}
	