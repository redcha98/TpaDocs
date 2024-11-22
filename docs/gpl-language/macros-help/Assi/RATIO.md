---
sidebar_position: 4
---

# RATIO

## Sintassi

  ```
RATIO asse, [valore]
  ```

## Parametri
|Parametro         | Descrizione                                              |                
|------------------|----------------------------------------------------------|
| **asse**         | nome del dispositivo tipo asse                           |          
| **valore**       | costante o variabile double. Rapporto di riduzione       |        

## Descrizione
Imposta il rapporto di concatenamento di un **asse** slave rispetto al proprio master. I movimenti dell'asse slave risulteranno scalati rispetto a quelli del master del rapporto di concatenamento impostato. 

Se viene omesso il parametro **valore**, il rapporto viene ripristinato a 1.0 (movimenti identici). L'istruzione genera errore di sistema se eseguita quando l'**asse** non è in stato slave.

Vedere istruzione [CHAIN](CHAIN.md).


### Esempio
  ```c {2} showLineNumbers
CHAIN	X, Y
RATIO	Y, 0.5	   ;// rapporto di riduzione 1/2

MOVABS	X, 100     ;//l'asse Y muoverà a quota 50
WAITSTILL X
 ```
