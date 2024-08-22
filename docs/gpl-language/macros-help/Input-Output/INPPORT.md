---
sidebar_position: 2
---

# INPORT

## Sintassi

  ```
  INPPORT	nomeinput8, variabile
  ```

## Parametri
|Parametro                | Descrizione                                                 |                
|-------------------------|-------------------------------------------------------------|
| **nomeinput8**          | nome di dispositivo tipo input8                             |               
| **variabile**           | variabile integer o char o byte                             |

## Descrizione
Copia lo stato del dispositivo input8 **nomeinput8** nella **variabile** specificata. 

L’input8 viene visto come una maschera di bit. Se un input del dispositivo input8 si trova in stato "ON" il corrispondente bit viene impostato ad 1.
