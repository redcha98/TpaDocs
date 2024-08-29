---
sidebar_position: 4
---

# CANRECEIVEPDO

## Sintassi

  ```
CANRECEIVEPDO nodo, numeroPDO
  ```

## Parametri
|Parametro                 | Descrizione                                                                           |                
|--------------------------|---------------------------------------------------------------------------------------|
| **nodo**                 | costante o variabile integer. Numero del nodo                                         |        
| **numeroPDO**            | costante o variabile integer. Numero del PDO                                          |         
 
## Descrizione
Legge il contenuto del PDO specificato da **numeroPDO** per il **nodo** indicato. 

Questa istruzione si utilizza per la lettura di PDO asincroni (ovvero i PDO che in configurazione hardware hanno abilitato l'opzione _Asincrono_). 

Il dato letto è copiato nei dispositivi collegati in virtuale-fisico. 
