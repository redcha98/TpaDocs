---
sidebar_position: 12
---

# IFBIT

## Sintassi

  ```
IFBIT maschera, nbit, stato, GOTO etichetta
IFBIT maschera, nbit, stato, CALL sottoprogramma
IFBIT maschera, nbit, stato, nomefunzione

IFBIT maschera, nbit, stato THEN
    istruzione
    istruzione
    ...
ENDIF

IFBIT maschera, nbit, stato THEN
    istruzione
    istruzione
    ...
ELSE
    istruzione
    istruzione
    ...
ENDIF
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **maschera**                | costante o variabile integer, char, byte o input8. Valore da verificare                               |  
| **nbit**                    | costante o variabile intera. Numero del bit (1÷32)                                                    |      
| **stato**                   | costante predefinita. Stato da verificare su maschera. I valori ammessi sono: <br/>- **ON** bit scelto a 1  <br/>- **OFF** bit scelto a 0 |         
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test su un singolo bit della **maschera** di bit passata. L'argomento **maschera** deve poter corrispondere ad un valore intero con un massimo di 32 bit. Il numero da assegnare alla variabile **nbit** per identificare il bit da verificare va da 1 a 32. Se la condizione indicata in **stato** è verificata, salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
