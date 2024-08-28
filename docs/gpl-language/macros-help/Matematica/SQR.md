---
sidebar_position: 25
---

# SQR

## Sintassi

  ```
 SQR operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di radice quadrata su **operando** e pone il valore in **risultato**. Per il parametro **operando** sono ammessi solo valori positivi. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {2} showLineNumbers
SetVal  81,op    ;// assegna 81 alla variabile op
Sqr     op,var   ;// Il valore posto nella variabile var sarà 9
```