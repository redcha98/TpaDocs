---
sidebar_position: 10
---

# LOOKAHEAD

## Sintassi

  ```
LOOKAHEAD [asse,] valore
  ```

## Parametri
|Parametro         | Descrizione                                            |                
|------------------|--------------------------------------------------------|
| **asse**         | nome del dispositivo tipo asse                         |          
| **valore**       | costante o variabile double. Valore di lookahead       |        

## Descrizione
Imposta il **valore** di lookahead dell'interpolatore. Il lookahead è il numero di tratti di interpolazione che vengono processati prima dell'inizio del movimento. 

Se non viene specificato il parametro **asse**, l’impostazione viene effettuata su tutti i canali di interpolazione.
