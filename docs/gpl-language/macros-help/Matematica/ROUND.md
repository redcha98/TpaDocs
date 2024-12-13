---
sidebar_position: 19
---

# ROUND

## Sintassi

  ```
 ROUND operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di arrotondamento all'unità su **operando** e pone il valore in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {2,5} showLineNumbers
SetVal  5.7,op    ;// assegna 5.7 alla variabile op
Round  op,var     ;// Il valore posto nella variabile var sarà 6

SetVal  5.2,op    ;// assegna 5.2 alla variabile op
Round   op,var    ;// Il valore posto nella variabile var sarà 5
```