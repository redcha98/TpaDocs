---
sidebar_position: 27
---

# TAN

## Sintassi

  ```
 TAN operando, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando**          | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di tangente su **operando** e pone il valore in **risultato**. L'argomento **operando** è espresso in gradi.

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {2} showLineNumbers
SetVal   45,op    ;// assegna 45 alla variabile op
Tan      op,var   ;// Il valore posto nella variabile var sarà 1
```