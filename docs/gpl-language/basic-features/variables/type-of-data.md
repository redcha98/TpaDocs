---
sidebar_position: 1
---

# Type of Data

## Simple Or Scalar Data
GPL supports both simple and aggregate data. The types of simple data are similar to the ones used in most programming languages:

### Char
Is an integer with sign ranging between [-128 ; +127] and its length is 1 byte.
To declare a Char variable, the following syntax is used: 

```code
VariableName as char
```
 
### Integer
Is an integer with sign ranging between [-2147483647 ; +2147483647] and its length is 4 byte (it corresponds to the long type in C).

To declare an Integer variable, the following syntax is used:

```code
VariableName as integer
```
 
### Float
Is a floating point number ranging between [-3,402823 E+38 ; -1,401298 E-45] and [+1,401298 E-45 ; +3,402823 E+38], its length is 4 byte (it is usually used to indicate speed).
To declare a Float variable, the following syntax is used:

```code
VariableName as float
```
 

## Aggregate Data

### Array

It is a group of simple variables, all of the same type, obtained by associating an index to the name of the variable. The index must be enclosed in square brackets. If the array is called, for example, "parameters", the first item of the group will be called "parameters[1]", the second "parameters[2]", and so on.

The array has a fixed number of items which must be determined in the declaration. A typical array declaration uses the following syntax:

```code
parameters[10] as integer 
```

Where parameters[10] indicates that the name of the array is "parameters" and that it's composed by 10 items; as integer indicates the type of simple data used for the array's individual elements, which in this case is an integer. 

The arrays can be made up of simple data or strings.

An array can have a maximum of 262144 elements.

Vectors can be directly initialized in the GPL code, at the time of their declaration.  GPL syntax can be:

```code
[READONLY] vector[numberofrows] as integer  = 1,2,3,4

[READONLY] vector[numberofrows] as string  = "one","two","three","four"
```
