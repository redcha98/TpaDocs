---
sidebar_position: 18
---

# RESETBIT

## Sintassi

  ```
 RESETBIT maschera, nbit
  ```

## Parametri
|Parametro              | Descrizione                                                                                            |                
|-----------------------|--------------------------------------------------------------------------------------------------------|
| **maschera**          | variabile intera, char o byte o porto di input o di output. Valore da modificare (max 64 bit)          |   
| **nbit**              | costante o variabile intera. Numero del bit da modificare (1÷64)                                       |         

## Descrizione
Imposta a 0 un singolo bit, specificato da **nbit**, della **maschera** di bit passata. 

L'argomento **maschera** deve poter corrispondere ad un valore intero con un massimo di 64 bit. Il numero di bit, **nbit**, va da 1 a 64. 

### Esempio

```c {5} showLineNumbers
;// stato della variabile byte prima dell’esecuzione del codice
;//     ON-ON-ON-OFF-ON-ON-ON-OFF

SetVal 2,nbit
Resetbit varByte,nbit   ;// disattiva il secondo bit a peso minore

;// stato della variabile byte dopo l’esecuzione del codice
;//    ON-ON-ON-OFF-ON-ON-OFF-OFF
```