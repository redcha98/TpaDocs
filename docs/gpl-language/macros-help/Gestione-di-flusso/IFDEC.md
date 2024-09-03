---
sidebar_position: 17
---

# IFACC

## Sintassi

  ```
IFDEC asse_enc, GOTO etichetta
IFDEC asse_enc, CALL sottoprogramma
IFDEC asse_enc, nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **asse_enc**                | nome del dispositivo tipo asse o encoder                                                              |         
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Testa se l'asse o encoder o definito dalla variabile **asse_enc** è nello stato di decelerazione.

Se la condizione è verificata, salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione**.