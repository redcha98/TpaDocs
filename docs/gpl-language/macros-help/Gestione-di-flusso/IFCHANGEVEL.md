---
sidebar_position: 14
---

# IFCHANGEVEL

## Sintassi

  ```
IFCHANGEVEL asse [, stato], GOTO etichetta
IFCHANGEVEL asse [, stato], CALL sottoprogramma
IFCHANGEVEL asse [, stato], nomefunzione
  ```

## Parametri
|Parametro                    | Descrizione                                                                                           |                
|-----------------------------|-------------------------------------------------------------------------------------------------------|
| **asse**                    | nome del dispositivo tipo asse                                                                         |      
| **stato**                   | tipo di variazione. I valori ammessi sono: **POSITIVE**, **NEGATIVE**                                 |         
| **etichetta**               | nome dell'etichetta a cui saltare                                                                     | 
| **nomesottoprogramma**      | etichetta di sottoprogramma                                                                           |
| **nomefunzione**            | nome della funzione                                                                                   |    

## Descrizione
Testa se si è verificata una variazione di velocità di un asse.

Se l'asse definito dalla variabile **asse** sta effettuando un cambio di velocità durante uno spostamento, viene effettuato un salto a **etichetta** o una chiamata a **sottoprogramma** o **nomefunzione**.

Il parametro **stato** specifica se la velocità è aumentata (POSITIVE) o diminuita (NEGATIVE).