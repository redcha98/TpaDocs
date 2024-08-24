---
sidebar_position: 27
---

# IFSAME

## Sintassi

  ```
IFSAME operando1, operando2, GOTO etichetta
IFSAME operando1, operando2, CALL sottoprogramma
IFSAME operando1, operando2, nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                       |                
|-----------------------------|---------------------------------------------------|
| **operando1**               | variabile o nomedevice o funzione                 | 
| **operando2**               | variabile o nomedevice o funzione                 |  
| **etichetta**               | nome dell'etichetta a cui saltare                 | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                       |
| **nomefunzione**            | nome della funzione                               |    

## Descrizione
Test tra due operandi.

Verifica che il valore definito in **operando1** e **operando2** facciano riferimento o allo stesso dispositivo o alla stessa area di memoria.

Se il test tra i due operandi è verificato, viene effettuato un salto a etichetta o chiama sottoprogramma o nomefunzione.
