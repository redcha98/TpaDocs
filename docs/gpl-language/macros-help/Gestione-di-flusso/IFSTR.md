---
sidebar_position: 29
---

# IFSTR

## Sintassi

  ```
IFSTR stringa1, operatore di confronto, stringa2, GOTO etichetta
IFSTR stringa1, operatore di confronto, stringa2, CALL sottoprogramma
IFSTR stringa1, operatore di confronto, stringa2, nomefunzione

IFSTR stringa1, operatore di confronto, stringa2 THEN
    istruzione
    istruzione
    ... 
ENDIF

IFSTR stringa1, operatore di confronto, stringa2 THEN
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
| **stringa1**                | Costante o variabile string. È la prima stringa                                                       |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto tra stringhe sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)                                                   |        
| **stringa2**                | Costante o variabile string. È la seconda stringa                                                     |     
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test su stringhe.

Se la stringa definita in **stringa1** verifica la condizione espressa dall'operatore di confronto con la stringa contenuta in **stringa2**, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
