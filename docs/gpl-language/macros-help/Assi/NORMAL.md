---
sidebar_position: 28
---

# NORMAL

## Sintassi

  ```
NORMAL asse
  ```

## Parametri
|Parametro       | Descrizione                     |                
|----------------|---------------------------------|
| **asse**       | nome di dispositivo tipo asse   |         

## Descrizione
Abilita il controllo del movimento per l'**asse**. L’**asse** non deve essere in stato di errore e non deve essere inserito in un canale di interpolazione né concatenato con altri assi o encoder ([CHAIN](CHAIN.md)). 

Se l’**asse** è in movimento, viene arrestato con una rampa di velocità la cui decelerazione è definita da [SETDEC](SETDEC.md) (o dal valore di configurazione nel caso questa istruzione non sia stata usata).