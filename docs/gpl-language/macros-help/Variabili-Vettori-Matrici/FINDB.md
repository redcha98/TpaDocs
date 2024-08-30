---
sidebar_position: 3
---

# FINDB

## Sintassi

  ```
FINDB matrice, colonna, limite_min, limite_max, valore, variabile
FINDB vettore, limite_min, limite_max, valore, variabile
  ```

## Parametri
|Parametro                | Descrizione                                                                                           |                
|-------------------------|-------------------------------------------------------------------------------------------------------|
| **matrice**             | nome della matrice. Matrice in cui eseguire la ricerca                                                |               
| **vettore**             | nome del vettore. Vettore in cui eseguire la ricerca                                                  |               
| **colonna**             | costante o variabile integer. Numero di colonna della matrice in cui eseguire la ricerca              |               
| **limite_min**          | costante o variabile integer. Indice minimo del vettore o della matrice da cui iniziare la ricerca    |               
| **limite_max**          | costante o variabile integer. Indice massimo del vettore o della matrice dove terminare la ricerca    |               
| **valore**              | costante o variabile numerica, boolean o timer. Valore da ricercare                                   |               
| **variabile**           | variabile integer. Risultato della ricerca                                                            |               

## Descrizione
Esegue una ricerca veloce di un **valore** all'interno di un **vettore** o di una **colonna** della **matrice** e pone l'indice dell'elemento in **variabile**. 

Perché la ricerca abbia successo, è necessario che il **vettore** o la **colonna** della **matrice** siano stati ordinati precedentemente con l'istruzione [SORT](SORT.md) secondo un ordinamento crescente.

Se il **valore** non è stato trovato, **variabile** conterrà il valore -1.
