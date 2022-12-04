# IS 312: Web Design and Programming

## PE09: Programming Exercise

> Revised: Fall 2022
> By: Tj Scharlau

### Objective: Asynchronous Programming Exercise

This week's topic is all about asynchronous programming.

### Task #1: Textbook Exercise – Tracking the Scalpel (Chapter 11)

To complete this task, please examine the **Chapter 11** exercise `Tracking the Scalpel`. \
When you have completed the exercise in the book, paste your source code into your lab report.
> Do NOT submit your .ts files themselves.

#### Questions T1

   1. Explain the code you wrote for this exercise.
   1. Do request failures properly show up as rejections of the returned promise in both versions?
   1. If they do, how?  If not, why not?

### Task #2: Textbook Exercise – Building Promise.ALL  (Chapter 11)

To complete this task, please examine the `Chapter 11` exercise Building `Promise.ALL` \
When you have completed the exercise in the book, paste your source code into your lab report.
> Do NOT submit your .ts files themselves.

#### Questions T2

   1. Explain the code you wrote for this exercise:
   1. What are the benefits of the promise method?
   1. Are there any downsides in the use of promises in asynchronous programming?

### Task #3: Analysis and Rewrite

For this task you will need to go to [AJAX](https://classdemo.amerabyte.net/Sample_Code/BIT_285-286-Summer2021/AJAX/)
When you load that URL, you will be presented with a form:
    ![AJAX Form](./Picture1.png)

You need to view Source of the HTML page. You will also see the following code on line 10: \
    `<script src="form.js"></script>` \
This is the AJAX javascript code file that conducts the asynchronous process of validating the form. \
This code sends the form data to the server in an asynchronous manner, and then depending on what is returned, will then either post an error message, if the server returns an error, or it updates the HTML page with the resulting (demo) HTML to update the form page with. You should tinker with submitting the form to see what happens when you do and don't fill out fields. \
Please note this code uses AJAX via the JQuery library from Google. Your task for this is to attempt to rewrite the JQuery code using standard TS / JS code. \
To help guide you for this, here is the back-end code that the JS should be sending and receiving the responses to/from. Please note that this is purely a demonstration code, and not something you would need to build:

   ```php
   <?php
   $errors = [];
   $data = [];
   if (empty($_POST['name'])) {
       $errors['name'] = 'Name is required.';
   }
   if (empty($_POST['email'])) {
       $errors['email'] = 'Email is required.';
   }
   if (empty($_POST['superheroAlias'])) {
       $errors['superheroAlias'] = 'Superhero alias is required.';
   }
   if (!empty($errors)) {
       $data['success'] = false;
       $data['errors'] = $errors;
   } else {
       $data['success'] = true;
       $data['message'] = 'Success!';
   }
   echo json_encode($data);
   ```

This  code is in PHP and is a back end to the front-end JS code. It's straightforward, and not part of this class, but if you have questions, feel free to contact me. \
This code is located at: [Sample Code](https://classdemo.amerabyte.net/Sample_Code/BIT_285-286-Summer2021/AJAX/process.php)  and your TS/JS codes should use this `URL` for sending the request from your asynchronous function. \
The JS and HTML files from the website have been included on the `PE09` assignment page. You can use the HTML file directly, but the `.js` file is only for reference.  This is NOT a `node.js` based assignment.

#### Questions T3

   1. What was the most challenging thing for this exercise?
   1. Did you note the use of JavaScript Object Notation (JSON) in  building the request to the server in the original code?
   1. Were you able to successfully send and receive the code to/from the server?
   1. This is most commonly used for processing forms, error handling of user input, and for updating pages. Where else do you think it would be useful?

### Submission

To submit this assignment, you should submit your completed lab report to Brightspace. DON'T SUBMIT a `.zip`/`.rar` or  your source code files. Your code should be pasted into your lab report only.
