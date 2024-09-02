---
sidebar_position: 14
---

# ECATWRITEOBJECT

## Sintassi

  ```
ECATWRITEOBJECT nodo, indice, sottoindice, dimdato, dato [,errore]
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
Identica a macro [ECATWRITESDO](ECATWRITESDO.md).