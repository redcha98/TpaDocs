---
sidebar_position: 23
---

# IFINPUT

## Sintassi

  ```
IFINPUT nomeinput, stato, GOTO etichetta
IFINPUT nomeinput, stato, CALL sottoprogramma
IFINPUT nomeinput, stato, nomefunzione

IFINPUT nomeinput, stato THEN
    istruzione
    istruzione
    ... 
ENDIF

IFINPUT nomeinput, stato THEN
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
|Parametro                    | Descrizione                                                                                            |                
|-----------------------------|--------------------------------------------------------------------------------------------------------|
| **nomeinput**               | nome ingresso                                                                                          |   
| **stato**                   | costante predefinita. I valori ammessi sono: <br/>- **ON** stato attivo <br/>- **OFF** stato disattivo |  
| **etichetta**               | nome dell'etichetta a cui saltare                                                                      | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                            |
| **nomefunzione**            | nome della funzione                                                                                    |    

## Descrizione
Test dello stato logico di un ingresso.

Se l'ingresso definito nella variabile **nomeinput** si trova nello **stato** indicato, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
