---
sidebar_position: 20
---

# SETRAMPSHAPE

## Sintassi

  ```
  SETRAMPSHAPE asse [, valore] 
  ```

## Parametri
|Parametro         | Descrizione                                           |                
|------------------|-------------------------------------------------------|
| **asse**         | nome di dispositivo tipo asse                         |         
| **valore**       | costante o variabile numerica. valore percentuale     |         

## Descrizione
Imposta il **valore** di smooth applicato alle accelerazioni e decelerazioni richieste all’**asse** durante i movimenti in punto-punto. Il parametro **valore** è espresso in percentuale nell’intervallo 0%-100%. 

Impostando il **valore** a 0% si ottiene un movimento con rampe di velocità lineari e con variazioni di accelerazione a gradino. Con questa configurazione si ottengono le massime prestazioni dinamiche possibili per l’**asse**. Un parametro **valore** maggiore di 0% permette di ottenere rampe di velocità ad S con variazioni di accelerazione lineari. In questo modo è possibile limitare o eliminare eventuali vibrazioni meccaniche prodotte dal movimento dell’**asse**.

Nel caso il parametro **valore** non sia indicato, viene preso il corrispondente valore indicato in configurazione.
