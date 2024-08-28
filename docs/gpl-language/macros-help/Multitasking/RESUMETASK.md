---
sidebar_position: 8
---

# RESUMETASK

## Sintassi

  ```
RESUMETASK [nometask]
RESUMETASK [asse.OwnerTask]
  ```

## Parametri
|Parametro      | Descrizione                                                   |                
|---------------|---------------------------------------------------------------|
| **nometask**  | nome task                                                     |       
| **asse**      | dispositivo asse                                              |       

## Descrizione
Riprende l'esecuzione dei task definiti in **nometask**. Se **nometask** è omesso, riprende l'esecuzione del task corrente. Se il task era stato sospeso con l'istruzione [STOPTASK](STOPTASK.md) vengono ripresi anche gli eventuali movimenti degli assi.
