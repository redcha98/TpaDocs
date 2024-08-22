---
sidebar_position: 3
---

# STARTTIMER

## Sintassi

  ```
  STARTTIMER nometimer [, direzione] 
  ```

## Parametri
|Parametro                | Descrizione                                 |                
|-------------------------|---------------------------------------------| 
| **nometimer**           | nome di variabile tipo timer                |  
| **direzione**           | costante predefinita. I valori impostabili sono: <br/> - **UP** crescente <br/> - **DOWN** decrescente |               

## Descrizione
Fa partire il timer **nometimer** con modalità eventualmente specificata da **direzione**.

Se il parametro **direzione** è omesso, viene assunta la modalità **DOWN**.

Quando un timer (avviato in modalità decrescente) arriva a zero, si ferma automaticamente.

Vedere anche [HOLDTIMER](HOLDTIMER.md) e [SETTIMER](SETTIMER.md).

