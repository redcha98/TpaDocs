---
sidebar_position: 12
---

# STARTNAMEDREALTIMETASK

## Sintassi

  ```
STARTNAMEDREALTIMETASK nometask, nomefunzione [, parametri]
  ```

## Parametri
|Parametro          | Descrizione                                                   |                
|-------------------|---------------------------------------------------------------|
| **nometask**      | nome da assegnare al task                                     |   
| **nomefunzione**  | nome della funzione principale del task                       |       
| **parametri**     | eventuali parametri necessari durante l'esecuzione del task   |   


## Descrizione
Attiva l'esecuzione di un task real-time. Tale task viene eseguito con la stessa frequenza del real-time di controllo degli assi. A differenza dei normali task GPL viene eseguito interamente ogni real-time, dalla prima istruzione della function fino alla prima istruzione FRET.

Il task è identificato da **nometask** e viene messa in esecuzione **nomefunzione** come funzione iniziale, o principale.

Al task possono essere passati eventuali **parametri** utilizzati durante l'esecuzione. Il numero ed il tipo dei parametri passati devono corrispondere a quelli dichiarati nella funzione **nomefunzione**. Se il task è già in esecuzione l'istruzione non ha alcun effetto.

### Nota
Le variabili locali dichiarate nella funzione iniziale del task real-time vengono inizializzate solo in avvio del task e in seguito mantengono il valore dell'ultima esecuzione.
