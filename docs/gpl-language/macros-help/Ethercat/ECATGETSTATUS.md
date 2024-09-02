---
sidebar_position: 5
---

# ECATGETSTATUS

## Sintassi

  ```
ECATGETSTATUS nodo, stato
  ```

## Parametri
|Parametro         | Descrizione                                                                            |                
|------------------|----------------------------------------------------------------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)      |         
| **stato**        | variabile integer.                                                                     |

## Descrizione
Restituisce lo stato corrente del **nodo** richiesto nella variabile **stato**.

Genera errore di sistema se il nodo richiesto non è presente in configurazione.

I valori possibili sono:

|Valore    | Stato                                        |                
|----------|----------------------------------------------|
|	1        | INIT                                         |
|	2        | PREOP                                        |
|	3        | BOOT                                         |
|	4        | SAFEOP                                       |
|	8        | OPERATIONAL                                  |
|	-1       | IL NODO NON È COLLEGATO                      |
|	-2       | IL NODO NON È PRESENTE IN CONFIGURAZIONE     | 
