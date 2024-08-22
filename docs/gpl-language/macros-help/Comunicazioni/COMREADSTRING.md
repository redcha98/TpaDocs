---
sidebar_position: 5
---

# COMREADSTRING

## Sintassi

  ```
 COMREADSTRING	numeroCOM, buffer, numcharletti [,terminatore [,timeout]]
  ```

## Parametri
|Parametro              | Descrizione                                                                                                                |                
|-----------------------|----------------------------------------------------------------------------------------------------------------------------|
| **numeroCOM**         | costante o variabile numerica. Numero della porta seriale. I valori che possono essere assegnati sono **COM1** o **COM2**. |         
| **buffer**            | vettore di char o di byte. Qui vengono memorizzati i caratteri letti                                                       |         
| **numcharletti**      | numero di caratteri effettivamente letti                                                                                   |       
| **terminatore**       | carattere di terminazione trasmissione                                                                                     |           
| **timeout**           | timeout di attesa (in secondi)                                                                                             |


## Descrizione
L'istruzione legge dei caratteri dalla seriale **NumeroCOM**. Si differenzia dalla [COMREAD](COMREAD.md), perché legge dalla seriale, fino a che non trova il carattere terminatore. I caratteri letti vengono memorizzati nella variabile **buffer**. Questa variabile deve essere di tipo vettore di char. Il campo **numcharletti** indica il numero di caratteri che l'istruzione ha effettivamente letto dalla linea seriale e quindi copiato nel **buffer**. Il parametro **terminatore** indica il carattere che fungerà da terminatore della trasmissione. In pratica, l'istruzione dovrà leggere caratteri dalla seriale, fino a che non incontrerà un carattere uguale a quello specificato in questo parametro. Questo parametro è opzionale. Se non c'è, si intende che il carattere di terminazione è lo zero. Il carattere zero non sarà copiato nel buffer passato per parametro, mentre un eventuale carattere di terminazione specificato nell'istruzione verrà copiato nel buffer. 

Il **timeout** è un altro parametro che indica quanti secondi l'istruzione deve attendere che arrivino nuovi caratteri, se ha svuotato il buffer di ricezione, senza aver trovato il carattere di terminazione. Se il parametro **timeout** non è specificato, allora l'istruzione terminerà appena svuotato il buffer di ricezione. 
