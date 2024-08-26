---
sidebar_position: 3
---

# ENDTASK

## Sintassi

  ```
ENDTASK [nometask]
ENDTASK [asse.OwnerTask]
  ```

## Parametri
|Parametro              | Descrizione         |                
|-----------------------|---------------------|
| **nometask**          | nome funzione       |  
| **asse**              | dispositivo asse    |       


## Descrizione
Termina l'esecuzione di un task e di tutti i task che questa ha attivato (task figli).
Questa istruzione sospende inoltre il movimento degli assi pendenti e chiude le eventuali connessioni a porte seriali. 

Se la variabile **nometask** è omessa, fa terminare l'esecuzione del task corrente.
