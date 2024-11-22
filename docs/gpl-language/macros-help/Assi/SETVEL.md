---
sidebar_position: 11
---

# SETVEL

## Sintassi

  ```
SETVEL asse [, velocità]
  ```

## Parametri
|Parametro         | Descrizione                        |                
|------------------|------------------------------------|
| **asse**         | nome di dispositivo tipo asse      |         
| **velocità**     | costante o variabile double.       |         

## Descrizione
Imposta la **velocità** massima dell'**asse** per i movimenti punto-punto.

La **velocità** è espressa nell'unità di misura dell'asse, specificata in configurazione.

Se la **velocità** programmata è superiore a quella massima di configurazione viene usata quest'ultima.

Se l'argomento **velocità** è omesso, viene assunta quella di configurazione. Sono ammessi solo valori positivi di velocità.

Vedere l'istruzione [SETVELI](SETVELI.md).

