---
sidebar_position: 8
---

# DIV

## Sintassi

  ```
 DIV operando1, operando2, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando1**         | costante o variabile o nome di dispositivo         |   
| **operando2**         | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    | 

## Descrizione
Esegue una operazione di divisione tra **operando1** e **operando2** e pone il risultato in **risultato**.

L'istruzione può generare errore di sistema quando **operando2** è uguale a 0.

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {3} showLineNumbers
SetVal   10,op1	       ;// assegna 10 alla variabile op1
SetVal   5,op2         ;// assegna 5 alla variabile op2
Div      op1,op2,var   ;// Il valore posto nella variabile var sarà 2
```