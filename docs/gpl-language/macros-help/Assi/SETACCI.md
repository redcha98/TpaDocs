---
sidebar_position: 1
---

# SETACCI

## Sintassi

  ```
SETACCI asse1 [, ..., asse6] [, valore]
  ```

## Parametri
|Parametro                | Descrizione                                                       |                
|-------------------------|-------------------------------------------------------------------|
| **asse1,[...asse6]**    | nome di dispositivo tipo asse                                     |         
| **valore**              | costante o variabile integer o double. Tempo di accelerazione     |         

## Descrizione
Assegna agli assi **asse1, asse2** il tempo di accelerazione per movimenti interpolati identificato da **valore**. Il tempo va espresso in millisecondi. 

Se **valore** è omesso, viene utilizzato il parametro di configurazione.

Vedere anche [SETDECI](SETDECI.md), [SETACC](SETACC.md) e [SETDEC](SETDEC.md).

