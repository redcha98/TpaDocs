---
sidebar_position: 8
---

# ECATSETREGISTER

## Sintassi

  ```
ECATSETREGISTER nodo, indirizzo, dim, dato [,errore]
  ```

## Parametri
|Parametro         | Descrizione                                                                                                              |                
|------------------|--------------------------------------------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)                                        |         
| **indirizzo**    | Costante o variabile integer. Indirizzo del registro dell’ESC (EtherCAT Slave Controller) da scrivere (da 0 in poi)      |         
| **dim**          | Costante o variabile integer. Numero di byte da scrivere (1-8)                                                           |         
| **dato**         | Costante o variabile char, byte o integer o vettore di byte o char.  Dato da scrivere                                    |         
| **errore**       | Variabile integer. Codice di errore                                                                                      |         
 
## Descrizione
L’istruzione scrive il contenuto **dato** di un registro dell’ESC (EtherCAT Slave Controller) del **nodo** EtherCAT indicato. Il registro viene identificato dalla variabile **indirizzo** e viene specificata in **dim** la dimensione del dato da scrivere.

Il parametro **errore** conterrà il codice numerico dell’errore, 0 se non si sono verificati errori.

