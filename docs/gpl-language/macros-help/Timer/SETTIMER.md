---
sidebar_position: 2
---

# SETTIMER

## Sintassi

  ```
  SETTIMER nometimer, tempo
  ```

## Parametri
|Parametro                | Descrizione                                 |                
|-------------------------|---------------------------------------------|
| **nometimer**           | nome di variabile tipo timer                |  
| **tempo**               | costante o variabile                        |               

## Descrizione
Imposta **nometimer** al **tempo** specificato (in secondi).

Sono ammessi solo valori maggiori di zero. La precisione massima dei timer è il periodo di RealTime.

Vedere anche [STARTTIMER](STARTTIMER.md) e [HOLDTIMER](HOLDTIMER.md).

### Esempio
  ```c {4} showLineNumbers
  ; La Function imposta un timer 
  
  ;Imposto il timer TimeOut al valore 20 secondi
  SETTIMER	Timeout,20
  ; parte il timer in modalità decrescente. Quando arriva a 0 si ferma
  STARTTIMER	Timeout,DOWN
  ```