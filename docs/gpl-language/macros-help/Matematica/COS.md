---
sidebar_position: 7
---

# COS

## Sintassi

  ```
 COS operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di coseno su **operando** e pone il valore in **risultato**.

L'argomento operando è espresso in gradi con eventuale parte frazionaria centesimale (es.: 30° 15" = 30,25.).

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {2} showLineNumbers
SetVal   60,op    ;// assegna 60 alla variabile op
Cos      op,var   ;// Il valore posto nella variabile var sarà 0.5
```