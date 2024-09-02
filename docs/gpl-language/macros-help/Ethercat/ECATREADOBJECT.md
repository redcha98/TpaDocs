---
sidebar_position: 12
---

# ECATREADOBJECT

## Sintassi

  ```
ECATREADOBJECT nodo, indice, sottoindice, dimdato ,dato [,errore]
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
Identica a macro [ECATREADSDO](ECATREADSDO.md).
