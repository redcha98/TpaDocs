---
sidebar_position: 6
---

# MOVEMAT

## Sintassi

  ```
MOVEMAT nomematsorg, nomematdest
MOVEMAT nomematsorg[rigasorg], nomematdest[rigadest]
MOVEMAT nomematsorg[rigasorg], nomematdest[rigadest] ,numrighe
MOVEMAT nomevetsorg, nomevetdest
  ```

## Parametri
|Parametro                | Descrizione                                                                                 |                
|-------------------------|---------------------------------------------------------------------------------------------|
| **nomematsorg**         | nome matrice sorgente                                                                       |
| **rigasorg**            | numero di riga di partenza per la copia della matrice sorgente (argomento obbligatorio)     |
| **nomematdest**         | nome matrice destinataria                                                                   |
| **rigadest**            | numero di riga di partenza per la copia nella matrice destinataria (argomento obbligatorio) |
| **numrighe**            | numero di righe da copiare                                                                  |
| **nomevetsorg**         | nome vettore sorgente                                                                       |
| **nomevetdest**         | nome vettore destinataria                                                                   |

## Descrizione
Copia il contenuto di una intera matrice **nomematsorg** in un'altra matrice **nomematdest** o una o più righe **numrighe** della riga di matrice **nomematsorg[rigasorg]** nella riga della matrice **nomematdest[rigadest]**.  

Se il parametro **numrighe** non è specificato, viene copiata una sola riga. 

Le due matrici devono avere la stessa tipologia di struttura (numero di colonne e tipo di dato di ciascuna colonna) e, nel caso di matrici intere, anche lo stesso numero di righe. 

Si possono spostare righe di dati all'interno della stessa matrice.

### Esempio
  ```c {1,4,7,11,16} showLineNumbers
;// copia la matrice Mx1 nella Mx2
Movemat	Mx1, Mx2		

;// copia la riga 10 della matrice Mx1 nella riga 3 di Mx2
Movemat	Mx1[10], Mx2[3]

;// copia la riga 1 della matrice Mx1 nella riga 7 di Mx1
Movemat	Mx1[1], Mx1[7]

;// copia 6 righe a partire dalla riga 2 della matrice Mx1 nella matrice
;// Mx2 a partire dalla riga 8
Movemat	Mx1[2], Mx2[8], 6

;// copia 4 righe a partire dalla riga 2 
;// della matrice Mx1 nella stessa matrice 
;// Mx1 a partire dalla riga 10
Movemat  Mx1[2], Mx1[10], 4
 ```
