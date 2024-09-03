---
sidebar_position: 25
---

# IFOUTPUT

## Sintassi

  ```
IFOUTPUT nomeoutput, stato, GOTO etichetta
IFOUTPUT nomeoutput, stato, CALL sottoprogramma
IFOUTPUT nomeoutput, stato, nomefunzione

IFOUTPUT nomeoutput, stato THEN
    istruzione
    istruzione
    ... 
ENDIF

IFOUTPUT nomeoutput, stato THEN
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
| **nomeoutput**              | nome uscita                                                                                            |   
| **stato**                   | costante predefinita. I valori ammessi sono: <br/>- **ON** stato attivo <br/>- **OFF** stato disattivo |  
| **etichetta**               | nome dell'etichetta a cui saltare                                                                      | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                            |
| **nomefunzione**            | nome della funzione                                                                                    |    

## Descrizione
Test dello stato logico di una uscita.

Se l'uscita definito nella variabile **nomeoutput** si trova nello **stato** indicato, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
