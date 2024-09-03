---
sidebar_position: 41
---

# ONINPUT

## Sintassi

  ```
ONINPUT	nomeinput, [stato,] nomefunzione [,argomenti]
  ```

## Parametri
|Parametro           | Descrizione                                                                                                        |                
|--------------------|--------------------------------------------------------------------------------------------------------------------|
| **nomeinput**      | nome ingresso                                                                                                      |  
| **stato**          | costante predefinita. Stato da verificare. I valori ammessi sono: <br/>- **ON**  attivo <br/>- **OFF**  disattivo  |  
| **nomefunzione**   | nome funzione                                                                                                      |  
| **argomenti**      | eventuali argomenti della funzione                                                                                 |  

## Descrizione
Abilita l’esecuzione di una funzione, associata allo stato dell'input specificato. Quando l'input commuta nello stato indicato viene messa in esecuzione la funzione specificata da **nomefunzione** in una task parallela.

Se l'argomento **stato** è omesso, la funzione viene chiamata per qualunque cambiamento di stato dell'ingresso.

Il test sullo stato dell'input viene eseguito ogni RealTime a cui si somma un ulteriore RealTime di filtro antirimbalzo sulla gestione ingressi, si può quindi avere un tempo di latenza di 2 RealTime prima del lancio della task.

Non si possono definire più ONINPUT sullo stesso input.

Come argomenti della funzione definita in **nomefunzione** non possono essere utilizzati vettori o matrici locali.

Vedere anche le istruzioni [DELONINPUT](DELONINPUT.md), [ONSTATE](ONSTATE.md) e [DELONSTATE](DELONSTATE.md).
