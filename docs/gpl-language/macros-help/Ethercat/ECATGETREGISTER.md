---
sidebar_position: 4
---

# ECATGETREGISTER

## Sintassi

  ```
ECATGETREGISTER nodo, indirizzo, dim, dato [,errore]
  ```

## Parametri
|Parametro         | Descrizione                                                                                                              |                
|------------------|--------------------------------------------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)                                        |         
| **indirizzo**    | Costante o variabile integer. Indirizzo del registro dell’ESC (EtherCAT Slave Controller) da leggere (da 0 in poi)       |         
| **dim**          | Costante o variabile integer. Numero di byte da leggere (1-8)                                                            |         
| **dato**         | Variabile char, byte o integer o vettore di byte o char. Contenitore del dato letto                                      |         
| **errore**       | Variabile integer. Codice di errore                                                                                      |         
 
## Descrizione
Restituisce in **dato** il contenuto di un registro dell’ESC (EtherCAT Slave Controller) del **nodo** EtherCAT indicato. Il registro viene identificato dalla variabile **indirizzo** e viene ritornata in **dim** la dimensione del dato letto.

Il parametro **errore** conterrà il codice numerico dell’errore, 0 se non si sono verificati errori.
