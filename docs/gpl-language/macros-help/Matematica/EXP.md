---
sidebar_position: 9
---

# EXP

## Sintassi

  ```
 EXP operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Calcola l'esponenziale di **operando** e pone il valore in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {2} showLineNumbers
SetVal   2.302,op    ;// assegna 2.302 alla variabile op
Exp      op,var      ;// Il valore posto nella variabile var sarà 10
```