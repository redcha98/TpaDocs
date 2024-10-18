---
sidebar_position: 21
---

# SETRAMPSHAPEI

## Sintassi

  ```
  SETRAMPSHAPEI asse [, valore] 
  ```

## Parametri
|Parametro         | Descrizione                                           |                
|------------------|-------------------------------------------------------|
| **asse**         | nome di dispositivo tipo asse                         |         
| **valore**       | costante o variabile numerica. valore percentuale     |         

## Descrizione
Imposta il **valore** di smooth applicato alle accelerazioni e decelerazioni richieste ai movimenti del canale di interpolazione di cui fa parte il dispositivo **asse**. Il parametro **valore** è espresso in percentuale nell’intervallo 0%-100%. 

Impostando il **valore** a 0% si ottiene un movimento interpolato con rampe di velocità lineari e con variazioni di accelerazione a gradino. Con questa configurazione si ottengono le massime prestazioni dinamiche possibili durante i movimenti interpolati. Un parametro **valore** maggiore di 0% permette di ottenere rampe di velocità ad S con variazioni di accelerazione lineari. In questo modo è possibile limitare o eliminare eventuali vibrazioni meccaniche prodotte dai movimenti interpolati.

Nel caso il parametro **valore** non sia indicato, viene preso il corrispondente valore indicato in configurazione.
