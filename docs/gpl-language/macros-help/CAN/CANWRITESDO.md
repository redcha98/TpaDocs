---
sidebar_position: 7
---

# CANWRITESDO

## Sintassi

  ```
CANWRITESDO nodo,indice,sottoindice,dimdato,dato [,errore]
  ```

## Parametri
|Parametro                 | Descrizione                                                                           |                
|--------------------------|---------------------------------------------------------------------------------------|
| **nodo**                 | costante o variabile integer. Numero nodo                                             |        
| **indice**               | costante o variabile integer. Indice oggetto nel dizionario                           |        
| **sottoindice**          | costante o variabile integer. Sottoindice oggetto nel dizionario                      |        
| **dimdato**              | variabile integer. Grandezza dato letto.                                              |        
| **dato**                 | costamte o variabile numerica o string o vettore di char o byte. Variabile che contiene il dato    |        
| **errore**               | variabile integer. Codice di errore restituito dal nodo                               |        
 
## Descrizione
Scrive il contenuto di un oggetto del dizionario di oggetti contenuti nel **nodo** con il valore dalla variabile **dato**. 

L'istruzione permette di scrivere tramite il protocollo SDO tutti gli oggetti definiti secondo _"CiA 402 CANopen device profile"_ oltre a tutti gli oggetti resi disponibili dal produttore del nodo. 

Per il significato dei parametri **indice**, **sottoindice** e **dimdato** fare riferimento a _"CiA 402 CANopen device profile"_ o alla specifica del produttore del nodo.

Se il tentativo di scrittura fallisce viene ritornato in **errore** il codice di errore da specifica _"CiA 402 CANopen device profile"_.