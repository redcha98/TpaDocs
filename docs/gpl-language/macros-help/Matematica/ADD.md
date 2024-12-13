---
sidebar_position: 2
---

# ADD

## Sintassi

  ```
ADD	operando1, operando2, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando1**         | costante o variabile o nome di dispositivo         |   
| **operando2**         | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di somma tra **operando1** e **operando2** e pone il risultato in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {2} showLineNumbers
SetVal	5,op1       ;// assegna 5 alla variabile op1
Add     op1,3,var   ;// Il valore posto nella variabile var sarà 8
```
