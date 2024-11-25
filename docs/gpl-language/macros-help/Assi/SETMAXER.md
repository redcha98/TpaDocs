---
sidebar_position: 10
---

# SETMAXER

## Sintassi

  ```
SETMAXER asse, [valore]
  ```

## Parametri
|Parametro         | Descrizione                                                      |                
|------------------|------------------------------------------------------------------|
| **asse**         | nome del dispositivo tipo asse                                   |          
| **valore**       | costante o variabile double. Massimo errore d'inseguimento       |        

## Descrizione
Assegna all'**asse**:
- il **valore** massimo di inseguimento tollerato nel caso di test statico del servoerror
- il **valore** che, incrementato proporzionalmente alla velocità, determina il valore massimo di inseguimento tollerato nel caso di test dinamico del servoerror.
