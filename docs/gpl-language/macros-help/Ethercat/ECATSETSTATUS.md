---
sidebar_position: 10
---

# ECATSETSTATUS

## Sintassi

  ```
ECATSETSTATUS nodo, stato
  ```

## Parametri
|Parametro         | Descrizione                                                                            |                
|------------------|----------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)      |         
| **stato**        | Costante o variabile integer.                                                          |

## Descrizione
Comanda il passaggio di **stato** di un **nodo** EtherCAT. I valori ammessi sono:

|Valore    | Stato                                        |                
|----------|----------------------------------------------|
|	1        | INIT                                         |
|	2        | PREOP                                        |
|	4        | SAFEOP                                       |
|	8        | OPERATIONAL                                  |

Quando la macro termina significa che la procedura di passaggio di stato è stata presa in carico. Lo **stato** del **nodo** va poi monitorato attraverso l’istruzione [ECATGETSTATUS](ECATGETSTATUS.md).

