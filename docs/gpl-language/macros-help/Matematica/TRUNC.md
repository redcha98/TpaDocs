---
sidebar_position: 28
---

# TRUNC

## Sintassi

  ```
 TRUNC operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Tronca ad intero il valore espresso da **operando** e pone il valore in **risultato**. (La parte decimale viene persa). 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {2} showLineNumbers
SetVal  5.7,op    ;// assegna 5.7 alla variabile op
Trunc   op,var    ;// Il valore posto nella variabile var sarà 5
```