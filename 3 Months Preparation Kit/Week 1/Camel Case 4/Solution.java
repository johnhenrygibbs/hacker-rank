import java.io.*;
import java.util.*;

// Switching to Java due to the constraints of this problem.

public class Solution {

    public static void main(String[] args) throws Exception {

        File file = new File("/Users/johngibbs/Desktop/John/Repositories/hacker-rank/3 Months Preparation Kit/Week 1/Camel Case 4/Test Case 0.txt");
        Scanner scan = new Scanner(file);
        ArrayList<String> contents = new ArrayList<String>();

        while (scan.hasNextLine()) {

            contents.add(scan.nextLine());

        }

        ArrayList<String> result = new ArrayList<>();

        for (int i = 0; i < contents.size(); i++) {

            String inputLine = contents.get(i);
            String[] inputArray = inputLine.split(";");

            // First three conditionals perform the split command.

            if (inputArray[0].equals("S") && inputArray[1].equals("M")) {

                String[] splitMethod = inputArray[2].split("(?=\\p{Upper})");
                String methodName = String.join(" ", splitMethod).toLowerCase().replaceAll(("[()]"), "");
                result.add(methodName);

            } else if (inputArray[0].equals("S") && inputArray[1].equals("C")) {

                String[] splitClass = inputArray[2].split("(?=\\p{Upper})");
                String className = String.join(" ", splitClass).toLowerCase();
                result.add(className);

            } else if (inputArray[0].equals("S") && inputArray[1].equals("V")) {

                String[] splitVariable = inputArray[2].split("(?=\\p{Upper})");
                String variableName = String.join(" ", splitVariable).toLowerCase();
                result.add(variableName);

            }

            // Next three conditionals perform the combine command.

            if (inputArray[0].equals("C") && inputArray[1].equals("M")) {

                String[] combineMethod = inputArray[2].split(" ");
                String newMethod = combineMethod[0];

                for (int j = 1; j < combineMethod.length; j++) {

                    String firstLetter = combineMethod[j].substring(0, 1).toUpperCase();
                    String restOfWord = combineMethod[j].substring(1);
                    String newWord = firstLetter += restOfWord;
                    newMethod += newWord;

                }

                result.add(newMethod += "()");

            } else if (inputArray[0].equals("C") && inputArray[1].equals("C")) {

                String[] combineMethod = inputArray[2].split(" ");
                String newClass = "";

                for (int j = 0; j < combineMethod.length; j++) {

                    String firstLetter = combineMethod[j].substring(0, 1).toUpperCase();
                    String restOfWord = combineMethod[j].substring(1);
                    String newWord = firstLetter += restOfWord;
                    newClass += newWord;

                }

                result.add(newClass);

            } else if (inputArray[0].equals("C") && inputArray[1].equals("V")) {

                String[] combineVariable = inputArray[2].split(" ");
                String newVariable = combineVariable[0];

                for (int k = 1; k < combineVariable.length; k++) {

                    String firstLetter = combineVariable[k].substring(0, 1).toUpperCase();
                    String restOfWord = combineVariable[k].substring(1);
                    String newWord = firstLetter += restOfWord;
                    newVariable += newWord;

                }

                result.add(newVariable);

            }

        }

        for (String item : result) {

            System.out.println(item);

        }

        scan.close();

    }

}