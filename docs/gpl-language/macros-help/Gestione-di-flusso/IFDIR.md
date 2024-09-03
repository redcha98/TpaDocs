---
sidebar_position: 18
---

# IFDIR

## Sintassi

  ```
IFDIR asse, direzione, GOTO etichetta
IFDIR asse, direzione, CALL sottoprogramma
IFDIR asse, direzione, nomefunzione

IFDIR asse, direzione THEN
    istruzione
    istruzione
    ... 
ENDIF

IFDIR asse, direzione THEN
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
| **asse**                    | nome di dispositivo tipo asse                                                                          |   
| **direzione**               | direzione asse. I valori ammessi sono: <br/>- **POSITIVE** direzione asse positiva <br/>- **NEGATIVE ** direzione asse negativa |  
| **etichetta**               | nome dell'etichetta a cui saltare                                                                      | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                            |
| **nomefunzione**            | nome della funzione                                                                                    |    

## Descrizione
Test sulla direzione corrente di un asse.

Se l'**asse** si muove nella direzione specificata dalla variabile **direzione**, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o **nomefunzione**.

Per maggiori dettagli vedere il costrutto [IF-THEN-ELSE](IF.md).
