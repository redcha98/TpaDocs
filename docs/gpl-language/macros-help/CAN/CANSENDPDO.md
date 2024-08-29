---
sidebar_position: 5
---

# CANSENDPDO

## Sintassi

  ```
CANSENDPDO nodo, numeroPDO
  ```

## Parametri
|Parametro                 | Descrizione                                                                           |                
|--------------------------|---------------------------------------------------------------------------------------|
| **nodo**                 | costante o variabile integer. Numero del nodo                                         |        
| **numeroPDO**            | costante o variabile integer. Numero del PDO                                          |         
 
## Descrizione
Scrive il contenuto del PDO specificato da **numeroPDO** per il **nodo** indicato. 

Questa istruzione si utilizza per la scrittura di PDO asincroni (ovvero i PDO che in configurazione hardware hanno abilitato l'opzione _Asincrono_). 
