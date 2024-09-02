---
sidebar_position: 14
---

# ECATWRITESDO

## Sintassi

  ```
ECATWRITESDO nodo, indice, sottoindice, dimdato, dato [,errore]
  ```

## Parametri
|Parametro         | Descrizione                                                                                   |                
|------------------|-----------------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)             |
| **indice**       | Costante o variabile integer. Indice oggetto nel dizionario                                   |
| **sottoindice**  | Costante o variabile integer. Sottoindice oggetto nel dizionario                              |
| **dimdato**      | Costante o Variabile integer. Dimensione del dato da scrivere.                                |
| **dato**         | Costante o Variabile char, byte, integer, double, vettore di char, string. Contiene il dato   |
| **errore**       | Variabile integer                                                                             |

## Descrizione
Scrive il contenuto di un oggetto del dizionario di oggetti contenuti nel **nodo**. L'istruzione permette di scrivere tramite il protocollo SDO tutti gli oggetti secondo _"CiA 402 CANopen device profile"_ oltre a tutti gli oggetti resi disponibili dal produttore del nodo. 

Per il significato dei parametri **indice**, **sottoindice** da scrivere fare riferimento a _"CiA 402 CANopen device profile"_ o alla specifica del produttore del nodo.

Il parametro **dimdato** deve corrispondere alla dimensione in Byte dell’oggetto da scrivere. Se non coincidesse, il nodo restituirebbe un errore e la scrittura fallirebbe.

Nella variabile **errore** viene restituito l’eventuale abort code restituito dal nodo o errore nella gestione della richiesta.

