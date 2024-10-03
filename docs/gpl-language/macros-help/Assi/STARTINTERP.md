---
sidebar_position: 39
---

# STARTINTERP

## Sintassi

  ```
STARTINTERP asse
  ```

## Parametri
|Parametro       | Descrizione                     |                
|----------------|---------------------------------|
| **asse**       | nome di dispositivo tipo asse   |         

## Descrizione
Avvia il movimento programmato per il canale di interpolazione identificato da **asse**. 

Se non viene e utilizzata questa istruzione il movimento ha inizio quando viene riempito completamente il LOOKAHEAD oppure quando viene raggiunta una istruzione [WAITSTILL](WAITSTILL.md).

La macro non ha effetto se **asse** non individua un canale di interpolazione.