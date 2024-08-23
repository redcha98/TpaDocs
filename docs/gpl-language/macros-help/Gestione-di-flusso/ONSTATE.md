---
sidebar_position: 3
---

# ONSTATE

## Sintassi

  ```
ONSTATE	nomevariabile, [stato,] nomefunzione[,argomenti]
  ```

## Parametri
|Parametro           | Descrizione                                                                                                        |                
|--------------------|--------------------------------------------------------------------------------------------------------------------|
| **nomevariabile**  | nome di variabile di tipo boolean                                                                                  |  
| **stato**          | costante predefinita. Stato da verificare. I valori ammessi sono: <br/>- **ON**  attivo <br/>- **OFF**  disattivo  |  
| **nomefunzione**   | nome funzione                                                                                                      |  
| **argomenti**      | eventuali argomenti della funzione                                                                                 |  

## Descrizione
Abilita l’esecuzione di una funzione, associata allo stato della variabile boolean specificata. Quando la variabile commuta nello stato indicato viene messa in esecuzione la funzione specificata da **nomefunzione** in una task parallela.

Se l'argomento **stato** è omesso, la funzione viene chiamata ad ogni cambiamento di stato della variabile boolean.

Il test sullo stato della variabile boolean viene eseguito ogni Realtime, quindi, dalla variazione della variabile all'esecuzione della funzione si può avere un tempo massimo di latenza di un RealTime.

Non si possono definire più ONSTATE sulla stessa variabile.

Come argomenti della funzione definita in **nomefunzione** non possono essere utilizzati vettori o matrici locali.

Vedere anche le istruzioni [DELONSTATE](DELONSTATE.md), [ONINPUT](ONINPUT.md) e [DELONINPUT](DELONINPUT.md).
