---
sidebar_position: 2
---

# UNCHAIN

## Sintassi

  ```
  UNCHAIN asse_slave
  ```

## Parametri
|Parametro          | Descrizione                                        |                
|-------------------|----------------------------------------------------|   
| **asse_slave**    | nome del dispositivo tipo asse                     |         

## Descrizione
Interrompe l’asservimento dell’**asse** stabilito dall’istruzione [CHAIN](CHAIN.md). 

Se l’**asse** è in movimento, viene effettuata una rampa di velocità fino a zero. La decelerazione imposta all’**asse** è quella definita dall’istruzione [SETDEC](SETDEC.md). 

L’istruzione non ha effetto se l’**asse** non è asservito ad un altro dispositivo.
