---
sidebar_position: 3
---

# ECATGETPDO

## Sintassi

  ```
ECATGETPDO nodo, indice, sottoindice, dato
  ```

## Parametri
|Parametro         | Descrizione                     |                
|------------------|---------------------------------|
| **nodo**         | Costante o variabile integer. Identificativo assegnato al nodo EtherCAT (1-65535)  |         
| **indice**       | Indice oggetto nel dizionario (es $6061h) oppure posizione assoluta del PDO nella lista di PDO configurati per il nodo (es 1 ... N con N = numero di TxPDO mappati per il nodo)    |         
| **sottoindice**  | costante o variabile integer. Se il parametro indice identifica l'oggetto tramite il suo index allora questo parametro viene interpretato come sottoindice dell'oggetto scelto (0,1,2…). Viceversa, se il parametro indice identifica il PDO tramite la posizione assoluta del PDO questo parametro identifica la posizione assoluta dell'oggetto all'interno del PDO scelto (1 … M con M = numero di oggetti configurati nel TxPDO in esame) |         
| **dato**         | variabile numerica o vettore di byte o char. Riceve il valore    |         
 
## Descrizione
Restituisce in **dato** il contenuto di un oggetto, identificato da **indice** e **sottoindice**, scambiato tramite i TxPDO o RxPDO (rilettura) configurati per il **nodo** EtherCAT.