---
sidebar_position: 33
---

# IFTIMER

## Sintassi

  ```
IFTIMER nometimer, operatore di confronto, valore, GOTO etichetta
IFTIMER nometimer, operatore di confronto, valore, CALL sottoprogramma
IFTIMER nometimer, operatore di confronto, valore, nomefunzione

IFTIMER nometimer, operatore di confronto, valore THEN
    istruzione
    istruzione
    ...
ENDIF

IFTIMER nometimer, operatore di confronto, valore THEN
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
| **nometimer**               | Nome di variabile timer                                                                               |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)                                                                   |        
| **valore**                  | costante o variabile numerica o boolean o timer o nomedevice o proprietà asse                         |     
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test di un timer.

Se il contenuto del timer **nometimer** verifica la condizione espressa dall'**operatore di confronto** con il valore espresso da **valore**, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).