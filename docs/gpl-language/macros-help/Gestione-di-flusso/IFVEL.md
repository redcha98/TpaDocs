---
sidebar_position: 36
---

# IFVEL

## Sintassi

  ```
IFVEL asse, operatore di confronto, valore, GOTO etichetta
IFVEL asse, operatore di confronto, valore, CALL sottoprogramma
IFVEL asse, operatore di confronto, valore, nomefunzione

IFVEL asse, operatore di confronto, valore THEN
    istruzione
    istruzione
    ...
ENDIF

IFVEL asse, operatore di confronto, valore THEN
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
| **asse**                    | nome del dispositivo tipo asse                                                                        |         
| **operatore_di_confronto**  | i simboli che possono essere utilizzati per eseguire il confronto sono: **\<** (minore) **=** (uguale) **>** (maggiore) **=\<** (minore uguale) **>=** (maggiore uguale) **\<>** (diverso) **!=** (diverso)  |        
| **valore**                  | costante o variabile numerica o boolean o timer o nomedevice o proprietà asse                         |     
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Test sulla velocità corrente di un asse.

Se la velocità dell'**asse** verifica la condizione espressa dall'**operatore di confronto** con il valore espresso da **valore**, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).