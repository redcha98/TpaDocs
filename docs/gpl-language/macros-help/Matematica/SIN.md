---
sidebar_position: 24
---

# SIN

## Sintassi

  ```
 SIN operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di seno su **operando** e pone il valore in **risultato**.

L'argomento operando è espresso in gradi con eventuale parte frazionaria centesimale (es.: 30° 15" = 30,25.).

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {2} showLineNumbers
SetVal   30,op    ;// assegna 30 alla variabile op
Sin      op,var   ;// Il valore posto nella variabile var sarà 0.5
```