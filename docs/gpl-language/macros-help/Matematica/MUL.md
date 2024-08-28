---
sidebar_position: 14
---

# MUL

## Sintassi

  ```
MUL operando1, operando2, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando1**         | costante o variabile o nome di dispositivo         |   
| **operando2**         | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di moltiplicazione tra **operando1** e **operando2** e pone il risultato in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {3} showLineNumbers
SetVal   5,op1        ;// assegna 5 alla variabile op1
SetVal   2,op2        ;// assegna 2 alla variabile op2
Mul      op1,op2,var  ;// Il valore posto nella variabile var sarà 10
```