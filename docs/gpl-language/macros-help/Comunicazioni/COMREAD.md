---
sidebar_position: 4
---

# COMREAD

## Sintassi

  ```
  COMREAD	numeroCOM, buffer, numchardaleggere, numcharletti [,timeout]
  ```

## Parametri
|Parametro              | Descrizione                                                                                                                |                
|-----------------------|----------------------------------------------------------------------------------------------------------------------------|
| **numeroCOM**         | costante o variabile numerica. Numero della porta seriale. I valori che possono essere assegnati sono **COM1** o **COM2**. |         
| **buffer**            | vettore di char o di byte. Qui vengono memorizzati i caratteri letti                                                       |         
| **numchardaleggere**  | numero di caratteri che si desidera leggere dalla linea seriale                                                            |         
| **numcharletti**      | numero di caratteri effettivamente letti                                                                                   |         
| **timeout**           | timeout di attesa (in secondi)                                                                                             |

## Descrizione
L'istruzione legge dei caratteri dalla seriale **NumeroCOM**. I caratteri letti vengono memorizzati nella variabile **buffer**. Il campo **numchardaleggere** indica il numero di caratteri che l'istruzione dovrà leggere. Se nel buffer di ricezione della seriale ci sono meno caratteri ed il parametro **timeout** non è specificato, l'istruzione terminerà immediatamente, specificando nel parametro **numcharletti** il numero di caratteri effettivamente letti. Se il parametro **timeout** è specificato, allora l'istruzione dovrà attendere al massimo il numero di secondi indicato nella variabile, in attesa che arrivino altri caratteri. Se il **timeout** scade, allora l'istruzione uscirà, sempre specificando in **numcharletti** il numero di caratteri effettivamente copiato in buffer. 