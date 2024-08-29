---
sidebar_position: 2
---

# CANGETMASTERSTATE

## Sintassi

  ```
 CANGETMASTERSTATE stato
  ```

## Parametri
|Parametro                 | Descrizione                                         |                
|--------------------------|-----------------------------------------------------|
| **stato**                | variabile integer                                   |        
 
## Descrizione
Restituisce lo stato del protocollo NMT per il **nodo** della scheda indicato. 

I possibili valori per **stato** sono i seguenti:

| Valore  | Stato del master                       |                
|---------|----------------------------------------|
|  4	    |  Master in stato di Stop               |
|  5    	|  Master in stato Operational           |
|  127	  |  Master in stato Pre-Operational       |
