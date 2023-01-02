import java.io.IOException; 
import java.util.Scanner;
public class Main {
public static void main(String[] args) throws IOException {
Scanner sc =new Scanner(System.in);
double A = sc.nextDouble();
double B = sc.nextDouble();
double C  = sc.nextDouble();
if ((A == 0) || ((Math.pow(B,2))-(4*A*C) < 0)) 
{
System.out.println("Impossivel calcular");
}
else {
   double valor = ((-B + Math.sqrt(((Math.pow(B,2))-(4*A*C))))/(2*A));
   double valor2 = ((-B - Math.sqrt(((Math.pow(B,2)) -(4*A*C))))/(2*A));
   System.out.printf("R1 = %.5f\n",valor);
   System.out.printf("R2 = %.5f\n",valor2);
}
}
}
