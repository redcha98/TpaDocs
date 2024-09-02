---
sidebar_position: 9
---

# ECATSETPDO

## Sintassi

  ```
ECATSETPDO nodo, indice, sottoindice, dato
  ```

## Parametri
|Parametro         | Descrizione                     |                
|------------------|---------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)  |         
| **indice**       | Indice oggetto nel dizionario (es $6061h) oppure posizione assoluta del PDO nella lista di PDO configurati per il nodo (es 1 ... N con N = numero di RxPDO mappati per il nodo)    |         
| **sottoindice**  | costante o variabile integer. Se il parametro indice identifica l'oggetto tramite il suo index allora questo parametro viene interpretato come sottoindice dell'oggetto scelto (0,1,2…). Viceversa, se il parametro indice identifica il PDO tramite la posizione assoluta del PDO questo parametro identifica la posizione assoluta dell'oggetto all'interno del PDO scelto (1 … M con M = numero di oggetti configurati nel RxPDO in esame) |         
| **dato**         | Costante o variabile numerica o vettore di byte o char. Valore da impostare.    |         
 
## Descrizione
Imposta il contenuto **dato** di un oggetto, identificato da **indice** e **sottoindice**, e scambiato tramite i PDO configurati per il **nodo** EtherCAT.