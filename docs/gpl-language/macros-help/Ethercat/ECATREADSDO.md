---
sidebar_position: 12
---

# ECATREADSDO

## Sintassi

  ```
ECATREADSDO nodo, indice, sottoindice, dimdato ,dato [,errore]
  ```

## Parametri
|Parametro         | Descrizione                                                                            |                
|------------------|----------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)      |
| **indice**       | Costante o variabile integer. Indice oggetto nel dizionario                            |
| **sottoindice**  | Costante o variabile integer. Sottoindice oggetto nel dizionario                       |
| **dimdato**      | Variabile integer. Dimensione del dato letto.                                          |
| **dato**         | Variabile char, byte, integer, double,vettore di char,string. Riceve il dato           |
| **errore**       | Variabile integer                                                                      |

## Descrizione
Legge il contenuto di un oggetto del dizionario di oggetti contenuti nel **nodo**. L'istruzione permette di leggere tramite il protocollo SDO tutti gli oggetti definiti secondo _"CiA 402 CANopen device profile"_ oltre a tutti gli oggetti resi disponibili dal produttore del nodo. 

Per il significato dei parametri **indice**, **sottoindice** fare riferimento a _"CiA 402 CANopen device profile"_ o alla specifica del produttore del nodo.

Nella variabile **dimdato** viene posta la dimensione letta restituita dal nodo.

Nella variabile **errore** viene impostato l’eventuale errore generato dalla richiesta.
