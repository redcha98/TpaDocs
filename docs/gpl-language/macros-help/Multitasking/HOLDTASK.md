---
sidebar_position: 7
---

# HOLDTASK

## Sintassi

  ```
HOLDTASK [nometask]
HOLDTASK [asse.OwnerTask]
  ```

## Parametri
|Parametro      | Descrizione                                                   |                
|---------------|---------------------------------------------------------------|
| **nometask**  | nome task                                                     |  
| **asse**      | dispositivo asse                                              |           

## Descrizione
Sospende l'esecuzione del task definito in **nometask**. Questa istruzione non sospende il movimento degli assi, che vanno fermati con istruzioni di [STOPMOV](..\Assi\STOPMOV.md).
Se **nometask** è omesso, sospende l'esecuzione del task corrente.
