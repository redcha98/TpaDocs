---
sidebar_position: 16
---

# SETVELI

## Sintassi

  ```
SETVELI asse1 [, ..., asse6] [, velocità]
  ```

## Parametri
|Parametro                   | Descrizione                        |                
|----------------------------|------------------------------------|
| **asse1 [, ..., asse6]**   | nome di dispositivo tipo asse      |         
| **velocità**               | costante o variabile double.       |         

## Descrizione
Imposta la **velocità** massima degli assi **asse1, asse2, ...** per i movimenti interpolati.

La **velocità** è espressa nell'unità di misura degli assi, specificata dal parametro di configurazione. 

Se l'argomento **velocità** è omesso, viene assunta quella massima di configurazione.


