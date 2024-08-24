---
sidebar_position: 41
---

# SELECT

## Sintassi

  ```
SELECT test
    CASE valore	
        istruzione
        …
    CASE valore1 TO valore2
        istruzione
        …
    CASE IS <=> valore	
        istruzione
        …
    CASE ELSE
        istruzione	
        …
ENDSELECT
  ```

  **istruzione** è qualsiasi istruzione tranne SELECT

## Parametri
|Parametro                       | Descrizione                                                      |                
|--------------------------------|------------------------------------------------------------------|
| **test**                       | costante o variabile integer o proprietà asse                    | 
| **valore, valore1, valore2**   | costanti integer                                                 |
| **nomefunzione**               | nome della funzione                                              |    

## Descrizione
Selezione multipla sulla base del **valore** della variabile **test**. Viene eseguito il codice che si trova nel CASE della condizione verificata. Il ramo CASE-ELSE viene eseguito se nessun CASE precedente viene soddisfatto. Per ogni CASE (opzionale) può esserci una o più istruzioni, tranne SELECT e LOCAL. 
Ci deve essere almeno un CASE tra SELECT ed ENDSELECT. Quest'ultima segnala il termine dell'istruzione SELECT.

### Nota
L’istruzione viene eseguita più velocemente se dopo ogni CASE c’è una sola istruzione e questa è GOTO, CALL, BREAK, BREAKAL, CONTINUE o chiamata a funzione senza argomenti. 
