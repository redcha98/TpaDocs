---
sidebar_position: 15
---

# STOPTASK

## Sintassi

  ```
STOPTASK [nometask]
STOPTASK [asse.OwnerTask]
  ```

## Parametri
|Parametro      | Descrizione                                                   |                
|---------------|---------------------------------------------------------------|
| **nometask**  | nome task                                                     |     
| **asse**      | dispositivo asse                                              |         

## Descrizione
Ferma l'esecuzione di un task e di tutti gli altri task che questa ha attivato (task figli), fermando il movimento degli assi (qualora fosse in atto tale azione).
Se **nometask** è omesso, ferma l'esecuzione del task corrente. L'esecuzione del task ed il movimento degli assi può essere riattivato con l'istruzione [RESUMETASK](RESUMETASK.md).
 