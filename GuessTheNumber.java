import java.util.Random;
import java.util.Scanner;

public class GuessTheNumber {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(100) + 1; // generate random number between 1 and 100
        int numGuesses = 0;
        Scanner scanner = new Scanner(System.in);

        System.out.println("I'm thinking of a number between 1 and 100. Can you guess it?");

        while (numGuesses < 10) { // allow maximum of 10 guesses
            int guess = scanner.nextInt();
            numGuesses++;

            if (guess == randomNumber) {
                System.out.println("Congratulations, you guessed the number in " + numGuesses + " tries!");
                return;
            } else if (guess < randomNumber) {
                System.out.println("Too low! Guess again.");
            } else {
                System.out.println("Too high! Guess again.");
            }
        }

        System.out.println("Sorry, you didn't guess the number. It was " + randomNumber + ".");
    }
}
