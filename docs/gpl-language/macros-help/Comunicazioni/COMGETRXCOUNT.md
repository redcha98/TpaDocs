---
sidebar_position: 3
---

# COMGETRXCOUNT

## Sintassi

  ```
  COMGETRXCOUNT	numeroCOM, numchar
  ```

## Parametri
|Parametro         | Descrizione                                                                                                                |                
|------------------|----------------------------------------------------------------------------------------------------------------------------|
| **numeroCOM**    | costante o variabile numerica. Numero della porta seriale. I valori che possono essere assegnati sono **COM1** o **COM2**. |         
| **numchar**      | numero di caratteri presenti nel buffer                                                                                    |

## Descrizione
L'istruzione restituisce il numero di caratteri presenti nel buffer di ricezione. Permette di sapere se so-no stati ricevuti caratteri dalla porta seriale.