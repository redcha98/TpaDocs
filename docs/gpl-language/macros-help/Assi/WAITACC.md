---
sidebar_position: 44
---

# WAITACC

## Sintassi

  ```
 WAITACC asse1 [, ..., asse6] 
  ```

## Parametri
|Parametro                 | Descrizione                     |                
|--------------------------|---------------------------------|
| **asse1...[...asse6]**   | nomi di dispositivi tipo asse   |         

## Descrizione
Attesa dello stato di accelerazione o uno degli stati successivi su tutti gli **assi** (1÷6) specificati.

Il task, in cui viene eseguita l'istruzione, viene messo in attesa, fino a quando l'asse si trova nello stato di accelerazione o in uno degli stati successivi.

Gli stati dell'asse sono identificati da un numero intero:
- accelerazione = 1
- regime = 2
- decelerazione = 3
- quota = 4
- attesa finestra grande = 5
- attesa asse fermo = 6
- attesa finestra piccola = 7
