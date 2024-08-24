---
sidebar_position: 10
---

# IFACC

## Sintassi

  ```
IFACC	asse_enc, GOTO etichetta
IFACC	asse_enc, CALL sottoprogramma
IFACC	asse_enc, nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **asse_enc**                | nome del dispositivo tipo asse o encoder                                                              |         
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Testa se l'asse o encoder o definito dalla variabile **asse_enc** è nello stato di accelerazione.

Se la condizione è verificata, salta a **etichetta** o chiama **sottoprogramma** o **nomefunzione**.