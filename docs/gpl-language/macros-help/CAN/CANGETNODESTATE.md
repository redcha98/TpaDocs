---
sidebar_position: 1
---

# CANGETNODESTATE

## Sintassi

  ```
 CANGETNODESTATE nodo, stato
  ```

## Parametri
|Parametro                 | Descrizione                                         |                
|--------------------------|-----------------------------------------------------|
| **nodo**                 | Costante o variabile integer. Numero del nodo       |         
| **stato**                | variabile integer                                   |        
 
## Descrizione
Restituisce lo stato del protocollo NMT per il **nodo** della scheda indicato. 

I possibili valori per **stato** sono i seguenti:

| Valore  | Stato del nodo                       |                
|---------|--------------------------------------|
|  4	    |  Nodo in stato di Stop               |
|  5    	|  Nodo in stato Operational           |
|  127	  |  Nodo in stato Pre-Operational       |
