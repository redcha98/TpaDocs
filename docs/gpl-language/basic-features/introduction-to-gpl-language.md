---
sidebar_position: 1
---

# Introduction to GPL language
GPL language (General Purpose Language) is the language used to create functions in the Albatros system.

Although its structure, for some aspects, is similar to BASIC, it is characterised by a large number of device control instructions.

The language is composed of more than 200 instructions, called instruction, which have been divided into groups of instructions with similar functions, for your convenience.

Moreover, the language is multitasking, allowing the execution of various tasks at the same time.

 
## Typical Syntax of GPL instructions
GPL instructions all have a similar structure, corresponding to the following pattern:

```code
instructionname parameter-1, parameter-2,..... parameter-N
```
 
The number of parameters depends on the instruction and the contest in which it is used, the absolute maximum paremeters number for a function or an instruction is 120. In certain cases the instruction may not contain any parameters at all.

The smallest block of GPL code is the function. 


## Dividing the code into groups
The GPL code is subdivided into blocks that reflect the logic subdivision of the machine into groups. This means that each group has a corresponding file containing its code. 

To these files, containing the code of the groups present in the machine, we must add the file containing the global variables and constants which are visible from any group's GPL code and the *libraries*. These contain code not related to machine configuration hence easily portable to other machines.
