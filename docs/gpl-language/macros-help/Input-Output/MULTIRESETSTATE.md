---
sidebar_position: 5
---

# MULTIRESETSTATE 

## Sintassi

  ```
MULTIRESETSTATE	maschera, boolean1[, ..., boolean32]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **maschera**            | maschera dei boolean interessati - costante o variabile char, byte o integer          |
| **boolean1**            | nome di variabile booleana                                                            |               

## Descrizione
Di tutte le variabili **boolean** (1÷32), disattiva, ossia pone ad "OFF", quelli il cui bit nell'argomento **maschera** è posto a 1.

Il bit 0 di **maschera** (quello di peso più basso) corrisponde a **boolean1**. 



