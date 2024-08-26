---
sidebar_position: 10
---

# SETPRIORITYLEVEL

## Sintassi

  ```
SETPRIORITYLEVEL livello [,nomefunzione]
  ```

## Parametri
|Parametro              | Descrizione                                           |                
|-----------------------|-------------------------------------------------------|
| **livello**           | variabile integer. Livello di priorità di esecuzione  |  
| **nomefunzione**      | nome funzione                                         |       


## Descrizione
Assegna al task definito in **nomefunzione** il valore di priorità contenuto nella variabile **livello**.

Detto valore è un numero compreso tra 0 e 255, dove 0 rappresenta il livello più alto di priorità e 255 il più basso. Se non è definito il nome del task nella variabile **nomefunzione** viene modificato il valore di priorità del task corrente, ovvero il livello di esecuzione della funzione in cui l'istruzione viene eseguita.	

Vedere anche [GETPRIORITYLEVEL](GETPRIORITYLEVEL.md).


