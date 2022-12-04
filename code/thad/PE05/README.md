# IS 312: Web Design and Programming

## PE05: Functional Programming

  > Revised: Fall 2022 \
  > By: Tj Scharlau \

### Objective:

Students will create a program that uses multiple functions to reach the desired outcome as given in each task.

## Task #0: Pre-Lab Setup

Create a MS Word document (or other Windows compatible document file, please no .page files from you Mac User types).
Your word document should be formatted as such:

   ```plaintext
   Course: IS 312 – Web Design and Programming
   Quarter: <This Quarter> - <Year>
   Your Name: <Your name Here>

   Task #... (Your lab responses will go in their own task sections in this document).
   ```

Your Word file should be named:

`IS312 - <Your Name> - PE05 – Lab Report.docx`

While you will be writing code, I want you to copy and paste the TypeScript code you create into the Word document, though you should develop and test it in your preferred development environment, such as VS Code.

## Task #1: Input Validation

For this task you will need to create two functions:

1. A function that creates an input prompt that requests the user to input a number between 1 and 20.
1. A function to validate the input the user gave, to verify that the user’s input is valid and a number.

   > You should call the second function within the first function, passing the input from the user to the second function.

1. The first function should then either return the users input to the console, or if it was not valid, state the error, and then call the input function again.
   - Don’t forget to copy and paste your TypeScript source code into your report under Task #1’s section.

## Task #2: Recursion

Building on Task #1, you will create a function that takes two parameters:

1. Parameter 1 should be the validated input of Function #1 from task #1.
1. Parameter 2 should also be the validated input from Function #1.
   - Potentially your function should start something like:

        ```ts
        someFunction(number: parameter1 = <userinput> , number:  parameter2 = <userinput>)
        ```

The above is just a rough example (and not complete), of what your function definition should have for parameters.
> Please note, you should choose your own function and parameter names.

---

Now that you have the function defined, let’s talk about what it should actually do.

1. First your function should check that the following is true:
   `parameter1` is _greater than_ 0
   1. If that is _NOT true_, it should then return the value of `parameter2`.
   2. If it _IS true_, then it should **multiply** the value of `parameter2` by `parameter1`.
      1. It should assign the result of that multiplication to `parameter2`.
      2. It should _subtract 1_ from `parameter1`.
   3. It should then call itself, using the updated parameter values, until `parameter` is _equal to_ 0.
2. You must use a return command that returns the value of `parameter2` once `parameter1` is `<=0`.
3. Your output should _equal the value_ of `parameter2` after being _multiplied_ by a _decreasing_ `parameter1`.
4. Don’t forget to copy and paste your TypeScript source code into your report under `Task #2's` section.

## Task #3: Calculating Fibonacci

For this task you should at least have a basic understanding of what the Fibonacci Sequence is. For those who have no idea what I'm talking about, please read:
[Fibonacci Sequence](https://www.mathsisfun.com/numbers/fibonacci-sequence.html)
In a nutshell, it’s a sequence that starts with 0 and 1, and builds on itself, by adding the most recent number with the number before it in the series, to generate the next number:

   ```plaintext
   0 + 1 = 1 , 1 + 1 = 2 , 1 + 2 = 3 , 2 +  3 = 5 , Etc.
   ```

1. Using your `input function`, and the concept of a `recursive function`, you should create a function that calls itself to calculate the value of the Fibonacci Sequence at the position of the `user's input`.

1. Remember that recursive functions can get into an infinite loop, and as such, you need to be careful to put a control in place to prevent an infinite recursion.
1. Don't forget to copy and paste your TypeScript source code into your report under `Task #3's` section.

## Task #4: Conclusions

For this task, consider the above three tasks, and examine what you learned, or gained insight on when creating your functions.

1. What challenges did it present?
2. How did you overcome them?
3. What new inquiries did your activities present?

### Submission

Now that you have completed the above tasks, you need to submit your lab report (with included source code) via Brightspace.
