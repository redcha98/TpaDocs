---
sidebar_position: 6
---

# CANSETNMTSTATE

## Sintassi

  ```
CANSETNMTSTATE nodo, stato
  ```

## Parametri
|Parametro                 | Descrizione                                               |                
|--------------------------|-----------------------------------------------------------|
| **nodo**                 | costante o variabile integer. Numero nodo                 |        
| **stato**                | costante o variabile integer.                             |

## Descrizione
Imposta lo **stato** del protocollo NMT per il **nodo** CAN indicato o per tutti i nodi sul bus. 

Se il valore di **nodo** è uguale a 0 o a 127, l'impostazione viene applicata a tutti i nodi configurati e presenti sul bus CAN. 

I possibili valori per **stato** sono i seguenti:

|Valore   | Stato del protocollo                          |                
|---------|-----------------------------------------------|
|  1	    |  Comanda il passaggio a Operational           |
|  2    	|  Comanda il passaggio in Stop                 |
|  128	  |  Comanda il passaggio a Pre-Operational       |
|  129	  |  Reset del nodo                               |
|  130	  |  Reset della comunicazione                    |
