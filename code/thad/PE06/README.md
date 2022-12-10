# IS 312: Web Design and Programming

## PE06: Programming Exercise

> Revised: Fall 2022
> By: Tj Scharlau

## Objective: Declare, Instantiate, and Extend a TypeScript Interface

For this exercise you will be declaring, instantiating, and extending an interface in TypeScript. There are three tasks for this exercise.

## Task #1: Declaring an interface

1. Open your IDE and start a new project.
   - You will first declare an interface named `Pizza` that includes two properties: `type` as a `string` and `slices` as a `number`.
1. You will next implement that interface. Start by using the Pizza interface as a type in a variable declaration. Declare a new variable called `myPizza` as _type_ `Pizza`., and then assign values to the required properties. In VSCode you should see intellisense suggest the correct name and types. You can check your work by outputting one of the values to the console.
1. Take a screenshot of your code and include both the screenshot and your source code in your Lab Report under **Task 1**.

```
/*  Course:     IS 312 – Web Design and Programming
 *  Quarter:    Fall 2022-23
 *  Your Name:  Thaddeus Thomas
 *  Task #1:    Declaring an Interface
 *  Task #2     Instancing an Interface
 *  Task #3     Extending Interfaces
 *  Task #4     Learning And Challenges
 */
```

### Task 1: Code

   ```ts
   // Task #1
   interface Pizza {
      type: string,
      slices: number,
      crust: string;
   }

   let myPizza: Pizza = {
      type: 'cheese',
      slices: 8,
      crust: 'stuffed'
   };

   console.log(myPizza)
   ```


## Task #2: Instancing an Interface and using a function to check a value

For this task you will be creating a function that will compare the value of the slices in an instance of the Pizza interface and returning a message if the number is too high.

1. First, create a function called `checkSlices`. This uses the Pizza interface as a parameter type for the function. You can call this parameter whatever you want, though something that keeps the pizza theme wouldn’t be unusual.
1. This function should check the number of slices in the Pizza object and returns a message based on the result.
1. There are typically 8 slices in a pizza, depending on how it’s cut.
   - Your function should consider anything above 8 as too many slices and output that it’s too many.
   - Otherwise, it should return a message based on how many slices are left (1, 7/8, ¾, 5/8, ½, 3/8, ¼ or 1/8 ).
   - This could simply be a "There is **\_** remaining of the pizza."
1. You will run the code using an object passed into the function.
1. This uses the same syntax as was used in `PE04` for the slices, using {} and the name : `value pairs`.
1. Once you run your code, take a screenshot of both the code and the results, and put them in your lab report under `Task 2-1`

### Task 2: Code

   ```ts
   // Task #2
   function checkSlices {
      let a: number = 1;
      let b: number = 8;
      const isBetween = (a, b, i) => i > a && i < b ;
      return isBetween;
   }
   ```

### Task 2-1

1. What happens if you add another property to the `Pizza` interface?
2. Let's add a new property called `crust` and assign it the `string` type.
3. Run your code, and report on the results.
4. Include a screen shot of the results, and caption it

### Task 2-2

1. Review the errors that appear in your code.
2. To resolve them, you should add the `crust` property to the implementation details of the variable declaration and add it as a parameter passed to the function.
3. For now, make the crust property optional by adding a question mark to the property name.
4. All the errors should be resolved because the `crust` property is no longer required by the interface.
![picture 2-2](D:/OneDrive/Pictures/IS312/week6/2-2.jpg)


## Task #3: Extending Interfaces

1. For this task you will declare a new interface called `Toppings` that extends the `Pizza` interface.
2. Your extension should include the following parameters:
   - sauce with is a literal type 'tomato' | 'alfredo' | 'bbq sauce'
   - _pineapple_ of type **Boolean** (optional)
   - _parmesan_ of type **Boolean** (optional)
   - _crust_ of type **Boolean**
3. Note any errors or problems that TypeScripts mentions in the code, and correct them as appropriate.
   - Do not rename any of the properties.
   - Take a screenshot of your source code and include it in your report under _Task 3_, with the caption `Task 3-1`
   - ![picture 2-4](D:/OneDrive/Pictures/IS312/week6/2-4.jpg)

### Task 3-1

1. Next change your `myPizza` variable to type `Toppings`
   - What happens when you do this?
   - Why?
   - Add your response and reasoning to your lab report under `Task 3`
1. Now correct the error by modifying your `myPizza` variable by adding any missing required properties.
   - You can also add any of the optional parameters that you want.
1. Now update your `checkSlices` function to use the `Toppings` interface.
   - What happens when you update the code?
   - What happens when you execute the code?
   - Are there any errors?
     - If so, fix them, and try running the code again.
     - If not, why?
1. Take a screenshot of the output of your code and include your final source code in the word document.
   - ![picture 2-2](D:/OneDrive/Pictures/IS312/week6/3-1.jpg)

   ```ts
   // Task #3
   interface Toppings extends Pizza {
      get sauce(): any;
      set sauce(string: 'tomato' | 'alfredo' | 'bbq sauce')
      pineapple?: boolean;
      parmesan?: boolean;
      crust?: boolean;
   };
   ```

## Task 4: Learning & Challenges

1. In this task, you should simply discuss what you learned from the exercise.
2. What was surprising, confusing, or problematic.
3. Add this write up to your Lab Report under _Task 4_.
4. You can include any screenshots if needed to clarify or demonstrate your point or issue.
5. Please caption any images in this section with `Task 4-#` (incrementing each # for each image).
6. Be sure to reference any screenshots by caption in your text.

### Submission

To submit this assignment, you should submit your complete TypeScript source code file, and your Lab Report.

Well i actually finished it so that was amazing. ~~the crust variable changed types between the beginning and end.~~ Maybe i didnt finish it. I thought I did. I cant see out of my left eye so II'm throwing in the towel.
