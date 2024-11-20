---
sidebar_position: 33
---

# IFTASKHOLD

## Sintassi

  ```
IFTASKHOLD nometask, GOTO etichetta
IFTASKHOLD nometask, CALL etichetta
IFTASKHOLD nometask, nomefunzione

IFTASKHOLD asse.OwnerTask, GOTO etichetta
IFTASKHOLD asse.OwnerTask, CALL sottoprogramma
IFTASKHOLD asse.OwnerTask, nomefunzione

IFTASKHOLD nometask THEN
    istruzione
    istruzione
    ... 
ENDIF

IFTASKHOLD nometask THEN
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
| **nometask**                | nome task parallelo                                                                                   |
| **asse**                    | dispositivo asse                                                                                      |
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     |
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Verifica se il task è sospeso (stato hold).

Se il task **nometask** è sospeso, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o a **nomefunzione**.