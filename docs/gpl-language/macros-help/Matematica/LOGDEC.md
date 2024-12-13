---
sidebar_position: 12
---

# LOGDEC

## Sintassi

  ```
 LOGDEC operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Calcola il logaritmo in base 10 di **operando** e pone il valore in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {2} showLineNumbers
SetVal   10,op    ;// assegna 10 alla variabile op
Logdec   op,var   ;// Il valore posto nella variabile var sarà 1
```