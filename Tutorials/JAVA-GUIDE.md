(In progress)

# Java Tutorial

## Table of Contents

## External Resources:
1. [*Java in 14 Minutes* (video) by Alex Lee](https://www.youtube.com/watch?v=RRubcjpTkks)
    - Crash course in Java, covers everything very quickly.
2. [*W3Schools* (website)](https://www.w3schools.com/java/default.asp)
    - VERY extensive reference guide, used by beginners and experts alike.
3. [*Java (Beginner) Programming Tutorials* by thenewboston](https://www.youtube.com/playlist?list=PLFE2CE09D83EE3E28)
    - Concise yet low-key funny tutorials.
    - Recommended concepts and videos:
        * Variables (video 5)
        * Math operators (video 8)
        * Increment operators (video 9)
        * If statements (video 10, 18, 19)
        * Logical operators (video 11)
        * Classes (videos 14, 15, 17)

# Introduction and Hello World

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


# Storing data

Java has various data types to store variables as.

(add definition of primitive types)

## Ints
Ints store integers

```java
int x = 1885; //declares int variable.

int namesCanHaveMultipleCharacters; //declares variable y, but does not assign value yet.
namesCanHaveMultipleCharacters = 612; //do not need "int" keyword because y is already initialized.
```

## Doubles
Doubles store decimal points.

```java
double x = 1; //When you do "System.out.print(x), output will be "1.0"
double y = 2.0;
```

## Math operations

```java
// "+" is to add, "-" is to subtract, "*" is to multiply, "/" is to divide 
int x = 1885;
int y = 254;
int w = 2363;
int a = 612;
double z = 612.0;
//OR double z = (double) a;

System.out.println(x/y); 
//Because these are ints, THEY WILL NOT OUTPUT THE EXACT ANSWER
//Rather, they will always *round down*. In this case, the output will be "7"
System.out.println(w/a)
//output: 2
System.out.println(Math.round(w/a));
//output: 3 because it rounds

System.out.println(x/z); 
//output will be a double, in this case 3.08006536 or something
System.out.println((double)x/y); 
//Changes variable x into a double, so the output will be a double, in this case 7.42125984
System.out.println((int)x/z); 
//Only changes x to an int, but it's already an int, so output is still a double.
System.out.println((int)(x/z)); 
//Computes x/z first (because parantheses), then changes that to an int, so output is 3.

//The modulus operator (%) outputs the remainder.
System.out.println(2363 % 612);
//Output is 527

//The following are completely different
double b = 1885/254;
double c = (double)(1885/254);
```

## Booleans
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