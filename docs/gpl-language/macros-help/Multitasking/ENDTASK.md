---
sidebar_position: 3
---

# ENDTASK

## Sintassi

  ```
ENDTASK [nometask]
ENDTASK [asse.OwnerTask]
  ```

## Parametri
|Parametro              | Descrizione         |                
|-----------------------|---------------------|
| **nometask**          | nome funzione       |  
| **asse**              | dispositivo asse    |       


## Descrizione
Termina l'esecuzione di un task e di tutti i task che questa ha attivato (task figli).

Questa istruzione ferma anche tutti i movimenti punto-punto programmati dal task nometask in modo analogo a quanto accade con l’istruzione [ENDMOV](../Assi/ENDMOV.md). Se il task nometask controlla un canale di interpolazione (cioè ha eseguito almeno un’istruzione [OPENINTERP](../Assi/OPENINTERP.md)), il movimento interpolato viene fermato ([ENDMOV](../Assi/ENDMOV.md)) e il canale di interpolazione viene chiuso ([CLOSEINTERP](../Assi/CLOSEINTERP.md)). 

Se la variabile **nometask** è omessa, fa terminare l'esecuzione del task corrente.
