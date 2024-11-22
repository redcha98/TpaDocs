---
sidebar_position: 2
---

# SETDECI

## Sintassi

  ```
SETDECI asse1 [, ..., asse6] [, valore]
  ```

## Parametri
|Parametro               | Descrizione                                                       |                
|------------------------|-------------------------------------------------------------------|
| **asse1,[...asse6]**   | nome di dispositivo tipo asse                                     |         
| **valore**             | costante o variabile integer o double. Tempo di decelerazione     |         

## Descrizione
Assegna agli assi **asse1, asse2** il tempo di decelerazione per movimenti interpolati identificato da **valore**. Il tempo va espresso in millisecondi. 

Se **valore** è omesso, viene utilizzato il parametro di configurazione.

Vedere anche [SETACCI](SETACCI.md), [SETDEC](SETDEC.md), e [SETACC](SETACC.md).

