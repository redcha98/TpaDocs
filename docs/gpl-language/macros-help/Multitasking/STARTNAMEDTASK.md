---
sidebar_position: 14
---

# STARTNAMEDTASK

## Sintassi

  ```
STARTNAMEDTASK nometask, nomefunzione [, parametri]
  ```

## Parametri
|Parametro          | Descrizione                                                   |                
|-------------------|---------------------------------------------------------------|
| **nometask**      | nome da assegnare al task                                     |   
| **nomefunzione**  | nome della funzione principale del task                       |       
| **parametri**     | eventuali parametri necessari durante l'esecuzione del task   |       

## Descrizione
Attiva l'esecuzione del task definito da **nometask** e mette in esecuzione **nomefunzione** come funzione iniziale.
Al task possono essere passati eventuali **parametri** utilizzati durante l'esecuzione. Il numero ed il tipo dei parametri passati devono corrispondere a quelli dichiarati nella funzione **nomefunzione**. Se il task è già in esecuzione l'istruzione non ha alcun effetto.
