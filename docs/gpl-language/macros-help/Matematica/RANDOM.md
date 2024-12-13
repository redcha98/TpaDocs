---
sidebar_position: 17
---

# RANDOM

## Sintassi

  ```
RANDOM min, max, risultato
  ```

## Parametri
|Parametro              | Descrizione                                        |                
|-----------------------|----------------------------------------------------|
| **min**               | costante o variabile numerica o dispositivo        |   
| **max**               | costante o variabile numerica o dispositivo        |   
| **risultato**         | vvariabile numerica o dispositivo                  |         

## Descrizione
Restituisce in **risultato** un numero pseudocasuale compreso tra **min** e **max** (estremi inclusi). Eseguendo l'istruzione ripetutamente si ottiene una sequenza di numeri pseudocasuali.

E' possibile cambiare il seme dell'algoritmo di numeri casuali tramite l'istruzione [SEED](SEED.md)

Per la conversione dei dati, in base al tipo di dato dichiarato, riferirsi al capitolo [Conversione dati](/docs/ToDo.md).

### Esempio

```c {3} showLineNumbers
SetVal   2,op1        ;// assegna 2 alla variabile op1
SetVal   100,op2      ;// assegna 100 alla variabile op2
Random   op1,op2,var  ;// Il valore posto nella variabile var sarà un numero casuale compreso tra 2 e 100
```