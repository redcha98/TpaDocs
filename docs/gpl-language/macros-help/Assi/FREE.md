---
sidebar_position: 15
---

# FREE

## Sintassi

  ```
FREE asse
  ```

## Parametri
|Parametro       | Descrizione                     |                
|----------------|---------------------------------|
| **asse**       | nome di dispositivo tipo asse   |         

## Descrizione
Disabilita il controllo del movimento per l'**asse**. Se l’**asse** è in stato di errore, tale condizione viene resettata. 

Se l’**asse** è slave in un concatenamento ([CHAIN](CHAIN.md)), il vincolo viene interrotto e il movimento dell’asse bloccato. Pertanto, se è necessario interrompere il concatenamento quando l’**asse** è in movimento, è consigliabile usare l’istruzione [UNCHAIN](UNCHAIN.md) che arresta il movimento con una rampa di decelerazione.

Durante lo stato di Free la posizione Target è continuamente uguagliata alla posizione Reale ricevuta: in questo modo, se l’**asse** non è in potenza, è possibile modificarne la posizione dell’asse dall’esterno senza incorrere in errori di sistema (servoerror).
