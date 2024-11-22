---
sidebar_position: 9
---

# SETLIMPOS

## Sintassi

  ```
SETLIMPOS asse_enc, quota
  ```

## Parametri
|Parametro         | Descrizione                                              |                
|------------------|----------------------------------------------------------|
| **asse_enc**     | nome del dispositivo tipo asse o encoder                 |         
| **quota**        | costante o variabile. Limite positivo                    |         

## Descrizione
Assegna all'**asse** la **quota** massima ammissibile. 

Se il parametro **quota** è omesso, viene abilitato il limite positivo di configurazione. 

Il valore di **quota** fa riferimento alla quota teorica dell’**asse** cioè non vengono tenuti in considerazione eventuali sistemi di riferimento locali in presa.

Vedere anche le istruzioni [RESLIMNEG](RESLIMNEG.md), [RESLIMPOS](RESLIMPOS.md), [SETLIMNEG](SETLIMNEG.md).
