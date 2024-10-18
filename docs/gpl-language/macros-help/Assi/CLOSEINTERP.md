---
sidebar_position: 20
---

# CLOSEINTERP

## Sintassi

  ```
CLOSEINTERP asse
  ```

## Parametri
|Parametro                     | Descrizione                                           |                
|------------------------------|-------------------------------------------------------|
| **asse**                     | nome di dispositivo tipo asse                         |         

## Descrizione
Termina il canale di interpolazione individuato da **asse**. Nel caso sia in corso un movimento, gli assi vengono prima svincolati dall’interpolazione e poi fermati con una rampa di decelerazione.