---
sidebar_position: 20
---

# IFSTATE

## Sintassi

  ```
IFSTATE nomeboolean, stato, GOTO etichetta
IFSTATE nomeboolean, stato, CALL sottoprogramma
IFSTATE nomeboolean, stato, nomefunzione

IFSTATE nomeboolean, stato THEN
    istruzione
    istruzione
    ... 
ENDIF

IFSTATE nomeboolean, stato THEN
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
| **nomeboolean**             | nome di variabile boolean                                                                              |   
| **stato**                   | costante predefinita. I valori ammessi sono: <br/>- **ON** stato attivo <br/>- **OFF** stato disattivo |  
| **etichetta**               | nome dell'etichetta a cui saltare                                                                      | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                            |
| **nomefunzione**            | nome della funzione                                                                                    |    

## Descrizione
Test dello stato logico di una variabile boolean.

Se il flag definito dalla variabile **nomeboolean** si trova nello **stato** indicato, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
