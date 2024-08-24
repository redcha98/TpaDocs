---
sidebar_position: 32
---

# IFTASKRUN

## Sintassi

  ```
IFTASKRUN nometask, GOTO etichetta
IFTASKRUN nometask, CALL etichetta
IFTASKRUN nometask, nomefunzione

IFTASKRUN asse.OwnerTask, GOTO etichetta
IFTASKRUN asse.OwnerTask, CALL sottoprogramma
IFTASKRUN asse.OwnerTask, nomefunzione

  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **nometask**                | nome task parallelo                                                                                   |
| **asse**                    | dispositivo asse                                                                                      |
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     |
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Verifica se il task è in esecuzione.

Se il task **nometask** è sospeso, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.