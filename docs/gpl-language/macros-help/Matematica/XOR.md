---
sidebar_position: 29
---

# XOR

## Sintassi

  ```
XOR	operando1, operando2, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando1**         | costante o variabile o nome di dispositivo         |   
| **operando2**         | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di XOR binario (tra due bit, risulta 1 se uno solo dei due vale 1) tra **operando1** e **operando2** e pone il risultato in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {1} showLineNumbers
Xor	$101B,$011B,var

;// Il valore posto nella variabile var sarà 6
;// (Notazione binaria: 5 = 0101, 3 = 0011, 6 = 0110)
```
