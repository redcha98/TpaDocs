---
sidebar_position: 13
---

# MOD

## Sintassi

  ```
MOD	operando1, operando2, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando1**         | costante o variabile o nome di dispositivo         |   
| **operando2**         | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di modulo tra **operando1** e **operando2** e pone il risultato in **risultato**. 

Il modulo è il resto risultante dalla divisione tra il primo e il secondo operando. L’istruzione può generare errore di sistema quando **operando2** è uguale a 0. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {3} showLineNumbers
SetVal   20,op1       ;// assegna 20 alla variabile op1
SetVal   3,op2        ;// assegna 3 alla variabile op2
Mod      op1,op2,var  ;// Il valore posto nella variabile var sarà 2
```