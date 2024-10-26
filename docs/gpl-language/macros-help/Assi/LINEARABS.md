---
sidebar_position: 22
---

# LINEARABS

## Sintassi

  ```
LINEARABS [etichetta],asse1, quota1, [asse2, quota2 [, asse3, quota3 [, ..., asse6, quota6]]]
  ```

## Parametri
|Parametro                     | Descrizione                                                                      |                
|------------------------------|----------------------------------------------------------------------------------|
| **etichetta**                |costante o variabile integer. Etichetta che identifica un blocco di spostamento   |
| **asse1...[...asse6]**       | nomi di dispositivi tipo asse                                                    |
| **quota1...[...quota6]**     | costante o variabile. Quota di spostamento assoluto                              |         

## Descrizione
Aggiunge alla traiettoria programmata per il canale di interpolazione degli **asse1, asse2…** un movimento lineare nello spazio di lavoro. Il movimento termina alle quote **quota1, quota2…** espresse nel sistema di riferimento corrente (si veda [SETCOORDSYSTEM](SETCOORDSYSTEM.md)). 

Il parametro opzionale **etichetta** è utilizzato per identificare ciascun movimento inserito in traiettoria. È possibile leggere l’etichetta assegnata al movimento in esecuzione con la proprietà asse _LabelInterp_.

Per poter utilizzare la macro è necessario prima aver aperto un canale di interpolazione con la macro [OPENINTERP](OPENINTERP.md).
