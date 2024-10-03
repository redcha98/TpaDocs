---
sidebar_position: 13
---

# ENDMOV

## Sintassi

  ```
ENDMOV asse
  ```

## Parametri
|Parametro       | Descrizione                     |                
|----------------|---------------------------------|
| **asse**       | nome di dispositivo tipo asse   |         

## Descrizione
Ferma il movimento dell’**asse** (o del canale di interpolazione individuato da **asse**). A differenza dell’istruzione [STOPMOV](STOPMOV.md), il movimento non potrà più essere ripreso con un’istruzione [STARTMOV](STARTMOV.md). 

L’istruzione non ha effetto se l’asse è asservito ad un altro dispositivo (tramite istruzione [CHAIN](CHAIN.md)).

Se il parametro asse indica un dispositivo encoder viene generato l’errore di sistema 4359.