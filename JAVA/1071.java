import java.util.Scanner;
 
 public class Main {
 
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
         int X = sc.nextInt();
         int Y = sc.nextInt();
     
         int soma = 0;
       
         if (Y <= X) {
             for (int r = Y + 1; r < X; r++) {
                 if (r % 2 != 0) {
                   soma += r;
            }
            
            }
            } else {
              for (int j = X + 1; j < Y; j++) {
                  if (j % 2 != 0) {
                      soma += j;
                  }
          }
            }
            System.out.println(soma);
    }
    }
 