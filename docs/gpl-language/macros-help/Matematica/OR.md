---
sidebar_position: 16
---

# OR

## Sintassi

  ```
OR operando1, operando2, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **operando1**         | costante o variabile o nome di dispositivo         |   
| **operando2**         | costante o variabile o nome di dispositivo         |   
| **risultato**         | variabile o nome di dispositivo                    |         

## Descrizione
Esegue una operazione di OR binario (tra due bit, risulta 1 se almeno uno dei due vale 1) tra **operando1** e **operando2** e pone il risultato in **risultato**. 

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](Conversione-dati.md).

### Esempio

```c {3} showLineNumbers
;// Il valore posto nella variabile var sarà 7
;// (Notazione binaria: 5 = 0101, 3 = 0011, 7 = 0111)
Or	5,3,var
```