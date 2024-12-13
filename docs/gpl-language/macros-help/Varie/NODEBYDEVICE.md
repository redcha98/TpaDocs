---
sidebar_position: 4
---

# NODEBYDEVICE

## Sintassi

  ```
NODEBYDEVICE dispositivo, fieldbus, nodo [,offset]
  ```

## Parametri
|Parametro                 | Descrizione                                                |                
|--------------------------|------------------------------------------------------------|
| **dispositivo**          | nome di dispositivo.                                       |         
| **fieldbus**             | variabile integer. Riceve l’identificativo del bus         |              
| **nodo**                 | variabile integer. Riceve il numero di nodo                |                 
| **offset**               | variabile integer. Riceve l’offset all’interno del nodo    |         

## Descrizione
Restituisce il numero di BUS (nella variabile **fieldbus**) e il numero di nodo (nella variabile **nodo**) del dispositivo definito nel parametro **dispositivo**. 

Se il dispositivo è connesso ad uno slot all'interno del nodo il numero di slot viene posto in  **offset**.

Questa istruzione serve per poter utilizzare le istruzioni che non hanno dei riferimenti diretti a dispositivi, come, ad esempio, le istruzioni [ECATREADSDO](../Ethercat/ECATREADSDO.md) e [ECATWRITESDO](../Ethercat/ECATREADSDO.md). 

L’istruzione può essere utilizzata per dispositivi configurati su bus CAN o EtherCAT.

Se il numero **nodo** restituito è un valore negativo, significa che il nodo è disabilitato.

