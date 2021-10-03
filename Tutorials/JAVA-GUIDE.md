(In progress)

# Java Tutorial

## Table of Contents
* [Inroduction](#Introduction)
    * [Hello World](##Hello-World)
    * [Difference between print and println](##Difference-Between-print-and-println)
    * [Comments](##Comments)
    * [Summary](##Summary)
* [Storing Data](#Storing-Data)
    * [Primitive Data Types](##Primitive-Types)
        * [Integers (Ints)](###Ints)
        * [Doubles](###Doubles)
        * [Booleans](###Booleans)
        * [Math Operations](###Math-Operations)
        * [Casting](###Casting)
    * [Reference Types](##Reference-Types)
        * [Strings](###Strings)
* [Branching](#Branching)
    * [Comparison Operators](##Comparison-Operators)
    * [Logical Operators](##Logical-Operators)

## External Resources:
* [*CSAwesome* (online textbook)](https://csawesome.runestone.academy/runestone/books/published/csawesome/index.html)
    - A comprehensive textbook for AP Computer Science A. Very conceptual. Sorted quite well, in case there's one particular concept you're struggling with.
* [*Java in 14 Minutes* (video) by Alex Lee](https://www.youtube.com/watch?v=RRubcjpTkks)
    - Crash course in Java, covers everything very quickly.
* [*W3Schools* (website)](https://www.w3schools.com/java/default.asp)
    - VERY extensive reference guide, used by beginners and experts alike.
* [*Java (Beginner) Programming Tutorials* by thenewboston](https://www.youtube.com/playlist?list=PLFE2CE09D83EE3E28)
    - Concise yet low-key funny tutorials.
    - Recommended concepts and videos:
        * Variables (video 5)
        * Math operators (video 8)
        * Increment operators (video 9)
        * If statements (video 10, 18, 19)
        * Logical operators (video 11)
        * Classes (videos 14, 15, 17)

# Introduction

Since 2018 (and as of 2021), 612 has programmed in the Java programming language and uses the WPILib library. 
Java is a very common programming language and is used in the AP Computer Science A course.

With Java, every program must have the following (replace the word "Example" with the name of your file):
```java
public class Example
{
    public static void main(String[] args)
    {
        //Insert code here
    }
}
```
We will learn about why that is later on.

## Hello World

To print out "Hello World," replace the "//Insert code here" line with:

```java
System.out.println("Hello World");
```
Or
```java
System.out.print("Hello World");
```

## Difference between print and println:
```java
System.out.print("Hello");
System.out.println(" world.");
System.out.print("println puts the next output on a second line,");
System.out.print(" whereas print keeps the next output");
System.out.println(" on the same line.");
System.out.println("Even experts forget which one does which, so when in doubt, just choose one line, run, and change it until your desire output is there.");
```
Output:
> Hello world

> println puts the next output on a second line, whereas print keeps the next output on the same line.

> Even experts forget which one does which, so when in doubt, just choose one line, run, and change it until your desire output is there.

## Comments:

```java
//This is a single-line comment
/*This is 
a multi-line 
comment*/
```
Commenting code is highly recommended to convey to others what your code does.

In addition, commenting may be very helpful to new users to help them learn.

However, once you become proficient, do not comment to the point where your code is unreadable.

## Summary:
```java
//Example.java

/*
The first four lines and the last two lines are required for the program to run. If your file is named "Drive.java, replace "Example" with "Drive".
*/
public class Example
{
    public static main(String[] args) //Important line, Java needs a "main" function in order to run
    {
        System.out.println("Hello World")
        System.out.print("You are now...");
        System.out.print("a programmer!!");
        /*Output:
        Hello World
        You are now...a programmer!!
        */
    }
}
```


# Storing Data

Java has various data types to store variables. There are two main types: primitive types, and reference types. A guide to data types and the difference between the two can be found [here](https://www.w3schools.com/java/java_data_types.asp).

## Primitive Types
Primitive types are more simple. There are 8 main ones, but we will be focusing on ints, doubles, booleans, and chars.

### Ints
Ints store integers

```java
int x = 1885; //declares int variable.

int namesCanHaveMultipleCharacters; //declares variable y, but does not assign value yet.
namesCanHaveMultipleCharacters = 612; //do not need "int" keyword because y is already initialized.
```

### Doubles
Doubles store decimal points.

```java
double x = 1; //When you do "System.out.print(x), output will be "1.0"
double y = 2.0;
```

### Booleans
Store true/false values

```java
boolean x = true;
boolean y = false;
boolean z = ! x; //Opposite of x, so false
boolean alpha = (x && y); //If BOTH x AND y are true, alpha = true. If either or both are not, alpha = false. In this case it's false.
boolean beta = (x || y); //If EITHER x OR y are true, beta = true. If both are false, false. In this case it's true.
boolean theta = !x || y; //If (the opposite of x) OR y are true, then true. else, false. In this case, it's false.
boolean x = false; //changes variable.
boolean log = !(x || y) //If EITHER x or y are true, log = !true = false. If both are false, log = !false = true. In this case  it's true.
```

### Chars
chars store single characters.
```java
char testChar = 'A';
```

### Math operations

```java
// "+" is to add, "-" is to subtract, "*" is to multiply, "/" is to divide 
int x = 1885;
int y = 254;
int w = 2363;
int a = 612;
double z = 612.0;
//OR double z = (double) a;
```
**Dividing ints:**
```java
System.out.println(x/y);
//output: 7
``` 
Because these are ints, THEY WILL NOT OUTPUT THE EXACT ANSWER

Rather, they will always round *down*. Java will never round up when dividing ints. To round up, see the below section.

**Dividing with doubles:**
```java
System.out.println(x/z);
/*Output
3.0800653594771243
*/
```
Whenever a double is part of a division expression, the output will always be a double.

Do remember that Java does follow the *order of operations* of mathematics (i.e. PEMDAS).

**The modulus operator**
The modulus operator (%) outputs the remainder.
```java
System.out.println(2363 % 612);
//Output is 527
//612*3 + 527 = 2363
```

### Casting

Casting is the act of changing a primitive variable's type. There are two types of casting: widening, which changes from a smaller type to a larger type, and narrowing, which changes from a larger type to a smaller type.

With regards to size, primitive types follow a hierarchical structure, which ultimately determines which method of casting must be used.

With regards to equations, it's fairly easy to cast from a double to an int, and back again:
```java
int x = 1885;
int y = 254;
int w = 2363;
int a = 612;
double z = 612.0;

System.out.println( (double)x );
System.out.println( (double)x /y );
System.out.println( (double) (x/y) );
System.out.println( (int)x /z );
System.out.println( (int)(x/z) );
System.out.println( x/ (int)z );
/*Output
1885.0
7.421259842519685
7.0
3.0800653594771243
3
3
*/
```
* The first line simply converts 1885 to a double, resulting in 1885.0.
* The second line converts x (1885) to a double first, and then divides by y (254).
* The third line divides x (1885) and y (254) *before doing any conversation* because that operation is in parantheses, like with order of operations (PEMDAS). Because they are both ints at this moment, the expression in the parantheses founds down results in 7. That 7 is then converted to a double, and the result is 7.0.
* The fourth line converts x (1885) to an int as it goes left to right (resulting in no change) before dividing by the double, z (612.0), resulting in the double 3.0800653594771243.
* The fifth line divides x (1885) by z (612.0) because they are in parantheses. After that, the resulting answer of that expression (3.0800653594771243) is cast to an int.
* The final line converts z (612.0) to an int before x (1885) is divided by it, resulting in integer division.

Things get slightly more complicated when saving variables.

Doubles are larger than ints. As such:
*   Widening is used when converting ints to doubles.
*   Narrowing is used when converting doubles to ints.

Widening:
```java
int x = 1885;

double xAsDouble = x;
```

Narrowing:
```java
double y = 254.0;
int yAsInt = (int) y;
```

There are many other primitive data types in Java, much of which we will not be working with. A full description of all primitive data types in Java can be found in the link right under the chapter heading, and a hierarchy chart can be found [here](https://www.w3schools.com/java/java_type_casting.asp), in case we do work with them.

## Reference Types
Reference types are objects, which we will learn about later. They always start with capital letters, and they can be assigned the `null` value.

To store a reference type, one must use the template `[type] [variable name] = new [type]()`.

### Strings

Strings are probably the most common reference type we will be using. Strings consist of multiple characters.

Ways to store a string:
```java
String brandNewSentence = new String();
brandNewSentence = "Hi";
brandNewSentence = null;

String ID = "ThwackTheFly612";

//Storing multi-line strings:
String shamelessPlug = "
    iKODAT.com is a gamified rank-based educational corporate simulation platform to help students to learn to code.\n
    Users join a simulated company iKODAT—a futuristic startup.\n
    Users start off as an intern and rise up the ladder against others.
";
//or
String shamelessPlug = "
    iKODAT.com is a gamified rank-based educational corporate simulation platform to help students to learn to code.\nUsers join a simulated company iKODAT—a futuristic startup.\nUsers start off as an intern and rise up the ladder against others.";
```
The `\` character is an escape character and has a few capabilities within a string.
|Type | Description |
|-----|---------------------------|
| \\t | inserts a tab in a string |
| \\n | inserts a new line in a string |
| \\\ | inserts the "\\" character in a string. Ex: "\\\n" makes sure that there's no new line created and that "\\n" is inserted into the string |
| \\" | inserts the \" character in a string because it would otherwise end the string |
| \\' | inserts the \' character in a string because it would otherwise be an illegal character |
etc.

# Branching

There are statements called if/else if/else statements. Below is a walkthrough of a program to demonstrate what they do.

```java
boolean x = false;
boolean y = false;
boolean z = true;

if (x) 
{ 
    //commands that would be executed
    //in this case, these commands will not be executed.
}
```
In the above command, if the parameter x is true, the commands will be executed and the *else if* and *else* below statements will be skipped; otherwise, the program will skip to next statement. Can also write if "(x==true)" if you'd like.

In this case, this *if* statement is skipped, and the compiler checks the first *else if* statement, if there is any. If there isn't, it'll check for an *else* statement and execute that, but if not, it'll just continue with the rest of the program. In this case, there is an *else if* statement.
```java
else if (y) { //commands that would be executed, but aren't because y = false. }
```
The above statement, in addition to all of the statements below, are completely optional.

Simply put, the else if statement is another if statement that gets executed if the first if statement isn't met. This one is checking if y is true, and since it's not, it goes to the next else if statement below. If it was true, it would execute these commands and skip the rest of the *else if* statements and the *else* statement.

```java
else if (z == false) { //does not execute these commands. }
```
This else if statement is actually checking to see if the boolean z is *false*. The reason why two equal signs are used is because one equals sign is already used to assign variables. The second equals sign tells the compiler that it should compare two variables, or a variable and a value, rather than assign one variable to a value. More on comparison operators below.

Since z is not false, the program will execute the *else* statement below. Again, if it was true, it would skip the *else* statement.

```java
else { System.out.println("none of the ones above are true, can we get an F in the chat?"); }
```

## Comparison Operators:
Comparison operators compare 2 variables:
| Operator     | Meaning      |
|--------------|--------------|
| ==           | if one variable equals another  |
| >=           | if one numeric variable is greater than or equal to the other |
| <=           | if one numeric variable is less than or equal to the other |
| <            | if one numeric variable is less than the other |
| >            | if one numeric variable is greater than the other |
| !=           | if one variable is not equal to another |

Examples:
```java
int alpha = 9;
int beta = 8;
if (alpha == beta) {/*code*/}
else if (alpha < 10) {/*code*/}
else if (alpha != 9) {/*code*/}
```

## Logical operators:
Comparison operators combine 2 variables:
| Operator     | Meaning      |
|--------------|--------------|
| &&           | both variables must be true  |
| \|\|         | at least one variable must be true |
| !            | negates a variable |

```java
int x = 20;
int y = 30;
int z = 40;
boolean bool = true;

if (x == 20 && y == 30) {/*executes*/}

if (x == 20 || y == 22) {/*executes*/}

if (x != 612 || y != 612 || x != 1885 || y !=1885) { /*executes*/ }

if ( (x != 612 || y != 612) && z == 2534 ) {/*does not execute*/}

if ( !( x == 612 || z == 40 ) ) { /*does not execute*/ }

if ( !( (x != 20) && (y != 30) && (z != 40) ) ) { /*executes*/ }

if ( ( !(x == 20) && (bool) ) == true) { /*does not execute*/ }
```
Remember to **think about it like order of operations**

*   In the first line, x is equal to 20 *and* y is equal to 30, so since both conditions are true, the code is executed.
*   In the second line, at least one condition is true, so the code is executed.
*   In the third line, all of the conditions are true when the requirement is that at least one is true, so the code is executed.
*   In the fourth line, the first two parameters are in parantheses and thus must be evaluated first. The conditions are met, so the expression is now equivalent to `if (true && z == 2534) {/* code */}`. Now, both conditions must be true, but they aren't, so the code is not executed.
*   In the fifth line, the conditions in the parantheses are both true, but that means the expression is equivalent to `!true`, so in other words, the expression as a whole is false.
*   In the sixth line, all three of the parameters in the parantheses are false, but those are negated by the exclamation in the front, so the code underneath runs.
*   In the seventh line, the first condition in parantheses is true, but that's negated and becomes false. Since both have to be true, and they aren't, the code isn't executed.

(Please note that the above code lines are just difficult examples. ***DO NOT*** write if/else statements that are that complicated, or any other complicated code, for that matter. Simple, readable code is the best.)