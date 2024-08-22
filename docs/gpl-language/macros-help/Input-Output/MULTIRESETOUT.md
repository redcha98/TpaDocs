---
sidebar_position: 6
---

# MULTIRESETOUT 

## Sintassi

  ```
  MULTIRESETOUT	maschera, nomeoutput1[, ..., nomeoutput32]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **maschera**            | maschera delle uscite interessate - costante o variabile char, byte o integer         |
| **nomeoutput1**         | nome di dispositivo tipo output                                                       |               

## Descrizione
Di tutte le uscite **nomeoutput** (1÷32), disattiva quelle il cui bit nell'argomento **maschera** è posto a 1. Il bit 0 di **maschera** (quello di peso più basso) corrisponde a **nomeoutput1**.



