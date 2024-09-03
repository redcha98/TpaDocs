---
sidebar_position: 27
---

# IFTARGETPOSITION

## Sintassi

  ```
IFTARGETPOSITION asse_enc, operatore di confronto, valore, GOTO etichetta
IFTARGETPOSITION asse_enc, operatore di confronto, valore, CALL sottoprogramma
IFTARGETPOSITION asse_enc, operatore di confronto, valore, nomefunzione

IFTARGETPOSITION asse_enc, operatore di confronto, valore THEN
    istruzione
    istruzione
    ... 
ENDIF

IFTARGETPOSITION asse_enc, operatore di confronto, valore THEN
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
| **asse_enc**                | nome del dispositivo tipo asse o encoder                                                              |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)      |        
| **valore**                  | costante o variabile o nomecounter                                                                    |     
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test su quota teorica espressa dalla variabile **asse**.

Se il valore della variabile **asse** verifica la condizione espressa dall'**operatore di confronto** con il valore espresso da valore, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
