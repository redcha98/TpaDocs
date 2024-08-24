---
sidebar_position: 8
---

# MULTISETOUT 

## Sintassi

  ```
  MULTISETOUT	maschera, nomeoutput1[, ..., nomeoutput32]
  ```

## Parametri
|Parametro                | Descrizione                                                                           |                 
|-------------------------|---------------------------------------------------------------------------------------|     
| **maschera**            | maschera delle uscite interessate - costante o variabile char, byte o integer         |
| **nomeoutput1**         | nome di dispositivo tipo output                                                       |               

## Descrizione
Di tutte le uscite **nomeoutput** (1÷32), attiva quelle il cui bit nell'argomento **maschera** è posto a 1.

Il bit 0 di **maschera** (quello di peso più basso) corrisponde a **nomeoutput1**. Se l'uscita è di tipo monostabile viene disattivata automaticamente allo scadere di un timeout fisso di 200 millisecondi.




