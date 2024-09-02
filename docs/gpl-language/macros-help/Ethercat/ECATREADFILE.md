---
sidebar_position: 11
---

# ECATREADFILE

## Sintassi

  ```
ECATREADFILE nodo, nomeFile, password, lunghezza, dato [,errore]
  ```

## Parametri
|Parametro         | Descrizione                                                                            |                
|------------------|----------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)      |
| **nomeFile**     | 	Costante o variabile string o vettore di char                                         |
| **password**     | 	Costante o variabile integer                                                          |
| **lunghezza**    | 	Variabile integer                                                                     |
| **dato**         | 	Variabile string o vettore di char o di byte                                          |
| **errore**       | 	Variabile integer                                                                     |

## Descrizione
Permette di effettuare una lettura di un file, identificato da **nomeFile** e **password**, da un **nodo** EtherCAT attraverso il protocollo FoE. 

Viene ritornata in **lunghezza** la dimensione del file letto.

Se la variabile **dato** non ha dimensioni sufficienti a contenere il dato viene restituito un **errore**.

Nella variabile **errore** viene impostato l’eventuale errore generato dalla richiesta.
