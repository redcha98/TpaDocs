---
sidebar_position: 8
---

# SETLIMNEG

## Sintassi

  ```
SETLIMNEG asse_enc, quota
  ```

## Parametri
|Parametro         | Descrizione                                              |                
|------------------|----------------------------------------------------------|
| **asse_enc**     | nome del dispositivo tipo asse o encoder                 |         
| **quota**        | costante o variabile. Limite negativo                    |         

## Descrizione
Assegna all'**asse** la **quota** limite inferiore.

Se il parametro **quota** è omesso, viene abilitato il limite negativo di configurazione.

Il valore di **quota** fa riferimento alla quota teorica dell’**asse** cioè non vengono tenuti in considerazione eventuali sistemi di riferimento locali in presa.

Vedere anche le istruzioni [RESLIMNEG](RESLIMNEG.md), [RESLIMPOS](RESLIMPOS.md), [SETLIMPOS](SETLIMPOS.md).
