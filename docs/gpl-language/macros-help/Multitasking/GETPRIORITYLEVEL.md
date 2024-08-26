---
sidebar_position: 3
---

# GETPRIORITYLEVEL

## Sintassi

  ```
GETPRIORITYLEVEL livello [,nomefunzione]
  ```

## Parametri
|Parametro              | Descrizione                                           |                
|-----------------------|-------------------------------------------------------|
| **livello**           | variabile integer. Livello di priorità di esecuzione  |  
| **nomefunzione**      | nome funzione                                         |       


## Descrizione
Restituisce nella variabile **livello** il valore di priorità del task definito da **nomefunzione**. Detto valore è un numero compreso tra 0 e 255, dove 0 rappresenta il livello più alto di priorità e 255 il più basso. Se **nomefunzione** non è definito, viene ritornato il valore di priorità del task corrente, ovvero della funzione in cui l'istruzione GETPRIORITYLEVEL viene eseguita.

Vedere anche [SETPRIORITYLEVEL](SETPRIORITYLEVEL.md).


