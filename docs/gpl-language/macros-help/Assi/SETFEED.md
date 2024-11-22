---
sidebar_position: 4
---

# SETFEED

## Sintassi

  ```
SETFEED asse valore
  ```

## Parametri
|Parametro         | Descrizione                                                                               |                
|------------------|-------------------------------------------------------------------------------------------|
| **asse**         | nome di dispositivo tipo asse                                                             |         
| **valore**       | costante o variabile integer o double. Rappresenta la percentuale di feed rate override.  |         

## Descrizione
Modifica il valore percentuale di feed rate override dell'asse relativamente ai movimenti punto-punto. 

Il valore limite minimo applicabile è 3%, il valore massimo applicabile è 97%. Oltre questi limiti il valore viene arrotondato all’estremo cioè rispettivamente a 0% e 100%.

Vedere l'istruzione [SETFEEDI](SETFEEDI.md).

