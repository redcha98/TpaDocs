---
sidebar_position: 13
---

# ECATWRITEFILE

## Sintassi

  ```
ECATWRITEFILE nodo, nomeFile, password, lunghezza, dato [, errore]
  ```

## Parametri
|Parametro         | Descrizione                                                                            |                
|------------------|----------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)      |
| **nomeFile**     | Costante o variabile string o vettore di char                                          |
| **password**     | Costante o variabile integer                                                           |
| **lunghezza**    | Costante o variabile integer                                                           |
| **dato**         | Costante o variabile string o vettore di char o di byte                                |
| **errore**       | Variabile integer                                                                      |

## Descrizione
Permette di effettuare una scrittura di un file identificato da **nomeFile** e **password**, su un **nodo** EtherCAT attraverso il protocollo FoE. 

Nella variabile **lunghezza** deve essere specificata la dimensione del dato da scrivere.

Nella variabile **errore** viene impostato l’eventuale errore generato dalla richiesta.
