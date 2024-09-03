---
sidebar_position: 32
---

# IFTARGET

## Sintassi

  ```
IFTARGET asse_enc, GOTO etichetta
IFTARGET asse_enc, CALL sottoprogramma
IFTARGET asse_enc, nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **asse_enc**                | nome del dispositivo tipo asse o encoder                                                              |         
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Testa se l'asse o encoder o definito dalla variabile **asse_enc** ha raggiunto la quota finale programmata. L'asse, anche se ha raggiunto la quota target finale, non è necessariamente fermo, in genere dovrà recuperare l'errore d'anello. 

Se la condizione è verificata, salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione**.

Vedere anche [IFSTILL](IFSTILL.md).