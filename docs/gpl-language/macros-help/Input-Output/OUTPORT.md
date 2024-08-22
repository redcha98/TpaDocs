---
sidebar_position: 12
---

# OUTPORT

## Sintassi

  ```
  OUTPORT	nomeoutput8, valore
  ```

## Parametri
|Parametro                | Descrizione                                                 |                
|-------------------------|-------------------------------------------------------------|
| **nomeoutput8**         | nome di dispositivo tipo output8                            |               
| **valore**              | costante o variabile, integer o char o byte                 |

## Descrizione
Copia il **valore** nel dispositivo output8 **nomeoutput8**.

L’output8 viene visto come una maschera di bit. Se un bit vale 1 il corrispondente output viene impostato ad "ON".
